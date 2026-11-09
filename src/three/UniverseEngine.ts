import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { createGalaxyBackground, type GalaxyBackground } from './createGalaxyBackground';
import { createPoetStars, type PoetStarsLayer } from './createPoetStars';
import { createPoemStars, type PoemStarsLayer } from './createPoemStars';
import { createRelationLines, type RelationLinesLayer } from './createRelationLines';
import { createPoemConstellation, type PoemConstellationLayer } from './createPoemConstellation';
import { CameraController } from './cameraController';
import { UniverseRaycaster } from './raycaster';
import { AdaptiveRenderBudget } from './renderBudget';
import type { PoemNode, PoetNode, QualityMode, RelationEdge } from '../types/poetry';
import { FpsMeter } from '../utils/performance';
import { disposeGeneratedTextures } from './textures';

interface EngineOptions {
  container: HTMLElement;
  poets: PoetNode[];
  poems: PoemNode[];
  relations: RelationEdge[];
  quality: QualityMode;
  showRelations: boolean;
  showPoems: boolean;
  onHover: (payload: { type: 'poet' | 'poem'; id: string; name: string; screenX: number; screenY: number } | null) => void;
  onSelectPoet: (id: string) => void;
  onSelectPoem: (id: string) => void;
  onFps: (fps: number) => void;
  onParticleCount?: (count: number) => void;
}

export class UniverseEngine {
  private scene = new THREE.Scene();
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private composer: EffectComposer | null = null;
  private bloomPass: UnrealBloomPass | null = null;
  private controls: OrbitControls;
  private cameraController: CameraController;
  private raycaster: UniverseRaycaster;
  private galaxy: GalaxyBackground;
  private poetLayer: PoetStarsLayer;
  private poemLayer: PoemStarsLayer | null = null;
  private relationLayer: RelationLinesLayer | null = null;
  private constellationLayer: PoemConstellationLayer | null = null;
  private relationResetTimer: number | null = null;
  private resizeTimer: number | null = null;
  private raf = 0;
  private clock = new THREE.Clock();
  private fpsMeter = new FpsMeter();
  private budget: AdaptiveRenderBudget;
  private keys = new Set<string>();
  private poets: PoetNode[];
  private poems: PoemNode[];
  private relations: RelationEdge[];
  private poetById = new Map<string, PoetNode>();
  private poemById = new Map<string, PoemNode>();
  private opts: EngineOptions;
  private selectedPoetId: string | null = null;
  private selectedPoemId: string | null = null;
  private labelSprite: THREE.Sprite | null = null;
  private labelTexture: THREE.CanvasTexture | null = null;
  private showRelations = true;
  private showPoems = true;
  private quality: QualityMode;
  private pointerDirty = false;
  private pointerClientX = 0;
  private pointerClientY = 0;
  private pointerDownX = 0;
  private pointerDownY = 0;
  private pointerDragged = false;
  private lastHoverRaycastAt = 0;
  private lastRelationUpdateAt = 0;
  private lastRenderedAt = 0;
  private pageVisible = !document.hidden;
  private readonly forward = new THREE.Vector3();
  private readonly right = new THREE.Vector3();
  private readonly moveDelta = new THREE.Vector3();

  constructor(options: EngineOptions) {
    this.opts = options;
    this.poets = options.poets;
    this.poems = options.poems;
    this.relations = options.relations;
    this.rebuildLookupMaps();
    this.showRelations = options.showRelations;
    this.showPoems = options.showPoems;
    this.quality = options.quality;
    this.budget = new AdaptiveRenderBudget(this.quality);

    const rect = options.container.getBoundingClientRect();
    this.camera = new THREE.PerspectiveCamera(58, rect.width / Math.max(1, rect.height), 0.1, 5000);
    this.camera.position.set(0, 210, 820);

    // Points/Shader 已自行抗锯齿；关闭 WebGL MSAA 能显著降低高分屏填充成本。
    this.renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: false,
      powerPreference: 'high-performance',
      precision: 'highp',
      stencil: false,
      depth: true,
    });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = options.quality === 'high' ? 0.80 : 0.76;
    this.renderer.domElement.style.imageRendering = 'auto';
    this.renderer.setClearColor('#02040d');
    options.container.appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.06;
    this.controls.rotateSpeed = 0.36;
    this.controls.zoomSpeed = 0.62;
    this.controls.minDistance = 78;
    this.controls.maxDistance = 1900;
    this.controls.target.set(0, 0, 0);

    this.cameraController = new CameraController(this.camera, this.controls);
    this.raycaster = new UniverseRaycaster(this.camera);

    this.scene.fog = new THREE.FogExp2('#030713', this.quality === 'high' ? 0.00086 : 0.00104);
    this.scene.add(new THREE.AmbientLight('#98b7ff', 0.38));

    this.galaxy = createGalaxyBackground(this.quality);
    this.galaxy.setPerformanceLevel(this.budget.level);
    this.scene.add(this.galaxy.group);
    this.poetLayer = createPoetStars(this.poets);
    this.scene.add(this.poetLayer.points);
    this.rebuildPoems();
    this.rebuildRelations();
    this.applyRenderDimensions(true);
    this.reportParticleCount();

    this.bind();
    this.startLoop();
  }

  private rebuildLookupMaps() {
    this.poetById = new Map(this.poets.map((poet) => [poet.id, poet]));
    this.poemById = new Map(this.poems.map((poem) => [poem.id, poem]));
  }

  private basePixelRatio() {
    const dpr = window.devicePixelRatio || 1;
    const rect = this.opts.container.getBoundingClientRect();
    const pixels = rect.width * rect.height;
    if (this.quality === 'smooth') return Math.min(dpr, pixels > 2_200_000 ? 0.92 : 1.0);
    const cap = pixels > 3_000_000 ? 1.05 : pixels > 2_000_000 ? 1.18 : 1.36;
    return Math.min(dpr, cap);
  }

  private composerResolutionScale() {
    const rect = this.opts.container.getBoundingClientRect();
    const pixels = rect.width * rect.height;
    const base = pixels > 3_000_000 ? 0.56 : pixels > 2_000_000 ? 0.66 : 0.80;
    return this.budget.level === 1 ? base * 0.84 : base;
  }

  private applyRenderDimensions(rebuildComposer: boolean) {
    const rect = this.opts.container.getBoundingClientRect();
    const ratio = Math.max(0.62, this.basePixelRatio() * this.budget.pixelScale);
    this.renderer.setPixelRatio(ratio);
    this.renderer.setSize(Math.max(1, rect.width), Math.max(1, rect.height), false);
    if (rebuildComposer) this.rebuildComposer();
    else if (this.composer) {
      const scale = this.composerResolutionScale();
      this.composer.setSize(Math.max(1, Math.floor(rect.width * scale)), Math.max(1, Math.floor(rect.height * scale)));
    }
  }

  private rebuildComposer() {
    const rect = this.opts.container.getBoundingClientRect();
    this.composer?.dispose();
    this.composer = null;
    this.bloomPass = null;
    if (!this.budget.bloomAllowed) return;

    const scale = this.composerResolutionScale();
    const width = Math.max(1, Math.floor(rect.width * scale));
    const height = Math.max(1, Math.floor(rect.height * scale));
    const composer = new EffectComposer(this.renderer);
    composer.setPixelRatio(1);
    composer.setSize(width, height);
    composer.addPass(new RenderPass(this.scene, this.camera));
    const bloom = new UnrealBloomPass(new THREE.Vector2(width, height), this.budget.level === 0 ? 0.20 : 0.13, 0.38, 0.26);
    bloom.enabled = true;
    composer.addPass(bloom);
    composer.addPass(new OutputPass());
    this.composer = composer;
    this.bloomPass = bloom;
  }

  private applyPerformanceLevel(level: number) {
    this.galaxy.setPerformanceLevel(level);
    this.poemLayer?.setPerformanceLevel(level);
    this.relationLayer?.setPerformanceLevel(level);
    this.applyRenderDimensions(true);
    this.reportParticleCount();
  }

  private reportParticleCount() {
    const poemCount = this.poemLayer?.visibleCount || 0;
    this.opts.onParticleCount?.(this.galaxy.visibleParticleCount + this.poets.length + poemCount);
  }

  private bind() {
    window.addEventListener('resize', this.onResize, { passive: true });
    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('keyup', this.onKeyUp);
    document.addEventListener('visibilitychange', this.onVisibilityChange);
    this.renderer.domElement.addEventListener('pointerdown', this.onPointerDown, { passive: true });
    this.renderer.domElement.addEventListener('pointermove', this.onPointerMove, { passive: true });
    this.renderer.domElement.addEventListener('pointerup', this.onPointerUp, { passive: true });
    this.renderer.domElement.addEventListener('pointerleave', this.onPointerLeave, { passive: true });
    this.renderer.domElement.addEventListener('click', this.onClick);
  }

  private unbind() {
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('keyup', this.onKeyUp);
    document.removeEventListener('visibilitychange', this.onVisibilityChange);
    this.renderer.domElement.removeEventListener('pointerdown', this.onPointerDown);
    this.renderer.domElement.removeEventListener('pointermove', this.onPointerMove);
    this.renderer.domElement.removeEventListener('pointerup', this.onPointerUp);
    this.renderer.domElement.removeEventListener('pointerleave', this.onPointerLeave);
    this.renderer.domElement.removeEventListener('click', this.onClick);
  }

  private onKeyDown = (event: KeyboardEvent) => this.keys.add(event.key.toLowerCase());
  private onKeyUp = (event: KeyboardEvent) => this.keys.delete(event.key.toLowerCase());

  private onPointerDown = (event: PointerEvent) => {
    this.pointerDownX = event.clientX;
    this.pointerDownY = event.clientY;
    this.pointerDragged = false;
  };

  private onPointerUp = () => {
    // pointerup 后 click 事件才会到达，故在 onClick 中消费这个标记。
  };

  private onVisibilityChange = () => {
    this.pageVisible = !document.hidden;
    if (!this.pageVisible) {
      cancelAnimationFrame(this.raf);
      this.raf = 0;
      return;
    }
    this.lastRenderedAt = performance.now();
    this.startLoop();
  };

  private onResize = () => {
    if (this.resizeTimer != null) window.clearTimeout(this.resizeTimer);
    this.resizeTimer = window.setTimeout(() => {
      this.resizeTimer = null;
      const rect = this.opts.container.getBoundingClientRect();
      this.camera.aspect = rect.width / Math.max(1, rect.height);
      this.camera.updateProjectionMatrix();
      this.applyRenderDimensions(true);
    }, 120);
  };

  private onPointerMove = (event: PointerEvent) => {
    this.pointerClientX = event.clientX;
    this.pointerClientY = event.clientY;
    if (Math.hypot(event.clientX - this.pointerDownX, event.clientY - this.pointerDownY) > 8) {
      this.pointerDragged = true;
    }
    this.pointerDirty = true;
  };

  private onPointerLeave = () => {
    this.pointerDirty = false;
    this.opts.onHover(null);
  };

  private processHoverRaycast(now: number) {
    if (!this.pointerDirty || now - this.lastHoverRaycastAt < 48) return;
    this.pointerDirty = false;
    this.lastHoverRaycastAt = now;
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.raycaster.setPointer(this.pointerClientX, this.pointerClientY, rect);
    const pick = this.raycaster.pick(this.pickables());
    if (!pick) {
      this.opts.onHover(null);
      return;
    }
    if (pick.kind === 'poet') {
      const id = this.poetLayer.idByIndex[pick.index];
      const poet = this.poetById.get(id);
      if (poet) this.opts.onHover({ type: 'poet', id, name: poet.name, screenX: this.pointerClientX, screenY: this.pointerClientY });
      return;
    }
    if (this.poemLayer) {
      const id = this.poemLayer.idByIndex[pick.index];
      const poem = this.poemById.get(id);
      if (poem) this.opts.onHover({ type: 'poem', id, name: poem.title, screenX: this.pointerClientX, screenY: this.pointerClientY });
    }
  }

  private onClick = (event: MouseEvent) => {
    if (this.pointerDragged) {
      this.pointerDragged = false;
      return;
    }
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.raycaster.setPointer(event.clientX, event.clientY, rect);
    const pick = this.raycaster.pick(this.pickables());
    if (pick?.kind === 'poet') {
      const id = this.poetLayer.idByIndex[pick.index];
      this.opts.onSelectPoet(id);
      return;
    }
    if (pick?.kind === 'poem' && this.poemLayer) {
      const id = this.poemLayer.idByIndex[pick.index];
      this.opts.onSelectPoem(id);
      return;
    }
    // 空白区域只用于漫游，不创建任何非真实诗作。
  };

  private pickables(): THREE.Object3D[] {
    const out: THREE.Object3D[] = [this.poetLayer.points];
    if (this.showPoems && this.poemLayer) out.push(this.poemLayer.points);
    return out;
  }

  private startLoop() {
    if (!this.pageVisible || this.raf) return;
    this.raf = requestAnimationFrame(this.animate);
  }

  private animate = (now: number) => {
    this.raf = 0;
    if (!this.pageVisible) return;
    this.raf = requestAnimationFrame(this.animate);

    const frameInterval = 1000 / this.budget.targetFps;
    if (now - this.lastRenderedAt < frameInterval - 0.8) return;
    const deltaSeconds = Math.min(0.05, Math.max(0.001, (now - this.lastRenderedAt) / 1000));
    this.lastRenderedAt = now;

    const elapsed = this.clock.getElapsedTime();
    this.galaxy.group.rotation.y = elapsed * 0.0092;
    this.galaxy.update(elapsed);
    if (now - this.lastRelationUpdateAt > 33) {
      this.relationLayer?.update(elapsed);
      this.lastRelationUpdateAt = now;
    }
    this.poetLayer.material.uniforms.uTime.value = elapsed;
    if (this.poemLayer) {
      const mat = this.poemLayer.points.material as THREE.ShaderMaterial;
      mat.uniforms.uTime.value = elapsed;
    }

    this.processHoverRaycast(now);
    this.updateKeyboardMove(deltaSeconds);
    this.cameraController.update(now);
    if (!this.cameraController.isActive) this.controls.update();
    this.updateConstellation(elapsed);

    if (this.composer) this.composer.render();
    else this.renderer.render(this.scene, this.camera);

    const fps = this.fpsMeter.tick(now);
    if (fps != null) {
      this.opts.onFps(fps);
      const nextLevel = this.budget.sample(fps);
      if (nextLevel != null) this.applyPerformanceLevel(nextLevel);
    }
  };

  private updateKeyboardMove(deltaSeconds: number) {
    if (this.keys.size === 0) return;
    const speed = (this.keys.has('shift') ? 276 : 108) * deltaSeconds;
    this.camera.getWorldDirection(this.forward);
    this.forward.y = 0;
    this.forward.normalize();
    this.right.crossVectors(this.forward, this.camera.up).normalize().multiplyScalar(-1);
    this.moveDelta.set(0, 0, 0);
    if (this.keys.has('w') || this.keys.has('arrowup')) this.moveDelta.add(this.forward);
    if (this.keys.has('s') || this.keys.has('arrowdown')) this.moveDelta.sub(this.forward);
    if (this.keys.has('a') || this.keys.has('arrowleft')) this.moveDelta.sub(this.right);
    if (this.keys.has('d') || this.keys.has('arrowright')) this.moveDelta.add(this.right);
    if (this.keys.has('q')) this.moveDelta.y += 1;
    if (this.keys.has('e')) this.moveDelta.y -= 1;
    if (this.moveDelta.lengthSq() > 0) {
      this.moveDelta.normalize().multiplyScalar(speed);
      this.camera.position.add(this.moveDelta);
      this.controls.target.add(this.moveDelta);
    }
  }

  private relatedSet(selectedId: string | null) {
    const set = new Set<string>();
    if (!selectedId) return set;
    set.add(selectedId);
    for (const rel of this.relations) {
      if (rel.sourcePoetId === selectedId) set.add(rel.targetPoetId);
      if (rel.targetPoetId === selectedId) set.add(rel.sourcePoetId);
    }
    return set;
  }

  private rebuildPoems() {
    if (this.poemLayer) {
      this.scene.remove(this.poemLayer.points);
      this.poemLayer.dispose();
      this.poemLayer = null;
    }
    if (this.showPoems && this.poems.length) {
      const max = this.quality === 'smooth' ? 4500 : 16000;
      this.poemLayer = createPoemStars(this.poems.slice(-max));
      this.poemLayer.setPerformanceLevel(this.budget.level);
      this.scene.add(this.poemLayer.points);
    }
  }

  private rebuildRelations() {
    if (this.relationLayer) {
      this.scene.remove(this.relationLayer.group);
      this.relationLayer.dispose();
      this.relationLayer = null;
    }
    this.relationLayer = createRelationLines(this.poets, this.relations, this.quality);
    this.relationLayer.setPerformanceLevel(this.budget.level);
    this.scene.add(this.relationLayer.group);
    this.relationLayer.updateVisibility(this.selectedPoetId, this.showRelations);
  }

  updateData(poets: PoetNode[], poems: PoemNode[], relations: RelationEdge[]) {
    this.poets = poets;
    this.poems = poems;
    this.relations = relations;
    this.rebuildLookupMaps();
    this.scene.remove(this.poetLayer.points);
    this.poetLayer.dispose();
    this.poetLayer = createPoetStars(poets);
    this.scene.add(this.poetLayer.points);
    this.rebuildPoems();
    this.rebuildRelations();
    this.reportParticleCount();
    this.setSelectedPoet(this.selectedPoetId);
    this.setSelectedPoem(this.selectedPoemId);
  }

  updatePoems(poems: PoemNode[]) {
    this.poems = poems;
    this.poemById = new Map(poems.map((poem) => [poem.id, poem]));
    this.rebuildPoems();
    this.reportParticleCount();
    if (this.selectedPoemId) {
      const poem = this.poemById.get(this.selectedPoemId);
      if (poem) this.showPoemConstellation(poem.poetId, [poem], 4.8);
    } else if (this.selectedPoetId) {
      this.showPoemConstellation(this.selectedPoetId);
    }
    this.updateSelectionLabel();
  }

  setSelectedPoet(id: string | null) {
    this.selectedPoetId = id;
    if (id) this.selectedPoemId = null;
    this.poetLayer.updateSelection(id, this.relatedSet(id));
    this.pulseRelations(id);
    if (id) this.showPoemConstellation(id);
    else this.clearConstellation();
    this.updateSelectionLabel();
  }

  setSelectedPoem(id: string | null) {
    this.selectedPoemId = id;
    if (id) {
      const poem = this.poemById.get(id);
      if (poem) {
        this.selectedPoetId = poem.poetId;
        this.poetLayer.updateSelection(poem.poetId, this.relatedSet(poem.poetId));
        this.pulseRelations(poem.poetId);
        this.showPoemConstellation(poem.poetId, [poem], 4.8);
      }
    } else if (this.selectedPoetId) {
      this.showPoemConstellation(this.selectedPoetId);
    }
    this.updateSelectionLabel();
  }

  private pulseRelations(id: string | null) {
    if (this.relationResetTimer != null) {
      window.clearTimeout(this.relationResetTimer);
      this.relationResetTimer = null;
    }
    if (id && this.showRelations) {
      this.relationLayer?.updateVisibility(id, true);
      this.relationResetTimer = window.setTimeout(() => {
        this.relationLayer?.updateVisibility(null, this.showRelations);
        this.relationResetTimer = null;
      }, 5200);
    } else {
      this.relationLayer?.updateVisibility(null, this.showRelations);
    }
  }

  private clearConstellation() {
    if (!this.constellationLayer) return;
    this.scene.remove(this.constellationLayer.group);
    this.constellationLayer.dispose();
    this.constellationLayer = null;
  }

  private showPoemConstellation(poetId: string, overridePoems?: PoemNode[], duration = 5.4) {
    const poet = this.poetById.get(poetId);
    if (!poet) return;
    const poetPoems = overridePoems || this.poems.filter((poem) => poem.poetId === poetId);
    this.clearConstellation();
    const layer = createPoemConstellation(poet, poetPoems, this.quality, duration);
    if (!layer) return;
    this.constellationLayer = layer;
    this.scene.add(layer.group);
  }

  private updateConstellation(elapsed: number) {
    if (!this.constellationLayer) return;
    const alive = this.constellationLayer.update(elapsed);
    if (!alive) this.clearConstellation();
  }

  private makeLabelSprite(text: string, color = '#ffd98a') {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;
    const dpr = Math.min(1.5, window.devicePixelRatio || 1);
    canvas.width = 300 * dpr;
    canvas.height = 74 * dpr;
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, 300, 74);

    const displayText = text.length > 9 ? `${text.slice(0, 9)}…` : text;
    const w = Math.min(260, 56 + displayText.length * 30);
    const x = (300 - w) / 2;
    ctx.beginPath();
    ctx.roundRect(x, 16, w, 42, 21);
    ctx.fillStyle = 'rgba(5, 9, 20, 0.64)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(255, 219, 139, 0.46)';
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.font = '700 24px "Noto Serif SC", "Songti SC", serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = color;
    ctx.shadowBlur = 6;
    ctx.fillStyle = '#ffe9ad';
    ctx.fillText(displayText, 150, 37);

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.generateMipmaps = false;
    const material = new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
      opacity: 0.92,
      depthWrite: false,
      depthTest: false,
      toneMapped: false,
    });
    const sprite = new THREE.Sprite(material);
    sprite.scale.set(44, 11, 1);
    sprite.renderOrder = 999;
    this.labelTexture = texture;
    return sprite;
  }

  private clearLabel() {
    if (this.labelSprite) {
      this.scene.remove(this.labelSprite);
      (this.labelSprite.material as THREE.Material).dispose();
      this.labelSprite = null;
    }
    this.labelTexture?.dispose();
    this.labelTexture = null;
  }

  private updateSelectionLabel() {
    this.clearLabel();
    const poem = this.selectedPoemId ? this.poemById.get(this.selectedPoemId) : null;
    if (poem) {
      this.labelSprite = this.makeLabelSprite(poem.title, '#9fd6ff');
      this.labelSprite.position.set(poem.position.x, poem.position.y + 16, poem.position.z);
      this.scene.add(this.labelSprite);
      return;
    }
    const poet = this.selectedPoetId ? this.poetById.get(this.selectedPoetId) : null;
    if (poet) {
      this.labelSprite = this.makeLabelSprite(poet.name, poet.color);
      this.labelSprite.position.set(poet.position.x, poet.position.y + 22, poet.position.z);
      this.scene.add(this.labelSprite);
    }
  }

  setVisibility(showRelations: boolean, showPoems: boolean) {
    this.showRelations = showRelations;
    this.showPoems = showPoems;
    if (showPoems && !this.poemLayer && this.poems.length) this.rebuildPoems();
    if (this.poemLayer) this.poemLayer.points.visible = showPoems;
    this.pulseRelations(showRelations ? this.selectedPoetId : null);
    this.reportParticleCount();
  }

  flyTo(position: { x: number; y: number; z: number }, distance?: number) {
    this.cameraController.flyTo(position, distance);
  }

  setQuality(quality: QualityMode) {
    if (quality === this.quality) return;
    this.quality = quality;
    const level = this.budget.reset(quality);
    this.renderer.toneMappingExposure = quality === 'high' ? 0.80 : 0.76;
    this.scene.fog = new THREE.FogExp2('#030713', quality === 'high' ? 0.00086 : 0.00104);

    this.scene.remove(this.galaxy.group);
    this.galaxy.dispose();
    this.galaxy = createGalaxyBackground(quality);
    this.galaxy.setPerformanceLevel(level);
    this.scene.add(this.galaxy.group);
    this.rebuildPoems();
    this.rebuildRelations();
    this.applyRenderDimensions(true);
    this.reportParticleCount();
  }

  dispose() {
    cancelAnimationFrame(this.raf);
    this.raf = 0;
    this.unbind();
    if (this.resizeTimer != null) window.clearTimeout(this.resizeTimer);
    this.controls.dispose();
    this.galaxy.dispose();
    this.poetLayer.dispose();
    this.poemLayer?.dispose();
    this.relationLayer?.dispose();
    this.clearConstellation();
    if (this.relationResetTimer != null) window.clearTimeout(this.relationResetTimer);
    this.clearLabel();
    this.composer?.dispose();
    this.composer = null;
    this.bloomPass = null;
    disposeGeneratedTextures();
    this.scene.traverse((obj) => {
      const mesh = obj as THREE.Mesh;
      mesh.geometry?.dispose?.();
      const mat = mesh.material as THREE.Material | THREE.Material[] | undefined;
      if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
      else mat?.dispose?.();
    });
    this.renderer.dispose();
    this.renderer.domElement.remove();
  }
}
