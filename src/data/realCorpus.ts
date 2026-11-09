import type {
  CorpusManifest,
  PoemNode,
  RealGiftsAsset,
  RealLineRef,
  RealPoemRecord,
  RealPoetRow,
  RelationEdge,
  SearchResult,
} from '../types/poetry';
import { makePoemNode, poetRowToNode } from '../utils/coordinates';
import { famousAliases, famousWeight } from './famousPoets';
import type { PoetNode } from '../types/poetry';

const RAW_ENV_BASE = import.meta.env.VITE_SHIYUN_DATA_BASE as string | undefined;

function normalizeDataBase(raw?: string): string | undefined {
  const cleaned = raw?.trim().replace(/\/+$/, '');
  if (!cleaned) return undefined;
  // 浏览器不能直接跨域读取 https://shiyun.cohenjikan.com/data，会被 CORS 拦截。
  // 本地开发时把这个线上地址自动映射到 Vite 同源代理，避免 Network 面板出现 CORS 报错。
  if (import.meta.env.DEV && /^https:\/\/shiyun\.cohenjikan\.com\/data/i.test(cleaned)) {
    return '/__shiyun_data';
  }
  return cleaned;
}

const ENV_BASE = normalizeDataBase(RAW_ENV_BASE);
const DEFAULT_BASE = ENV_BASE || '/data';
const DEV_PROXY_HINT = '/__shiyun_data';

let manifestCache: CorpusManifest | null = null;
let poetsCache: RealPoetRow[] | null = null;
let poetNodesCache: PoetNode[] | null = null;
let giftsCache: RealGiftsAsset | null = null;
const poemCache = new Map<string, PoemNode[]>();
const bucketCache = new Map<string, Record<string, RealPoemRecord[]>>();
const idxCache = new Map<string, Record<string, [number, number]> | null>();
const lineCache = new Map<string, Record<string, RealLineRef[]>>();
let rangeUnsupported = false;
let activeBase = DEFAULT_BASE;

async function fetchJson<T>(path: string, base = activeBase): Promise<T> {
  const url = `${base}${path.startsWith('/') ? path : `/${path}`}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url} HTTP ${res.status}`);
  return (await res.json()) as T;
}

export function getDataBase(): string {
  return activeBase;
}

export async function probeRealData(base = DEFAULT_BASE): Promise<boolean> {
  try {
    await fetchJson<CorpusManifest>('/manifest.json', base);
    activeBase = base;
    return true;
  } catch {
    if (!ENV_BASE && import.meta.env.DEV && base !== DEV_PROXY_HINT) {
      // 本地开发允许通过 Vite 代理预览线上数据。生产环境不依赖这个代理；
      // 正式部署请把完整数据放到 public/data 或自己的同源 CDN。
      try {
        await fetchJson<CorpusManifest>('/manifest.json', DEV_PROXY_HINT);
        activeBase = DEV_PROXY_HINT;
        return true;
      } catch {
        return false;
      }
    }
    return false;
  }
}

export async function loadManifest(): Promise<CorpusManifest> {
  if (!manifestCache) manifestCache = await fetchJson<CorpusManifest>('/manifest.json');
  return manifestCache;
}

export async function loadRealPoetRows(): Promise<RealPoetRow[]> {
  if (!poetsCache) poetsCache = await fetchJson<RealPoetRow[]>('/poets.index.json');
  return poetsCache;
}

export async function loadRealPoetNodes(limitForSmooth?: number): Promise<PoetNode[]> {
  if (!poetNodesCache) {
    const rows = await loadRealPoetRows();
    poetNodesCache = rows.map(poetRowToNode);
  }
  if (limitForSmooth && poetNodesCache.length > limitForSmooth) {
    return poetNodesCache.slice(0, limitForSmooth);
  }
  return poetNodesCache;
}

export async function loadGiftsAsRelations(): Promise<RelationEdge[]> {
  if (!giftsCache) giftsCache = await fetchJson<RealGiftsAsset>('/gifts.json');
  return giftsCache.edges.map(([sourcePoetId, targetPoetId, weight], idx) => ({
    id: `gift:${idx}:${sourcePoetId}:${targetPoetId}`,
    sourcePoetId,
    targetPoetId,
    type: 'gift',
    weight,
    description: `真实赠答/题赠关系，权重 ${weight}`,
  }));
}

async function readTextWithProgress(res: Response, onProgress?: (received: number, total: number) => void): Promise<string> {
  const total = Number(res.headers.get('Content-Length')) || 0;
  const reader = res.body?.getReader?.();
  if (!reader) {
    const text = await res.text();
    onProgress?.(text.length, total || text.length);
    return text;
  }
  const chunks: Uint8Array[] = [];
  let received = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    if (value) {
      chunks.push(value);
      received += value.byteLength;
      onProgress?.(received, total);
    }
  }
  const buf = new Uint8Array(received);
  let offset = 0;
  for (const chunk of chunks) {
    buf.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return new TextDecoder().decode(buf);
}

async function loadWholeBucket(bucket: string): Promise<Record<string, RealPoemRecord[]>> {
  const cached = bucketCache.get(bucket);
  if (cached) return cached;
  const obj = await fetchJson<Record<string, RealPoemRecord[]>>(`/poems/${bucket}.json`);
  bucketCache.set(bucket, obj);
  return obj;
}

export async function loadPoemsForPoet(poet: PoetNode, onProgress?: (received: number, total: number) => void): Promise<PoemNode[]> {
  const cached = poemCache.get(poet.id);
  if (cached) return cached;

  const manifest = await loadManifest();
  const bucket = poet.id.slice(0, 2);
  let raw: RealPoemRecord[] | null = null;

  if (manifest.poemSidecar && !rangeUnsupported) {
    let idx = idxCache.get(bucket);
    if (idx === undefined) {
      try {
        const res = await fetch(`${activeBase}/poems/${bucket}.idx.json`);
        idx = res.ok ? ((await res.json()) as Record<string, [number, number]>) : null;
      } catch {
        idx = null;
      }
      idxCache.set(bucket, idx);
    }
    const ent = idx?.[poet.id];
    if (ent) {
      const [off, len] = ent;
      try {
        const res = await fetch(`${activeBase}/poems/${bucket}.json`, {
          headers: { Range: `bytes=${off}-${off + len - 1}` },
        });
        if (res.status === 206) {
          raw = JSON.parse(await readTextWithProgress(res, onProgress)) as RealPoemRecord[];
        } else if (res.ok) {
          rangeUnsupported = true;
          const whole = JSON.parse(await res.text()) as Record<string, RealPoemRecord[]>;
          bucketCache.set(bucket, whole);
          raw = whole[poet.id] || [];
        }
      } catch {
        raw = null;
      }
    }
  }

  if (!raw) {
    const bucketObj = await loadWholeBucket(bucket);
    raw = bucketObj[poet.id] || [];
  }
  const nodes = raw.map((record, idx) => makePoemNode(poet, record, idx));
  poemCache.set(poet.id, nodes);
  return nodes;
}

export function searchRealPoets(keyword: string, limit = 30): SearchResult[] {
  const q = keyword.trim();
  if (!q || !poetsCache) return [];
  return poetsCache
    .filter((p) => p.name.includes(q) || p.dynastyRaw?.includes(q) || p.dynasty.includes(q) || famousAliases(p.name).some((a) => a.includes(q) || q.includes(a)))
    .sort((a, b) => (famousWeight(b.name) - famousWeight(a.name)) || (b.poemCount - a.poemCount))
    .slice(0, limit)
    .map((p) => ({
      id: p.id,
      type: 'poet',
      title: p.name,
      subtitle: `${p.dynastyRaw || p.dynasty} · ${p.poemCount.toLocaleString()} 首`,
    }));
}

function hashStr(input: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

function lineBucket(line: string): string {
  return (hashStr(line) & 0xff).toString(16).padStart(2, '0');
}

async function loadLineShard(bucket: string): Promise<Record<string, RealLineRef[]>> {
  const cached = lineCache.get(bucket);
  if (cached) return cached;
  try {
    const obj = await fetchJson<Record<string, RealLineRef[]>>(`/lines/${bucket}.json`);
    lineCache.set(bucket, obj);
    return obj;
  } catch {
    lineCache.set(bucket, {});
    return {};
  }
}

export async function searchRealLines(keyword: string, limit = 20): Promise<SearchResult[]> {
  const han = [...keyword].filter((ch) => /\p{Script=Han}/u.test(ch)).join('');
  if (han.length < 2) return [];
  const candidates = new Set<string>([han]);
  for (const len of [7, 6, 5, 4]) if (han.length > len) candidates.add([...han].slice(0, len).join(''));
  const rows = await loadRealPoetRows();
  const byId = new Map(rows.map((r) => [r.id, r]));
  const seen = new Set<string>();
  const out: SearchResult[] = [];
  for (const cand of candidates) {
    const shard = await loadLineShard(lineBucket(cand));
    for (const ref of shard[cand] || []) {
      const key = `${ref.p}:${ref.i}`;
      if (seen.has(key)) continue;
      seen.add(key);
      const poet = byId.get(ref.p);
      out.push({
        id: key,
        type: 'line',
        title: ref.t,
        subtitle: `${poet?.name || '未知诗人'} · 命中「${cand}」`,
        poetId: ref.p,
        poemIndex: ref.i,
      });
      if (out.length >= limit) return out;
    }
  }
  return out;
}
