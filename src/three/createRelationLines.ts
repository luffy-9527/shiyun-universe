import * as THREE from 'three';
import type { PoetNode, QualityMode, RelationEdge } from '../types/poetry';

export interface RelationLinesLayer {
  group: THREE.Group;
  visibleVertexCount: number;
  updateVisibility: (selectedPoetId: string | null, show: boolean) => void;
  setPerformanceLevel: (level: number) => void;
  update: (elapsedSeconds: number) => void;
  dispose: () => void;
}

interface ArcMeta {
  source: string;
  target: string;
  weight: number;
  vertexOffset: number;
  vertexCount: number;
  baseAlpha: number;
}

function pushCurve(
  positions: number[],
  colors: number[],
  alphas: number[],
  selected: number[],
  progress: number[],
  curve: THREE.CubicBezierCurve3,
  color: THREE.Color,
  alpha: number,
  segments: number,
) {
  let prev = curve.getPoint(0);
  for (let i = 1; i <= segments; i++) {
    const t = i / segments;
    const next = curve.getPoint(t);
    positions.push(prev.x, prev.y, prev.z, next.x, next.y, next.z);
    colors.push(color.r, color.g, color.b, color.r, color.g, color.b);
    alphas.push(alpha, alpha);
    selected.push(0, 0);
    progress.push((i - 1) / segments, t);
    prev = next;
  }
}

/**
 * 关系弧线采用单个 BufferGeometry 合批。v9 收紧边数与分段，并允许自适应 drawRange，
 * 避免全量真实关系图在高分辨率屏幕上抢占星云渲染预算。
 */
export function createRelationLines(poets: PoetNode[], relations: RelationEdge[], quality: QualityMode): RelationLinesLayer {
  const group = new THREE.Group();
  group.name = 'gift-relation-bundles';
  const byId = new Map(poets.map((p) => [p.id, p]));
  const positions: number[] = [];
  const colors: number[] = [];
  const alphas: number[] = [];
  const selected: number[] = [];
  const progress: number[] = [];
  const metas: ArcMeta[] = [];

  const sorted = [...relations].sort((a, b) => b.weight - a.weight);
  const maxEdges = Math.min(sorted.length, quality === 'high' ? 3200 : 1200);
  for (let i = 0; i < maxEdges; i++) {
    const rel = sorted[i];
    const a = byId.get(rel.sourcePoetId);
    const b = byId.get(rel.targetPoetId);
    if (!a || !b) continue;
    const start = new THREE.Vector3(a.position.x, a.position.y, a.position.z);
    const end = new THREE.Vector3(b.position.x, b.position.y, b.position.z);
    const dist = start.distanceTo(end);
    const centre = new THREE.Vector3(0, 0, 0);
    const m1 = start.clone().lerp(end, 0.36).lerp(centre, 0.30);
    const m2 = start.clone().lerp(end, 0.64).lerp(centre, 0.30);
    const lift = Math.min(165, dist * 0.16 + rel.weight * 7);
    m1.y += lift * 0.78;
    m2.y += lift;
    const curve = new THREE.CubicBezierCurve3(start, m1, m2, end);
    const color = new THREE.Color(rel.type === 'gift' ? '#ffd079' : '#7ddcff').lerp(new THREE.Color('#ffffff'), Math.min(0.15, rel.weight * 0.020));
    const baseAlpha = Math.min(0.075, 0.008 + rel.weight * 0.008);
    const before = positions.length / 3;
    const segments = quality === 'high' ? (dist > 700 ? 22 : 16) : dist > 700 ? 14 : 10;
    pushCurve(positions, colors, alphas, selected, progress, curve, color, baseAlpha, segments);
    const after = positions.length / 3;
    metas.push({ source: rel.sourcePoetId, target: rel.targetPoetId, weight: rel.weight, vertexOffset: before, vertexCount: after - before, baseAlpha });
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  geometry.setAttribute('aAlpha', new THREE.Float32BufferAttribute(alphas, 1));
  geometry.setAttribute('aSelected', new THREE.Float32BufferAttribute(selected, 1));
  geometry.setAttribute('aProgress', new THREE.Float32BufferAttribute(progress, 1));
  geometry.computeBoundingSphere();

  const material = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uShow: { value: 1 },
    },
    vertexColors: true,
    transparent: true,
    depthWrite: false,
    depthTest: true,
    blending: THREE.AdditiveBlending,
    vertexShader: `
      precision highp float;
      attribute float aAlpha;
      attribute float aSelected;
      attribute float aProgress;
      varying vec3 vColor;
      varying float vAlpha;
      varying float vSelected;
      varying float vProgress;
      void main(){
        vColor = color;
        vAlpha = aAlpha;
        vSelected = aSelected;
        vProgress = aProgress;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      precision mediump float;
      uniform float uTime;
      uniform float uShow;
      varying vec3 vColor;
      varying float vAlpha;
      varying float vSelected;
      varying float vProgress;
      void main(){
        float flow = fract(vProgress - uTime * (0.055 + vSelected * 0.045));
        float pulse = smoothstep(0.945, 1.0, flow) * (0.08 + vSelected * 0.28);
        float endFade = smoothstep(0.0, 0.12, vProgress) * smoothstep(1.0, 0.86, vProgress);
        float sel = mix(0.32, 1.0, vSelected);
        float alpha = (vAlpha * sel + pulse) * endFade * uShow;
        if(alpha < 0.004) discard;
        vec3 col = mix(vColor, vec3(1.0, 0.91, 0.68), vSelected * 0.22 + pulse * 0.12);
        gl_FragColor = vec4(col, alpha);
      }
    `,
  });

  const lines = new THREE.LineSegments(geometry, material);
  lines.name = 'gift-relation-lines';
  lines.frustumCulled = true;
  group.add(lines);

  let performanceLevel = quality === 'smooth' ? 1 : 0;
  let visibleVertexCount = positions.length / 3;

  function setPerformanceLevel(level: number) {
    performanceLevel = Math.max(0, Math.min(2, level));
    const ratio = performanceLevel === 0 ? 1 : performanceLevel === 1 ? 0.66 : 0.36;
    visibleVertexCount = Math.max(2, Math.floor((positions.length / 3) * ratio / 2) * 2);
    geometry.setDrawRange(0, visibleVertexCount);
  }

  function setEdgeSelection(selectedPoetId: string | null, show: boolean) {
    material.uniforms.uShow.value = show ? 1 : 0;
    group.visible = show;
    const alphaAttr = geometry.getAttribute('aAlpha') as THREE.BufferAttribute;
    const selectedAttr = geometry.getAttribute('aSelected') as THREE.BufferAttribute;
    for (const meta of metas) {
      const hit = !!selectedPoetId && (meta.source === selectedPoetId || meta.target === selectedPoetId);
      const ambientVisible = !selectedPoetId && meta.weight >= 3;
      const nextAlpha = !show ? 0 : hit ? Math.min(0.18, meta.baseAlpha * 2.4 + 0.040) : ambientVisible ? meta.baseAlpha : selectedPoetId ? 0.0018 : meta.baseAlpha * 0.30;
      const nextSelected = hit ? 1 : 0;
      for (let i = meta.vertexOffset; i < meta.vertexOffset + meta.vertexCount; i++) {
        alphaAttr.setX(i, nextAlpha);
        selectedAttr.setX(i, nextSelected);
      }
    }
    alphaAttr.needsUpdate = true;
    selectedAttr.needsUpdate = true;
  }

  setPerformanceLevel(performanceLevel);

  return {
    group,
    get visibleVertexCount() {
      return visibleVertexCount;
    },
    updateVisibility: setEdgeSelection,
    setPerformanceLevel,
    update: (elapsedSeconds: number) => {
      material.uniforms.uTime.value = elapsedSeconds;
    },
    dispose: () => {
      geometry.dispose();
      material.dispose();
    },
  };
}
