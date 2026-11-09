import * as THREE from 'three';
import type { PoemNode } from '../types/poetry';

export interface PoemStarsLayer {
  points: THREE.Points;
  idByIndex: string[];
  totalCount: number;
  visibleCount: number;
  setPerformanceLevel: (level: number) => void;
  dispose: () => void;
}

export function createPoemStars(poems: PoemNode[]): PoemStarsLayer {
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(poems.length * 3);
  const colors = new Float32Array(poems.length * 3);
  const sizes = new Float32Array(poems.length);
  const idByIndex: string[] = [];

  poems.forEach((poem, i) => {
    const idx = i * 3;
    positions[idx] = poem.position.x;
    positions[idx + 1] = poem.position.y;
    positions[idx + 2] = poem.position.z;
    const modern = poem.form === '现代诗';
    colors[idx] = modern ? 0.55 : 0.86;
    colors[idx + 1] = modern ? 0.78 : 0.84;
    colors[idx + 2] = modern ? 1.0 : 0.66;
    sizes[i] = 1.55;
    idByIndex[i] = poem.id;
  });

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
  geometry.computeBoundingSphere();

  const material = new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 } },
    vertexColors: true,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexShader: `
      precision highp float;
      attribute float aSize;
      varying vec3 vColor;
      uniform float uTime;
      void main(){
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        float rawSize = aSize * (1.0 + sin(uTime * 1.8 + position.x * 0.025) * 0.09) * (405.0 / max(100.0, -mvPosition.z));
        gl_PointSize = clamp(rawSize, 1.6, 16.0);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      precision mediump float;
      varying vec3 vColor;
      void main(){
        vec2 uv = gl_PointCoord - 0.5;
        float d2 = dot(uv, uv);
        if(d2 > 0.25) discard;
        float core = smoothstep(0.030, 0.0, d2);
        float halo = smoothstep(0.25, 0.018, d2) * 0.42;
        float a = core + halo;
        if(a < 0.025) discard;
        gl_FragColor = vec4(vColor * (0.88 + core * 0.82 + halo * 0.18), a * 0.54);
      }
    `,
  });
  const points = new THREE.Points(geometry, material);
  points.name = 'poem-stars';
  points.userData.kind = 'poems';
  points.frustumCulled = true;

  let visibleCount = poems.length;
  const layer: PoemStarsLayer = {
    points,
    idByIndex,
    totalCount: poems.length,
    get visibleCount() {
      return visibleCount;
    },
    setPerformanceLevel: (level) => {
      const ratio = level <= 0 ? 1 : level === 1 ? 0.76 : 0.48;
      visibleCount = Math.max(1, Math.floor(poems.length * ratio));
      geometry.setDrawRange(0, visibleCount);
    },
    dispose: () => {
      geometry.dispose();
      material.dispose();
    },
  };
  return layer;
}
