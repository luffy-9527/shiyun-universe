import * as THREE from 'three';
import type { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import type { Vec3Tuple } from '../types/poetry';

export class CameraController {
  private fromPos = new THREE.Vector3();
  private toPos = new THREE.Vector3();
  private fromTarget = new THREE.Vector3();
  private toTarget = new THREE.Vector3();
  private start = 0;
  private duration = 1;
  private active = false;

  constructor(private camera: THREE.PerspectiveCamera, private controls: OrbitControls) {}

  flyTo(position: Vec3Tuple, distance = 180, duration = 1.35) {
    const target = new THREE.Vector3(position.x, position.y, position.z);
    const dir = this.camera.position.clone().sub(this.controls.target).normalize();
    if (!Number.isFinite(dir.length()) || dir.length() < 0.1) dir.set(0.4, 0.24, 1).normalize();
    const nextPos = target.clone().add(dir.multiplyScalar(distance));
    this.fromPos.copy(this.camera.position);
    this.toPos.copy(nextPos);
    this.fromTarget.copy(this.controls.target);
    this.toTarget.copy(target);
    this.start = performance.now();
    this.duration = duration * 1000;
    this.active = true;
    // OrbitControls 的阻尼会在飞行过程中继续改写相机位置，导致飞行结束后
    // 视角偶尔被“弹”向旧的轨道。飞行期间由控制器独占相机，结束时再交还控制权。
    this.controls.enabled = false;
  }

  get isActive() {
    return this.active;
  }

  update(now = performance.now()) {
    if (!this.active) return;
    const t = Math.min(1, (now - this.start) / this.duration);
    const k = 1 - Math.pow(1 - t, 3);
    this.camera.position.lerpVectors(this.fromPos, this.toPos, k);
    this.controls.target.lerpVectors(this.fromTarget, this.toTarget, k);
    if (t >= 1) {
      this.camera.position.copy(this.toPos);
      this.controls.target.copy(this.toTarget);
      this.active = false;
      this.controls.enabled = true;
      // 让 OrbitControls 用最终位置重建内部 spherical 状态，避免下一帧跳回旧位置。
      this.controls.update();
    }
  }
}
