import type { QualityMode } from '../types/poetry';

/**
 * 内部自适应渲染预算。
 * 不改变用户选择的“高画质 / 流畅”模式，只在持续低帧率时逐级降低 DPR、Bloom 分辨率和背景粒子绘制量。
 */
export class AdaptiveRenderBudget {
  private mode: QualityMode;
  private levelValue = 0;
  private lowSamples = 0;
  private highSamples = 0;
  private warmupSamples = 0;

  constructor(mode: QualityMode) {
    this.mode = mode;
    this.levelValue = mode === 'smooth' ? 1 : 0;
  }

  get level() {
    return this.levelValue;
  }

  get targetFps() {
    if (this.levelValue >= 2) return 40;
    if (this.levelValue === 1) return 50;
    return 60;
  }

  get pixelScale() {
    return [1, 0.84, 0.68][this.levelValue] ?? 0.68;
  }

  get bloomAllowed() {
    return this.mode === 'high' && this.levelValue < 2;
  }

  reset(mode: QualityMode) {
    this.mode = mode;
    this.levelValue = mode === 'smooth' ? 1 : 0;
    this.lowSamples = 0;
    this.highSamples = 0;
    this.warmupSamples = 0;
    return this.levelValue;
  }

  /** 返回新的等级；没有变化则返回 null。 */
  sample(fps: number): number | null {
    this.warmupSamples += 1;
    if (this.warmupSamples < 4) return null;

    const floor = this.levelValue === 0 ? 43 : 35;
    const recovery = this.levelValue === 2 ? 37 : this.levelValue === 1 ? 47 : 56;

    if (fps < floor) {
      this.lowSamples += 1;
      this.highSamples = 0;
    } else if (fps > recovery) {
      this.highSamples += 1;
      this.lowSamples = 0;
    } else {
      this.lowSamples = Math.max(0, this.lowSamples - 1);
      this.highSamples = Math.max(0, this.highSamples - 1);
    }

    if (this.lowSamples >= 3 && this.levelValue < 2) {
      this.levelValue += 1;
      this.lowSamples = 0;
      this.highSamples = 0;
      return this.levelValue;
    }

    const minimumLevel = this.mode === 'smooth' ? 1 : 0;
    if (this.highSamples >= 8 && this.levelValue > minimumLevel) {
      this.levelValue -= 1;
      this.lowSamples = 0;
      this.highSamples = 0;
      return this.levelValue;
    }

    return null;
  }
}
