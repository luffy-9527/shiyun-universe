import type { DynastyFilter } from '../types/poetry';

export interface DynastyConfig {
  key: DynastyFilter;
  canonical: string[];
  label: string;
  color: string;
  glow: string;
  timeRank: number;
  radius: number;
  armOffset: number;
}

export const dynastyConfigs: DynastyConfig[] = [
  { key: '先秦', canonical: ['xianqin'], label: '先秦', color: '#38e6b7', glow: '#8fffe5', timeRank: 0, radius: 110, armOffset: 0.2 },
  { key: '汉魏', canonical: ['qinhan', 'hanwei'], label: '汉魏', color: '#ffb15f', glow: '#ffd89b', timeRank: 1, radius: 150, armOffset: 0.65 },
  { key: '晋', canonical: ['weijin', 'jin', 'nanbeichao', 'sui'], label: '魏晋南北朝', color: '#9de7ff', glow: '#c7f6ff', timeRank: 2, radius: 190, armOffset: 1.05 },
  { key: '唐', canonical: ['tang'], label: '唐', color: '#fff1a8', glow: '#fff8d0', timeRank: 3, radius: 245, armOffset: 1.55 },
  { key: '宋', canonical: ['song'], label: '宋', color: '#72c7ff', glow: '#b8e6ff', timeRank: 4, radius: 305, armOffset: 2.15 },
  { key: '元', canonical: ['yuan'], label: '元', color: '#a998ff', glow: '#d1c8ff', timeRank: 5, radius: 365, armOffset: 2.65 },
  { key: '明', canonical: ['ming'], label: '明', color: '#ff8c61', glow: '#ffc1a9', timeRank: 6, radius: 425, armOffset: 3.15 },
  { key: '清', canonical: ['qing'], label: '清', color: '#b7d9ff', glow: '#e5f1ff', timeRank: 7, radius: 485, armOffset: 3.75 },
  { key: '近现代', canonical: ['jinxiandai'], label: '近现代', color: '#c4a2ff', glow: '#eadcff', timeRank: 8, radius: 545, armOffset: 4.25 },
  { key: '当代', canonical: ['dangdai'], label: '当代', color: '#6df4ff', glow: '#b7fbff', timeRank: 9, radius: 610, armOffset: 4.75 },
];

export const dynastyOptions: DynastyFilter[] = ['全部', ...dynastyConfigs.map((d) => d.key)];

export function configForDynasty(dynasty: string): DynastyConfig {
  const normalized = normalizeDynastyKey(dynasty);
  return dynastyConfigs.find((d) => d.key === normalized || d.canonical.includes(dynasty)) ?? dynastyConfigs[3];
}

export function normalizeDynastyKey(raw: string): DynastyFilter {
  if (!raw) return '唐';
  const s = raw.toLowerCase();
  const found = dynastyConfigs.find((d) => d.key === raw || d.canonical.includes(s));
  if (found) return found.key;
  if (/先秦|诗经|楚辞/.test(raw)) return '先秦';
  if (/秦|汉|魏/.test(raw)) return '汉魏';
  if (/晋|南北|隋/.test(raw)) return '晋';
  if (/唐|五代/.test(raw)) return '唐';
  if (/宋|辽|金/.test(raw)) return '宋';
  if (/元/.test(raw)) return '元';
  if (/明/.test(raw)) return '明';
  if (/清/.test(raw)) return '清';
  if (/近|现代|民国/.test(raw)) return '近现代';
  if (/当代|现当代/.test(raw)) return '当代';
  return '唐';
}

export function dynastyColor(raw: string): string {
  return configForDynasty(raw).color;
}
