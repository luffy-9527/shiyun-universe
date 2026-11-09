/**
 * 诗云式地标诗人：只作为视觉权重与搜索排序锚点，不参与真实数据语义改写。
 * 后续接入全量人物年表时，可把这里替换为 public/data/famous-poets.json。
 */
export const FAMOUS_POETS: Record<string, { weight: number; glow?: string; aliases?: string[] }> = {
  屈原: { weight: 1.9, glow: '#61f0c8', aliases: ['灵均'] },
  曹操: { weight: 1.45, glow: '#ffb46d', aliases: ['魏武帝', '孟德'] },
  陶渊明: { weight: 1.62, glow: '#c9f5c6', aliases: ['陶潜', '靖节先生'] },
  王维: { weight: 1.58, glow: '#b8e8ff', aliases: ['摩诘'] },
  李白: { weight: 2.35, glow: '#fff0a8', aliases: ['太白', '青莲居士', '谪仙'] },
  杜甫: { weight: 2.35, glow: '#d8e9ff', aliases: ['少陵', '子美'] },
  白居易: { weight: 1.9, glow: '#ffe1a6', aliases: ['香山', '乐天'] },
  李商隐: { weight: 1.62, glow: '#d8bbff', aliases: ['义山'] },
  杜牧: { weight: 1.58, glow: '#ffd4a1', aliases: ['牧之'] },
  苏轼: { weight: 2.1, glow: '#ffd487', aliases: ['东坡', '子瞻'] },
  黄庭坚: { weight: 1.52, glow: '#a7e6ff', aliases: ['山谷', '鲁直'] },
  李清照: { weight: 1.86, glow: '#eadcff', aliases: ['易安'] },
  辛弃疾: { weight: 1.88, glow: '#b9dfff', aliases: ['稼轩'] },
  陆游: { weight: 1.72, glow: '#c8ddff', aliases: ['放翁'] },
  纳兰性德: { weight: 1.55, glow: '#d9e9ff', aliases: ['容若'] },
  龚自珍: { weight: 1.45, glow: '#d1f5ff', aliases: ['定庵'] },
  徐志摩: { weight: 1.35, glow: '#dbb8ff', aliases: [] },
  戴望舒: { weight: 1.28, glow: '#c8b7ff', aliases: [] },
  海子: { weight: 1.32, glow: '#ffe2a8', aliases: [] },
  北岛: { weight: 1.26, glow: '#b5e4ff', aliases: [] },
  顾城: { weight: 1.24, glow: '#d6c6ff', aliases: [] },
};

export function famousWeight(name: string): number {
  return FAMOUS_POETS[name]?.weight ?? 1;
}

export function famousGlow(name: string): string | undefined {
  return FAMOUS_POETS[name]?.glow;
}

export function famousAliases(name: string): string[] {
  return FAMOUS_POETS[name]?.aliases ?? [];
}
