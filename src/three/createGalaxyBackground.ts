import * as THREE from 'three';
import type { QualityMode } from '../types/poetry';
import { seededRandom } from '../utils/hash';
import { createNebulaTexture } from './textures';

export interface GalaxyBackground {
  group: THREE.Group;
  particleCount: number;
  visibleParticleCount: number;
  update: (elapsedSeconds: number) => void;
  setPerformanceLevel: (level: number) => void;
  dispose: () => void;
}

type PointLayerKind = 'dust' | 'far' | 'core' | 'hii';

interface LayerParams {
  count: number;
  radius: number;
  size: number;
  seed: string;
  kind: PointLayerKind;
}

interface PointLayer {
  points: THREE.Points;
  material: THREE.ShaderMaterial;
  count: number;
  kind: PointLayerKind;
  baseOpacity: number;
}

function smoothNoise(rand: () => number, r: number, theta: number) {
  const a = Math.sin(theta * 3.0 + r * 0.018) * 0.5 + 0.5;
  const b = Math.sin(theta * 7.0 - r * 0.011) * 0.5 + 0.5;
  return a * 0.62 + b * 0.28 + rand() * 0.10;
}

function makePoints(params: LayerParams): PointLayer {
  const { count, radius, size, seed, kind } = params;
  const rand = seededRandom(seed);
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const sizes = new Float32Array(count);
  const alphas = new Float32Array(count);
  const phases = new Float32Array(count);

  for (let i = 0; i < count; i++) {
    const arm = Math.floor(rand() * 4);
    const diskR = kind === 'far' ? Math.pow(rand(), 0.72) * radius : Math.pow(rand(), 0.58) * radius;
    const twist = kind === 'core' ? 0.025 : 0.0145;
    const armSpread = kind === 'far' ? 1.65 : kind === 'hii' ? 0.38 : 0.72;
    const theta = arm * (Math.PI / 2) + diskR * twist + (rand() - 0.5) * armSpread;
    const n = smoothNoise(rand, diskR, theta);
    const gap = n < (kind === 'dust' ? 0.22 : 0.13) ? 0.52 : 1.0;
    const spread = kind === 'far' ? 92 : kind === 'hii' ? 12 : 34;
    const yScale = kind === 'core' ? 0.060 : kind === 'far' ? 0.17 : 0.11;
    const y = (rand() - 0.5) * (12 + diskR * yScale) + Math.sin(theta * 2.0) * (kind === 'core' ? 1.8 : 6.0);
    const idx = i * 3;
    positions[idx] = Math.cos(theta) * diskR + (rand() - 0.5) * spread;
    positions[idx + 1] = y;
    positions[idx + 2] = Math.sin(theta) * diskR + (rand() - 0.5) * spread;

    const warm = Math.max(0, 1 - diskR / radius);
    const hii = kind === 'hii' ? 0.34 + rand() * 0.35 : 0;
    colors[idx] = Math.min(1, 0.38 + warm * 0.55 + hii + rand() * 0.08);
    colors[idx + 1] = Math.min(1, 0.46 + warm * 0.33 + rand() * 0.08 + (kind === 'hii' ? 0.10 : 0));
    colors[idx + 2] = Math.min(1, 0.66 + (1 - warm) * 0.24 + rand() * 0.10 + (kind === 'far' ? 0.18 : 0));
    sizes[i] = size * (0.58 + rand() * 1.18) * (kind === 'core' ? 1.05 + warm * 1.55 : 1) * gap;
    alphas[i] = (kind === 'far' ? 0.22 + rand() * 0.28 : kind === 'core' ? 0.36 + rand() * 0.34 : 0.26 + rand() * 0.34) * gap;
    phases[i] = rand() * Math.PI * 2;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
  geometry.setAttribute('aAlpha', new THREE.BufferAttribute(alphas, 1));
  geometry.setAttribute('aPhase', new THREE.BufferAttribute(phases, 1));
  geometry.computeBoundingSphere();

  const baseOpacity = kind === 'far' ? 0.34 : kind === 'core' ? 0.42 : kind === 'hii' ? 0.44 : 0.46;
  const material = new THREE.ShaderMaterial({
    uniforms: {
      uGlobalOpacity: { value: baseOpacity },
      uTime: { value: 0 },
    },
    vertexColors: true,
    transparent: true,
    depthWrite: false,
    depthTest: true,
    blending: THREE.AdditiveBlending,
    vertexShader: `
      precision highp float;
      attribute float aSize;
      attribute float aAlpha;
      attribute float aPhase;
      varying vec3 vColor;
      varying float vAlpha;
      uniform float uTime;
      void main(){
        vColor = color;
        float twinkle = 0.94 + sin(uTime * 0.72 + aPhase) * 0.06;
        vAlpha = aAlpha * twinkle;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = clamp(aSize * (470.0 / max(132.0, -mvPosition.z)), 0.65, 14.0);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      precision mediump float;
      uniform float uGlobalOpacity;
      varying vec3 vColor;
      varying float vAlpha;
      void main(){
        vec2 uv = gl_PointCoord - 0.5;
        float d2 = dot(uv, uv);
        if(d2 > 0.25) discard;
        float core = smoothstep(0.040, 0.0, d2);
        float halo = smoothstep(0.25, 0.012, d2);
        float alpha = (core * 0.82 + halo * 0.34) * vAlpha * uGlobalOpacity;
        if(alpha < 0.010) discard;
        gl_FragColor = vec4(vColor * (0.76 + core * 0.82 + halo * 0.18), alpha);
      }
    `,
  });

  const points = new THREE.Points(geometry, material);
  points.frustumCulled = true;
  points.name = `galaxy-${kind}`;
  return { points, material, count, kind, baseOpacity };
}

function makeNebulaPlane(
  seed: number,
  width: number,
  height: number,
  position: THREE.Vector3,
  rotation: THREE.Euler,
  palette: string[],
  opacity: number,
  textureSize: number,
) {
  const texture = createNebulaTexture(seed, palette, textureSize);
  const geometry = new THREE.PlaneGeometry(width, height, 1, 1);
  const material = new THREE.MeshBasicMaterial({
    map: texture,
    color: new THREE.Color('#ffffff'),
    transparent: true,
    opacity,
    depthWrite: false,
    depthTest: false,
    blending: THREE.NormalBlending,
    toneMapped: false,
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.name = 'soft-nebula-plane';
  mesh.position.copy(position);
  mesh.rotation.copy(rotation);
  mesh.renderOrder = -10;
  mesh.userData.generatedTexture = texture;
  mesh.userData.baseOpacity = opacity;
  return mesh;
}

export function createGalaxyBackground(quality: QualityMode): GalaxyBackground {
  const group = new THREE.Group();
  group.name = '诗云银河背景';
  const high = quality === 'high';

  // 真实诗人索引本身已有 3 万余星体，背景不再依靠暴力堆点。
  const layers: PointLayer[] = [
    makePoints({ count: high ? 30000 : 12500, radius: 760, size: high ? 1.02 : 1.18, seed: 'galaxy-dust-v9', kind: 'dust' }),
    makePoints({ count: high ? 8200 : 3600, radius: 1480, size: high ? 1.18 : 1.34, seed: 'far-stars-v9', kind: 'far' }),
    makePoints({ count: high ? 4400 : 1900, radius: 150, size: high ? 2.02 : 1.92, seed: 'core-stars-v9', kind: 'core' }),
    makePoints({ count: high ? 760 : 280, radius: 640, size: high ? 2.55 : 2.30, seed: 'hii-knots-v9', kind: 'hii' }),
  ];
  for (const layer of layers) group.add(layer.points);

  const core = layers[2].points;
  core.scale.set(1.58, 0.30, 1.58);
  layers[1].points.rotation.x = 0.20;

  const nebulaPlanes = [
    makeNebulaPlane(
      12,
      1260,
      680,
      new THREE.Vector3(60, -18, -70),
      new THREE.Euler(-Math.PI / 2 + 0.15, 0, 0.10),
      ['#17305c', '#1b5b73', '#7350a8', '#ffd46b'],
      high ? 0.17 : 0.13,
      high ? 512 : 384,
    ),
  ];
  if (high) {
    nebulaPlanes.push(
      makeNebulaPlane(
        37,
        980,
        560,
        new THREE.Vector3(-410, 36, 185),
        new THREE.Euler(-Math.PI / 2 + 0.22, 0, -0.42),
        ['#1b234f', '#40216d', '#70e6ff', '#ff8d6d'],
        0.10,
        384,
      ),
    );
  }
  group.add(...nebulaPlanes);

  const coreGlow = new THREE.Mesh(
    new THREE.SphereGeometry(104, high ? 28 : 20, high ? 20 : 14),
    new THREE.MeshBasicMaterial({
      color: new THREE.Color('#ffe6a3'),
      transparent: true,
      opacity: high ? 0.030 : 0.022,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
  );
  coreGlow.scale.set(2.0, 0.31, 2.0);
  coreGlow.name = 'galaxy-core-glow';
  coreGlow.userData.baseOpacity = (coreGlow.material as THREE.MeshBasicMaterial).opacity;
  group.add(coreGlow);

  const particleCount = layers.reduce((sum, layer) => sum + layer.count, 0);
  let visibleParticleCount = particleCount;
  let performanceLevel = quality === 'smooth' ? 1 : 0;

  const setPerformanceLevel = (level: number) => {
    performanceLevel = Math.max(0, Math.min(2, level));
    const ratios = performanceLevel === 0 ? [1, 1, 1, 1] : performanceLevel === 1 ? [0.76, 0.72, 0.82, 0.68] : [0.48, 0.42, 0.58, 0.36];
    const opacityScale = performanceLevel === 0 ? 1 : performanceLevel === 1 ? 0.88 : 0.72;
    visibleParticleCount = 0;
    layers.forEach((layer, index) => {
      const visible = Math.max(1, Math.floor(layer.count * ratios[index]));
      layer.points.geometry.setDrawRange(0, visible);
      layer.material.uniforms.uGlobalOpacity.value = layer.baseOpacity * opacityScale;
      visibleParticleCount += visible;
    });
    nebulaPlanes.forEach((mesh, index) => {
      mesh.visible = performanceLevel < 2 || index === 0;
      const material = mesh.material as THREE.MeshBasicMaterial;
      const base = mesh.userData.baseOpacity as number;
      material.opacity = base * (performanceLevel === 0 ? 1 : performanceLevel === 1 ? 0.78 : 0.54);
    });
    const coreMaterial = coreGlow.material as THREE.MeshBasicMaterial;
    coreMaterial.opacity = (coreGlow.userData.baseOpacity as number) * (performanceLevel === 2 ? 0.72 : 1);
  };

  setPerformanceLevel(performanceLevel);

  return {
    group,
    particleCount,
    get visibleParticleCount() {
      return visibleParticleCount;
    },
    update: (elapsedSeconds: number) => {
      // 低预算时把星云动画更新降到约 30fps；视觉连续但减少 uniform/合成压力。
      if (performanceLevel >= 2 && Math.floor(elapsedSeconds * 30) % 2 === 1) return;
      for (const layer of layers) layer.material.uniforms.uTime.value = elapsedSeconds;
      nebulaPlanes[0].rotation.z = 0.10 + Math.sin(elapsedSeconds * 0.035) * 0.012;
      if (nebulaPlanes[1]) nebulaPlanes[1].rotation.z = -0.42 - Math.sin(elapsedSeconds * 0.028) * 0.010;
    },
    setPerformanceLevel,
    dispose: () => {
      group.traverse((obj) => {
        const mesh = obj as THREE.Mesh | THREE.Points;
        const generated = mesh.userData?.generatedTexture as THREE.Texture | undefined;
        generated?.dispose?.();
        mesh.geometry?.dispose?.();
        const mat = mesh.material as THREE.Material | THREE.Material[] | undefined;
        if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
        else mat?.dispose?.();
      });
    },
  };
}
