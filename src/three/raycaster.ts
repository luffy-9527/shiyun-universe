import * as THREE from 'three';

export interface PickResult {
  kind: 'poet' | 'poem';
  index: number;
  point: THREE.Vector3;
}

export class UniverseRaycaster {
  private raycaster = new THREE.Raycaster();
  private pointer = new THREE.Vector2(99, 99);

  constructor(private camera: THREE.PerspectiveCamera) {
    this.raycaster.params.Points = { threshold: 9 };
  }

  setPointer(clientX: number, clientY: number, rect: DOMRect) {
    this.pointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    this.pointer.y = -((clientY - rect.top) / rect.height) * 2 + 1;
  }

  pick(objects: THREE.Object3D[]): PickResult | null {
    this.raycaster.setFromCamera(this.pointer, this.camera);
    const hits = this.raycaster.intersectObjects(objects, false);
    const first = hits.find((h) => typeof h.index === 'number');
    if (!first || typeof first.index !== 'number') return null;
    const kind = first.object.userData.kind === 'poems' ? 'poem' : 'poet';
    return { kind, index: first.index, point: first.point };
  }
}
