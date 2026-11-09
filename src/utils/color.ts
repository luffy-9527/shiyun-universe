export function hexToRgb01(hex: string): [number, number, number] {
  const h = hex.replace('#', '');
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  const n = Number.parseInt(full, 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

export function influenceToSize(influence: number, poemCount: number): number {
  return 3.5 + Math.pow(Math.max(1, poemCount), 0.16) + Math.max(0, influence - 55) * 0.035;
}

export function influenceToAlpha(influence: number): number {
  return Math.min(1, 0.38 + influence / 140);
}
