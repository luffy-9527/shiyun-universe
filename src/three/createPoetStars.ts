import * as THREE from 'three';
import type { PoetNode } from '../types/poetry';
import { hexToRgb01, influenceToAlpha, influenceToSize } from '../utils/color';
import { famousWeight } from '../data/famousPoets';

export interface PoetStarsLayer {
  points: THREE.Points;
  geometry: THREE.BufferGeometry;
  material: THREE.ShaderMaterial;
  idByIndex: string[];
  indexById: Map<string, number>;
  updateSelection: (selectedId: string | null, related: Set<string>) => void;
  dispose: () => void;
}

const vertexShader = `
precision highp float;
attribute float aSize;
attribute float aAlpha;
attribute float aSelected;
attribute float aRelated;
attribute float aLandmark;
varying vec3 vColor;
varying float vAlpha;
varying float vSelected;
varying float vRelated;
varying float vLandmark;
uniform float uTime;
void main(){
  vColor = color;
  vAlpha = aAlpha;
  vSelected = aSelected;
  vRelated = aRelated;
  vLandmark = aLandmark;
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  float pulse = 1.0 + sin(uTime * 1.35 + position.x * 0.014 + position.z * 0.010) * (0.045 + aLandmark * 0.018);
  float selectedBoost = aSelected > 0.5 ? 1.16 : (aRelated > 0.5 ? 1.055 : 1.0);
  float rawSize = aSize * pulse * selectedBoost * (430.0 / max(108.0, -mvPosition.z));
  gl_PointSize = clamp(rawSize, 3.2, 54.0);
  gl_Position = projectionMatrix * mvPosition;
}
`;

const fragmentShader = `
precision highp float;
varying vec3 vColor;
varying float vAlpha;
varying float vSelected;
varying float vRelated;
varying float vLandmark;
void main(){
  vec2 uv = gl_PointCoord - 0.5;
  float d = length(uv);
  float core = smoothstep(0.135, 0.0, d);
  float body = smoothstep(0.36, 0.02, d) * 0.38;
  float halo = pow(max(0.0, 1.0 - d * 2.0), 2.35) * (0.22 + vLandmark * 0.13);
  float selectedRing = vSelected > 0.5 ? smoothstep(0.032, 0.0, abs(d - 0.335)) * 0.48 : 0.0;
  float relatedRing = vRelated > 0.5 ? smoothstep(0.022, 0.0, abs(d - 0.405)) * 0.18 : 0.0;
  float landmarkSpark = vLandmark > 0.01 ? smoothstep(0.010, 0.0, abs(uv.x)) * smoothstep(0.43, 0.08, abs(uv.y)) * 0.10 : 0.0;
  float alpha = (core * 0.76 + body + halo + selectedRing + relatedRing + landmarkSpark) * vAlpha;
  if(alpha < 0.018) discard;
  vec3 gilded = mix(vColor, vec3(1.0, 0.86, 0.48), vLandmark * 0.26);
  vec3 col = gilded * (0.82 + core * 0.82 + halo * 0.26 + selectedRing * 0.82 + relatedRing * 0.32);
  gl_FragColor = vec4(col, alpha);
}
`;

export function createPoetStars(poets: PoetNode[]): PoetStarsLayer {
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(poets.length * 3);
  const colors = new Float32Array(poets.length * 3);
  const sizes = new Float32Array(poets.length);
  const alpha = new Float32Array(poets.length);
  const selected = new Float32Array(poets.length);
  const related = new Float32Array(poets.length);
  const landmark = new Float32Array(poets.length);
  const idByIndex: string[] = [];
  const indexById = new Map<string, number>();

  poets.forEach((poet, i) => {
    const idx = i * 3;
    positions[idx] = poet.position.x;
    positions[idx + 1] = poet.position.y;
    positions[idx + 2] = poet.position.z;
    const [r, g, b] = hexToRgb01(poet.color);
    colors[idx] = r;
    colors[idx + 1] = g;
    colors[idx + 2] = b;
    const fw = famousWeight(poet.name);
    const countBoost = Math.min(1.18, Math.log10(poet.poemCount + 10) / 3.5);
    sizes[i] = influenceToSize(poet.influence, poet.poemCount) * (0.92 + (fw - 1) * 0.34) * countBoost;
    alpha[i] = Math.min(0.92, influenceToAlpha(poet.influence) * (fw > 1 ? 0.94 : 0.80));
    landmark[i] = Math.min(1, Math.max(0, (fw - 1) / 1.35));
    idByIndex[i] = poet.id;
    indexById.set(poet.id, i);
  });

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
  geometry.setAttribute('aAlpha', new THREE.BufferAttribute(alpha, 1));
  geometry.setAttribute('aSelected', new THREE.BufferAttribute(selected, 1));
  geometry.setAttribute('aRelated', new THREE.BufferAttribute(related, 1));
  geometry.setAttribute('aLandmark', new THREE.BufferAttribute(landmark, 1));
  geometry.computeBoundingSphere();

  const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: { uTime: { value: 0 } },
    vertexColors: true,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const points = new THREE.Points(geometry, material);
  points.name = 'poet-stars';
  points.userData.kind = 'poets';

  return {
    points,
    geometry,
    material,
    idByIndex,
    indexById,
    updateSelection: (selectedId, relatedSet) => {
      const selectedAttr = geometry.getAttribute('aSelected') as THREE.BufferAttribute;
      const relatedAttr = geometry.getAttribute('aRelated') as THREE.BufferAttribute;
      const alphaAttr = geometry.getAttribute('aAlpha') as THREE.BufferAttribute;
      poets.forEach((poet, i) => {
        const isSelected = poet.id === selectedId;
        const isRelated = relatedSet.has(poet.id) && !isSelected;
        selectedAttr.setX(i, isSelected ? 1 : 0);
        relatedAttr.setX(i, isRelated ? 1 : 0);
        alphaAttr.setX(i, selectedId ? (isSelected ? 0.94 : isRelated ? 0.62 : 0.20) : influenceToAlpha(poet.influence) * 0.82);
      });
      selectedAttr.needsUpdate = true;
      relatedAttr.needsUpdate = true;
      alphaAttr.needsUpdate = true;
    },
    dispose: () => {
      geometry.dispose();
      material.dispose();
    },
  };
}
