import type { PoetNode } from '../types/poetry';
import { deterministicPoetPosition } from '../utils/coordinates';
import { dynastyColor } from './dynastyConfig';

const rows = [
  ['quyuan', '屈原', '先秦', -340, -278, 95, 25, '楚辞之祖，以香草美人寄托家国忧思。'],
  ['caocao', '曹操', '汉魏', 155, 220, 82, 31, '建安文学代表，诗风慷慨苍凉。'],
  ['taoyuanming', '陶渊明', '晋', 365, 427, 88, 130, '田园诗宗，平淡中见深远。'],
  ['wangwei', '王维', '唐', 701, 761, 89, 410, '诗佛，山水田园与禅意合一。'],
  ['libai', '李白', '唐', 701, 762, 100, 1010, '诗仙，想象瑰丽，豪放飘逸。'],
  ['dufu', '杜甫', '唐', 712, 770, 100, 1458, '诗圣，沉郁顿挫，诗史精神。'],
  ['baijuyi', '白居易', '唐', 772, 846, 92, 2800, '新乐府运动倡导者，诗风平易通达。'],
  ['lishangyin', '李商隐', '唐', 813, 858, 88, 600, '晚唐诗人，意象幽微，情思绵邈。'],
  ['dumu', '杜牧', '唐', 803, 852, 86, 520, '小杜，俊爽清丽，怀古咏史见长。'],
  ['sushi', '苏轼', '宋', 1037, 1101, 96, 3459, '东坡居士，诗词文书画皆成高峰。'],
  ['xinqiji', '辛弃疾', '宋', 1140, 1207, 91, 629, '词中之龙，豪放悲壮，家国入词。'],
  ['liqinzhao', '李清照', '宋', 1084, 1155, 90, 90, '易安居士，婉约词宗。'],
  ['luyou', '陆游', '宋', 1125, 1210, 90, 9300, '南宋爱国诗人，存诗极富。'],
  ['nalanxingde', '纳兰性德', '清', 1655, 1685, 84, 350, '清代词人，词风清丽哀感。'],
  ['gongzizhen', '龚自珍', '清', 1792, 1841, 82, 500, '近代思想启蒙诗人。'],
  ['xuzhimo', '徐志摩', '近现代', 1897, 1931, 79, 180, '新月派诗人，现代新诗代表。'],
  ['haizi', '海子', '当代', 1964, 1989, 78, 323, '当代诗人，以大地、麦子、远方建构精神图景。'],
  ['beidao', '北岛', '当代', 1949, null, 78, 170, '朦胧诗代表诗人。'],
  ['gucheng', '顾城', '当代', 1956, 1993, 76, 489, '朦胧诗代表诗人，童话式意象鲜明。'],
] as const;

export const samplePoets: PoetNode[] = rows.map(([id, name, dynasty, birthYear, deathYear, influence, poemCount, description]) => ({
  id,
  name,
  dynasty,
  birthYear,
  deathYear,
  description,
  influence,
  poemCount,
  tags: [dynasty, influence >= 90 ? '主星' : '诗人'],
  position: deterministicPoetPosition({ id, dynasty, influence, poemCount }),
  color: dynastyColor(dynasty),
  source: 'sample',
}));
