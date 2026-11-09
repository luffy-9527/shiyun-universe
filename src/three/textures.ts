import * as THREE from 'three';

const textureCache = new Map<string, THREE.CanvasTexture>();

function makeCanvas(size: number) {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas 2D context unavailable');
  return { canvas, ctx };
}

/**
 * 程序化柔光点纹理：避免 PointsMaterial 默认方形点带来的像素感。
 * 这里不依赖任何外部图片，便于后续静态部署和离线使用。
 */
export function getSoftStarTexture(kind: 'dust' | 'star' | 'core' = 'star') {
  const key = `soft-star-${kind}`;
  const cached = textureCache.get(key);
  if (cached) return cached;

  const size = kind === 'dust' ? 96 : 160;
  const { canvas, ctx } = makeCanvas(size);
  const c = size / 2;
  const gradient = ctx.createRadialGradient(c, c, 0, c, c, c);

  if (kind === 'core') {
    gradient.addColorStop(0.0, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.16, 'rgba(255,244,190,.92)');
    gradient.addColorStop(0.38, 'rgba(255,210,120,.42)');
    gradient.addColorStop(0.72, 'rgba(255,180,80,.12)');
    gradient.addColorStop(1.0, 'rgba(255,170,60,0)');
  } else if (kind === 'dust') {
    gradient.addColorStop(0.0, 'rgba(255,255,255,.9)');
    gradient.addColorStop(0.24, 'rgba(230,245,255,.42)');
    gradient.addColorStop(0.58, 'rgba(160,200,255,.10)');
    gradient.addColorStop(1.0, 'rgba(160,200,255,0)');
  } else {
    gradient.addColorStop(0.0, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.18, 'rgba(255,245,210,.86)');
    gradient.addColorStop(0.48, 'rgba(120,190,255,.24)');
    gradient.addColorStop(0.78, 'rgba(110,160,255,.08)');
    gradient.addColorStop(1.0, 'rgba(110,160,255,0)');
  }

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;
  texture.needsUpdate = true;
  textureCache.set(key, texture);
  return texture;
}

export function createNebulaTexture(seed = 1, palette: string[] = ['#16234c', '#2f1a55', '#ffd77a'], size = 512) {
  const { canvas, ctx } = makeCanvas(size);
  ctx.clearRect(0, 0, size, size);

  // 稳定伪随机，让每次打开星云形状一致。
  let s = seed >>> 0;
  const rand = () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 0xffffffff;
  };

  for (let i = 0; i < 44; i++) {
    const x = size * (0.18 + rand() * 0.64);
    const y = size * (0.18 + rand() * 0.64);
    const r = size * (0.08 + rand() * 0.24);
    const color = palette[Math.floor(rand() * palette.length)] ?? '#7bdfff';
    const alpha = 0.035 + rand() * 0.08;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, `${color}${Math.round(alpha * 255).toString(16).padStart(2, '0')}`);
    g.addColorStop(0.45, `${color}${Math.round(alpha * 96).toString(16).padStart(2, '0')}`);
    g.addColorStop(1, `${color}00`);
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, size, size);
  }

  // 轻微中心透明，让星体仍是主体。
  const mask = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size * 0.54);
  mask.addColorStop(0, 'rgba(255,255,255,.045)');
  mask.addColorStop(0.6, 'rgba(255,255,255,.018)');
  mask.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.globalCompositeOperation = 'screen';
  ctx.fillStyle = mask;
  ctx.fillRect(0, 0, size, size);
  ctx.globalCompositeOperation = 'source-over';

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;
  return texture;
}

export function disposeGeneratedTextures() {
  for (const texture of textureCache.values()) texture.dispose();
  textureCache.clear();
}
