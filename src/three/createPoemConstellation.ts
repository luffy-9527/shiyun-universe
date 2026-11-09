import * as THREE from 'three';
import type { PoemNode, PoetNode, QualityMode } from '../types/poetry';
import { hexToRgb01 } from '../utils/color';

export interface PoemConstellationLayer {
  group: THREE.Group;
  duration: number;
  update: (elapsedSeconds: number) => boolean;
  dispose: () => void;
}

function pickEvenly<T>(items: T[], max: number): T[] {
  if (items.length <= max) return items;
  const picked: T[] = [];
  const step = items.length / max;
  for (let i = 0; i < max; i++) picked.push(items[Math.floor(i * step)]);
  return picked;
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - Math.min(1, Math.max(0, t)), 3);
}

function easeInOut(t: number) {
  const k = Math.min(1, Math.max(0, t));
  return k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
}

function buildLineSegments(points: Array<[THREE.Vector3, THREE.Vector3]>) {
  const positions = new Float32Array(points.length * 2 * 3);
  points.forEach(([a, b], i) => {
    const idx = i * 6;
    positions[idx] = a.x;
    positions[idx + 1] = a.y;
    positions[idx + 2] = a.z;
    positions[idx + 3] = b.x;
    positions[idx + 4] = b.y;
    positions[idx + 5] = b.z;
  });
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.computeBoundingSphere();
  return geometry;
}

/**
 * 诗人被搜索/选中时的“一次性诗句引力网”。
 * 只连接当前已加载的该诗人作品，持续数秒后自动淡出，避免长期占用画面和性能。
 */
export function createPoemConstellation(poet: PoetNode, poems: PoemNode[], quality: QualityMode, duration = 6.2): PoemConstellationLayer | null {
  if (!poet || poems.length === 0) return null;
  const group = new THREE.Group();
  group.name = `poem-constellation:${poet.id}`;
  group.renderOrder = 30;

  const center = new THREE.Vector3(poet.position.x, poet.position.y, poet.position.z);
  const high = quality === 'high';
  const maxPoems = high ? 480 : 190;
  const sampled = pickEvenly(poems, maxPoems);
  const [r, g, b] = hexToRgb01(poet.color || '#ffd06c');
  const mainColor = new THREE.Color(r, g, b).lerp(new THREE.Color('#fff2bd'), 0.18);
  const secondaryColor = new THREE.Color(r, g, b).lerp(new THREE.Color('#8ee8ff'), 0.22);

  const radialSegments: Array<[THREE.Vector3, THREE.Vector3]> = [];
  const shaftSegments: Array<[THREE.Vector3, THREE.Vector3]> = [];
  const horizonSegments: Array<[THREE.Vector3, THREE.Vector3]> = [];
  const pointPositions = new Float32Array(sampled.length * 3);
  const pointSizes = new Float32Array(sampled.length);
  const rand = (i: number) => {
    const n = Math.sin(i * 9283.177 + poet.id.length * 19.31) * 43758.5453123;
    return n - Math.floor(n);
  };

  sampled.forEach((poem, i) => {
    const p = new THREE.Vector3(poem.position.x, poem.position.y, poem.position.z);
    const nearCenter = center.clone().lerp(p, 0.08);
    radialSegments.push([nearCenter, p]);

    const distance = center.distanceTo(p);
    const shaft = Math.min(260, Math.max(72, distance * 0.55 + rand(i) * 90));
    const xJitter = (rand(i + 100) - 0.5) * 2.4;
    const zJitter = (rand(i + 200) - 0.5) * 2.4;
    shaftSegments.push([
      new THREE.Vector3(p.x + xJitter, p.y - shaft * (0.45 + rand(i + 2) * 0.28), p.z + zJitter),
      new THREE.Vector3(p.x - xJitter, p.y + shaft * (0.56 + rand(i + 3) * 0.34), p.z - zJitter),
    ]);

    if (i % 3 === 0) {
      const flat = center.clone().lerp(p, 0.92);
      flat.y = center.y + (rand(i + 5) - 0.5) * 12;
      horizonSegments.push([center.clone().add(new THREE.Vector3((rand(i + 6) - 0.5) * 28, 0, (rand(i + 7) - 0.5) * 28)), flat]);
    }

    const idx = i * 3;
    pointPositions[idx] = p.x;
    pointPositions[idx + 1] = p.y;
    pointPositions[idx + 2] = p.z;
    pointSizes[i] = poem.source === 'real-shard' ? 2.2 + rand(i) * 1.8 : 3.2 + rand(i) * 2.1;
  });

  const radialMaterial = new THREE.LineBasicMaterial({
    color: mainColor,
    transparent: true,
    opacity: 0.0,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    depthTest: true,
  });
  const shaftMaterial = new THREE.LineBasicMaterial({
    color: secondaryColor,
    transparent: true,
    opacity: 0.0,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    depthTest: true,
  });
  const horizonMaterial = new THREE.LineBasicMaterial({
    color: mainColor.clone().lerp(new THREE.Color('#ffffff'), 0.32),
    transparent: true,
    opacity: 0.0,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    depthTest: true,
  });

  const radialLines = new THREE.LineSegments(buildLineSegments(radialSegments), radialMaterial);
  const shaftLines = new THREE.LineSegments(buildLineSegments(shaftSegments), shaftMaterial);
  const horizonLines = new THREE.LineSegments(buildLineSegments(horizonSegments), horizonMaterial);
  radialLines.name = 'poem-constellation-radial';
  shaftLines.name = 'poem-constellation-shafts';
  horizonLines.name = 'poem-constellation-horizon';
  group.add(radialLines, shaftLines, horizonLines);

  const pointGeometry = new THREE.BufferGeometry();
  pointGeometry.setAttribute('position', new THREE.BufferAttribute(pointPositions, 3));
  pointGeometry.setAttribute('aSize', new THREE.BufferAttribute(pointSizes, 1));
  pointGeometry.computeBoundingSphere();
  const pointMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uOpacity: { value: 0 },
      uColor: { value: mainColor },
    },
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexShader: `
      precision highp float;
      attribute float aSize;
      uniform float uTime;
      void main(){
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        float pulse = 1.0 + sin(uTime * 3.2 + position.x * 0.025 + position.z * 0.018) * 0.18;
        gl_PointSize = clamp(aSize * pulse * (390.0 / max(122.0, -mvPosition.z)), 1.6, 14.0);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      precision highp float;
      uniform vec3 uColor;
      uniform float uOpacity;
      void main(){
        float d = length(gl_PointCoord - 0.5);
        float core = smoothstep(0.16, 0.0, d);
        float halo = smoothstep(0.48, 0.02, d) * 0.46;
        float a = (core + halo) * uOpacity;
        if(a < 0.018) discard;
        gl_FragColor = vec4(uColor * (1.08 + core * 0.72), a);
      }
    `,
  });
  const poemPoints = new THREE.Points(pointGeometry, pointMaterial);
  poemPoints.name = 'poem-constellation-points';
  group.add(poemPoints);

  const peakRadial = high ? 0.064 : 0.050;
  const peakShaft = high ? 0.070 : 0.052;
  const peakHorizon = high ? 0.040 : 0.028;
  let localStart: number | null = null;

  return {
    group,
    duration,
    update: (elapsedSeconds: number) => {
      if (localStart == null) localStart = elapsedSeconds;
      const t = elapsedSeconds - localStart;
      const intro = easeOutCubic(t / 0.8);
      const fade = t > duration - 1.55 ? 1 - easeInOut((t - (duration - 1.55)) / 1.55) : 1;
      const breathe = 0.9 + Math.sin(elapsedSeconds * 2.1) * 0.1;
      const opacity = Math.max(0, intro * fade);
      radialMaterial.opacity = peakRadial * opacity * breathe;
      shaftMaterial.opacity = peakShaft * opacity * (0.86 + Math.sin(elapsedSeconds * 1.55) * 0.14);
      horizonMaterial.opacity = peakHorizon * opacity;
      pointMaterial.uniforms.uOpacity.value = Math.min(0.28, 0.20 * opacity);
      pointMaterial.uniforms.uTime.value = elapsedSeconds;
      group.scale.setScalar(1.0 + intro * 0.025);
      return t < duration;
    },
    dispose: () => {
      radialLines.geometry.dispose();
      shaftLines.geometry.dispose();
      horizonLines.geometry.dispose();
      radialMaterial.dispose();
      shaftMaterial.dispose();
      horizonMaterial.dispose();
      pointGeometry.dispose();
      pointMaterial.dispose();
    },
  };
}
