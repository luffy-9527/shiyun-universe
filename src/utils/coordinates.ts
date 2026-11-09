import type { PoetNode, PoemNode, RealPoetRow, Vec3Tuple } from '../types/poetry';
import { configForDynasty, dynastyColor } from '../data/dynastyConfig';
import { seededRandom } from './hash';
import { famousAliases, famousGlow } from '../data/famousPoets';

export function deterministicPoetPosition(input: {
  id: string;
  dynasty: string;
  influence: number;
  poemCount: number;
}): Vec3Tuple {
  const cfg = configForDynasty(input.dynasty);
  const rand = seededRandom(`poet:${input.id}:${input.dynasty}`);
  const arms = 4;
  const arm = Math.floor(rand() * arms);
  const radialJitter = (rand() - 0.5) * 72;
  const r = cfg.radius + radialJitter + Math.log2(input.poemCount + 1) * 7.4;
  // 与背景银河保持同一套 4 臂旋转：诗人不再像同心圆散点，而是嵌入真实星臂。
  const theta = cfg.armOffset + arm * ((Math.PI * 2) / arms) + r * 0.0145 + (rand() - 0.5) * 0.46;
  const innerLift = Math.max(0, 1 - r / 720);
  const y = (cfg.timeRank - 4.3) * 19 + (rand() - 0.5) * (34 + 78 / Math.max(10, input.influence)) * (0.72 + innerLift * 0.45);
  return {
    x: Math.cos(theta) * r,
    y,
    z: Math.sin(theta) * r,
  };
}

export function deterministicPoemPosition(poet: PoetNode, poemId: string, poemIndex: number): Vec3Tuple {
  const rand = seededRandom(`poem:${poet.id}:${poemId}:${poemIndex}`);
  const countFactor = Math.min(160, Math.sqrt(poet.poemCount + 1) * 3.2);
  const ring = 16 + countFactor * (0.24 + rand() * 0.68);
  const theta = poemIndex * 2.399963 + rand() * 0.62;
  const tilt = (rand() - 0.5) * Math.PI * 0.35;
  const y = Math.sin(theta * 1.7 + tilt) * ring * (0.16 + rand() * 0.55);
  return {
    x: poet.position.x + Math.cos(theta) * ring,
    y: poet.position.y + y,
    z: poet.position.z + Math.sin(theta) * ring * (0.72 + rand() * 0.55),
  };
}

export function influenceFromPoemCount(name: string, poemCount: number): number {
  const famous: Record<string, number> = {
    李白: 100, 杜甫: 100, 苏轼: 96, 白居易: 92, 屈原: 95, 陶渊明: 88, 李清照: 90, 辛弃疾: 91,
    陆游: 90, 王维: 89, 李商隐: 88, 杜牧: 86, 曹操: 82, 纳兰性德: 84, 龚自珍: 82, 徐志摩: 79,
    海子: 78, 北岛: 78, 顾城: 76, 戴望舒: 76, 元稹: 82, 刘禹锡: 85, 黄庭坚: 84, 苏辙: 78,
  };
  if (famous[name]) return famous[name];
  return Math.min(86, 42 + Math.log2(poemCount + 1) * 7.2);
}

export function poetRowToNode(row: RealPoetRow): PoetNode {
  const influence = influenceFromPoemCount(row.name, row.poemCount);
  const position = deterministicPoetPosition({ id: row.id, dynasty: row.dynasty, influence, poemCount: row.poemCount });
  return {
    id: row.id,
    name: row.name,
    dynasty: row.dynasty,
    dynastyRaw: row.dynastyRaw,
    birthYear: null,
    deathYear: null,
    description: `${row.name}，${row.dynastyRaw || row.dynasty}诗人。真实语料索引记录作品 ${row.poemCount.toLocaleString()} 首；点击后按分片懒加载作品正文。`,
    influence,
    poemCount: row.poemCount,
    clusterSize: row.clusterSize,
    tags: [row.dynastyRaw || row.dynasty, row.poemCount > 100 ? '高产诗人' : '诗人', ...famousAliases(row.name)],
    position,
    color: famousGlow(row.name) || dynastyColor(row.dynasty),
    source: 'real-index',
  };
}

export function makePoemNode(poet: PoetNode, raw: { t: string; f: string; p: string[] }, index: number): PoemNode {
  const id = `${poet.id}:${index}`;
  const lines = raw.p?.length ? raw.p : ['此诗正文分片为空'];
  return {
    id,
    poetId: poet.id,
    title: raw.t || `未题 ${index + 1}`,
    dynasty: poet.dynasty,
    form: normalizeForm(raw.f),
    content: lines.join('\n'),
    lines,
    year: null,
    position: deterministicPoemPosition(poet, id, index),
    catalogIndex: `${poet.id}.${String(index).padStart(6, '0')}`,
    source: 'real-shard',
  };
}

export function normalizeForm(form: string): string {
  const map: Record<string, string> = {
    wujue: '五绝',
    qijue: '七绝',
    wulu: '五律',
    qilu: '七律',
    ci: '词',
    other: '古体',
    modern: '现代诗',
  };
  return map[form] || form || '古体';
}
