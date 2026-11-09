export class FpsMeter {
  private last = performance.now();
  private frames = 0;
  private fps = 0;
  tick(now = performance.now()): number | null {
    this.frames += 1;
    if (now - this.last >= 700) {
      this.fps = Math.round((this.frames * 1000) / (now - this.last));
      this.frames = 0;
      this.last = now;
      return this.fps;
    }
    return null;
  }
  value(): number {
    return this.fps;
  }
}
