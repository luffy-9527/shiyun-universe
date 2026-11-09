export type DynastyFilter =
  | '全部'
  | '先秦'
  | '汉魏'
  | '晋'
  | '唐'
  | '宋'
  | '元'
  | '明'
  | '清'
  | '近现代'
  | '当代';

export type PoemFormFilter = '全部' | '古体' | '五绝' | '七绝' | '五律' | '七律' | '词' | '现代诗' | '其它';
export type QualityMode = 'high' | 'smooth';
export type ActivePanel = 'poet' | 'line' | 'explore' | 'dynasty';

export interface Vec3Tuple {
  x: number;
  y: number;
  z: number;
}

export interface PoetNode {
  id: string;
  name: string;
  dynasty: string;
  birthYear?: number | null;
  deathYear?: number | null;
  description: string;
  influence: number;
  poemCount: number;
  tags: string[];
  position: Vec3Tuple;
  color: string;
  clusterSize?: number;
  dynastyRaw?: string;
  source?: 'sample' | 'real-index';
}

export interface PoemNode {
  id: string;
  poetId: string;
  title: string;
  dynasty: string;
  form: string;
  content: string;
  lines: string[];
  year?: number | null;
  position: Vec3Tuple;
  catalogIndex: string;
  source?: 'sample' | 'real-shard';
}

export interface RelationEdge {
  id: string;
  sourcePoetId: string;
  targetPoetId: string;
  type: 'friend' | 'influence' | 'gift' | 'sameDynasty' | 'style' | 'school';
  weight: number;
  description: string;
}

export interface HoveredObject {
  id: string;
  type: 'poet' | 'poem';
  name: string;
  screenX: number;
  screenY: number;
}

export interface SearchResult {
  id: string;
  type: 'poet' | 'poem' | 'line';
  title: string;
  subtitle: string;
  poetId?: string;
  poemIndex?: number;
}

export interface CorpusManifest {
  version: number;
  n: number;
  poetCount: number;
  poemCount: number;
  buckets: string[];
  lineBuckets?: string[];
  giftEdges?: number;
  poemSidecar?: boolean;
  dynCounts?: Record<string, number>;
}

export interface RealPoetRow {
  id: string;
  name: string;
  dynasty: string;
  dynastyRaw?: string;
  poemCount: number;
  clusterSize: number;
}

export interface RealPoemRecord {
  t: string;
  f: string;
  p: string[];
}

export interface RealGiftsAsset {
  version: number;
  edgeCount: number;
  edges: [string, string, number][];
}

export interface RealLineRef {
  p: string;
  i: number;
  t: string;
  f: string;
}
