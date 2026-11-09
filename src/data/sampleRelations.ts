import type { RelationEdge } from '../types/poetry';

export const sampleRelations: RelationEdge[] = [
  ['r1', 'quyuan', 'libai', 'influence', 3, '楚辞浪漫精神影响李白。'],
  ['r2', 'taoyuanming', 'wangwei', 'influence', 4, '田园山水传统。'],
  ['r3', 'libai', 'dufu', 'friend', 5, '李杜相逢，唐诗双峰。'],
  ['r4', 'dufu', 'baijuyi', 'influence', 4, '诗史精神与现实关怀。'],
  ['r5', 'libai', 'sushi', 'influence', 3, '豪放风神的跨代回响。'],
  ['r6', 'dufu', 'luyou', 'influence', 4, '忧国忧民的诗史线索。'],
  ['r7', 'sushi', 'xinqiji', 'style', 4, '豪放词脉。'],
  ['r8', 'liqinzhao', 'nalanxingde', 'style', 3, '婉约词心与清丽哀感。'],
  ['r9', 'gongzizhen', 'xuzhimo', 'influence', 2, '近代精神与现代抒情。'],
  ['r10', 'xuzhimo', 'haizi', 'influence', 2, '现代诗流。'],
  ['r11', 'beidao', 'gucheng', 'friend', 3, '朦胧诗同代星座。'],
].map(([id, sourcePoetId, targetPoetId, type, weight, description]) => ({
  id: id as string,
  sourcePoetId: sourcePoetId as string,
  targetPoetId: targetPoetId as string,
  type: type as RelationEdge['type'],
  weight: weight as number,
  description: description as string,
}));
