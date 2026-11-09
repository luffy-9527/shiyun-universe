import { defineStore } from 'pinia';
import type {
  ActivePanel,
  CorpusManifest,
  DynastyFilter,
  HoveredObject,
  PoemFormFilter,
  PoemNode,
  PoetNode,
  QualityMode,
  RelationEdge,
  SearchResult,
} from '../types/poetry';
import { corpusStats } from '../data/corpusStats';
import { famousAliases, famousWeight } from '../data/famousPoets';
import { dynastyOptions, normalizeDynastyKey } from '../data/dynastyConfig';
import {
  getDataBase,
  loadGiftsAsRelations,
  loadManifest,
  loadPoemsForPoet,
  loadRealPoetNodes,
  probeRealData,
  searchRealLines,
  searchRealPoets,
} from '../data/realCorpus';

function matchesDynasty(poet: PoetNode, dynasty: DynastyFilter) {
  const all = dynastyOptions[0];
  if (dynasty === all) return true;
  return normalizeDynastyKey(poet.dynasty) === dynasty
    || (!!poet.dynastyRaw && normalizeDynastyKey(poet.dynastyRaw) === dynasty);
}

function matchesSelectedDynasties(poet: PoetNode, selected: DynastyFilter[]) {
  return selected.length === 0 || selected.some((dynasty) => matchesDynasty(poet, dynasty));
}

export const useUniverseStore = defineStore('universe', {
  state: () => ({
    poets: [] as PoetNode[],
    poems: [] as PoemNode[],
    relations: [] as RelationEdge[],
    selectedPoetId: null as string | null,
    selectedPoemId: null as string | null,
    selectedDynasties: [] as DynastyFilter[],
    hoveredObject: null as HoveredObject | null,
    currentDynasty: '全部' as DynastyFilter,
    currentPoemForm: '全部' as PoemFormFilter,
    activePanel: 'poet' as ActivePanel,
    showRelations: true,
    showPoems: true,
    qualityMode: 'high' as QualityMode,
    uiHidden: false,
    searchKeyword: '',
    fps: 0,
    particleCount: 0,
    loading: true,
    loadingText: '正在展开三千年诗歌星图',
    dataMode: 'real-index' as 'real-index',
    dataBase: '/data',
    manifest: null as CorpusManifest | null,
    dataError: '',
    poemLoadingPoetId: null as string | null,
    poemLoadProgress: 0,
    poemLoadTotal: 0,
    poemLoadError: '',
    lastToast: '',
  }),
  getters: {
    selectedPoet(state): PoetNode | null {
      return state.poets.find((p) => p.id === state.selectedPoetId) || null;
    },
    selectedPoem(state): PoemNode | null {
      return state.poems.find((p) => p.id === state.selectedPoemId) || null;
    },
    selectedAuthor(state): PoetNode | null {
      const poem = state.poems.find((p) => p.id === state.selectedPoemId);
      return poem ? state.poets.find((p) => p.id === poem.poetId) || null : null;
    },
    visiblePoets(state): PoetNode[] {
      if (state.currentDynasty === '全部') return state.poets;
      return state.poets.filter((p) => p.dynasty === state.currentDynasty || p.dynastyRaw === state.currentDynasty);
    },
    visiblePoems(state): PoemNode[] {
      let poems = state.poems;
      if (state.currentDynasty !== '全部') poems = poems.filter((p) => p.dynasty === state.currentDynasty);
      if (state.currentPoemForm !== '全部') poems = poems.filter((p) => p.form === state.currentPoemForm);
      return poems;
    },
    filteredPoets(state): PoetNode[] {
      return state.poets.filter((poet) => matchesSelectedDynasties(poet, state.selectedDynasties));
    },
    filteredPoems(state): PoemNode[] {
      const poetById = new Map(state.poets.map((poet) => [poet.id, poet]));
      let poems = state.poems.filter((poem) => {
        const poet = poetById.get(poem.poetId);
        return poet ? matchesSelectedDynasties(poet, state.selectedDynasties) : true;
      });
      if (state.currentPoemForm !== '全部') poems = poems.filter((poem) => poem.form === state.currentPoemForm);
      return poems;
    },
    dynastyCounts(state): Record<string, number> {
      const counts: Record<string, number> = { [dynastyOptions[0]]: state.poets.length };
      for (const poet of state.poets) {
        const key = normalizeDynastyKey(poet.dynastyRaw || poet.dynasty);
        counts[key] = (counts[key] || 0) + 1;
      }
      return counts;
    },
    corpusSlogan(state): string {
      if (state.manifest) {
        return `${state.manifest.poetCount.toLocaleString()} 位诗人、${state.manifest.poemCount.toLocaleString()} 首诗，把中国全历史的诗歌放进了一片三维星系。`;
      }
      return corpusStats.slogan;
    },
    loadedPoemsOfSelected(state): PoemNode[] {
      if (!state.selectedPoetId) return [];
      return state.poems.filter((p) => p.poetId === state.selectedPoetId);
    },
    relatedPoetIds(state): string[] {
      if (!state.selectedPoetId) return [];
      const ids = new Set<string>();
      for (const rel of state.relations) {
        if (rel.sourcePoetId === state.selectedPoetId) ids.add(rel.targetPoetId);
        if (rel.targetPoetId === state.selectedPoetId) ids.add(rel.sourcePoetId);
      }
      return [...ids];
    },
  },
  actions: {
    async bootstrap() {
      this.loading = true;
      this.loadingText = '正在展开三千年诗歌星图';
      const wantFull = (import.meta.env.VITE_SHIYUN_DATA_MODE || 'full') !== 'sample';
      if (wantFull) {
        this.loadingText = '正在连接真实诗歌语料索引';
        const ok = await probeRealData();
        if (ok) {
          try {
            this.dataBase = getDataBase();
            this.manifest = await loadManifest();
            this.loadingText = `正在装载 ${this.manifest.poetCount.toLocaleString()} 位诗人星图`;
            const smoothLimit = this.qualityMode === 'smooth' ? 18000 : undefined;
            this.poets = await loadRealPoetNodes(smoothLimit);
            this.loadingText = '正在装载赠诗关系网络';
            this.relations = await loadGiftsAsRelations();
            this.poems = [];
            this.dataMode = 'real-index';
          } catch (err) {
            this.dataError = err instanceof Error ? err.message : String(err);
            this.dataMode = 'real-index';
          }
        } else {
          this.dataError = '未检测到 /public/data 完整真实数据，已回退到内置演示数据。运行 npm run download:data 可落地真实语料分片。';
        }
      }
      this.particleCount = this.poets.length + this.poems.length;
      this.restoreFromHash();
      setTimeout(() => (this.loading = false), 420);
    },
    setActivePanel(panel: ActivePanel) {
      this.activePanel = panel;
    },
    async selectPoet(id: string) {
      this.activePanel = 'poet';
      this.selectedPoetId = id;
      this.selectedPoemId = null;
      this.poemLoadError = '';
      const poet = this.poets.find((p) => p.id === id);
      if (poet && this.dataMode === 'real-index') {
        const alreadyLoaded = this.poems.some((poem) => poem.poetId === poet.id && poem.source === 'real-shard');
        if (!alreadyLoaded) {
          this.poemLoadingPoetId = poet.id;
          this.poemLoadProgress = 0;
          this.poemLoadTotal = poet.poemCount;
          this.loadingText = `正在加载 ${poet.name} 的真实作品`;
          try {
            const loaded = await loadPoemsForPoet(poet, (received, total) => {
              this.poemLoadProgress = total ? Math.min(99, Math.round((received / total) * 100)) : 0;
            });
            const others = this.poems.filter((poem) => poem.poetId !== poet.id || poem.source !== 'real-shard');
            this.poems = [...others, ...loaded];
            this.poemLoadProgress = 100;
            this.particleCount = this.poets.length + this.poems.length;
          } catch (err) {
            this.poemLoadError = `作品分片加载失败：${err instanceof Error ? err.message : String(err)}`;
            this.dataError = this.poemLoadError;
          } finally {
            this.poemLoadingPoetId = null;
          }
        }
      }
      this.updateHashForPoet(id);
    },
    selectPoem(id: string) {
      const poem = this.poems.find((p) => p.id === id);
      this.selectedPoemId = id;
      this.selectedPoetId = poem?.poetId || this.selectedPoetId;
      this.updateHashForPoem(id);
    },
    clearSelection() {
      this.selectedPoetId = null;
      this.selectedPoemId = null;
      history.replaceState(null, '', location.pathname + location.search);
    },
    setDynastyFilter(v: DynastyFilter) {
      const all = dynastyOptions[0];
      if (v === all) {
        this.selectedDynasties = [];
        this.currentDynasty = all;
      } else {
        const next = this.selectedDynasties.includes(v)
          ? this.selectedDynasties.filter((dynasty) => dynasty !== v)
          : [...this.selectedDynasties, v];
        this.selectedDynasties = next;
        this.currentDynasty = next[0] || all;
      }
      const selectedPoet = this.selectedPoetId ? this.poets.find((poet) => poet.id === this.selectedPoetId) : null;
      if (selectedPoet && !matchesSelectedDynasties(selectedPoet, this.selectedDynasties)) {
        this.selectedPoetId = null;
        this.selectedPoemId = null;
      }
    },
    setPoemFormFilter(v: PoemFormFilter) {
      this.currentPoemForm = v;
    },
    toggleRelations() {
      this.showRelations = !this.showRelations;
    },
    togglePoems() {
      this.showPoems = !this.showPoems;
    },
    toggleQualityMode() {
      this.qualityMode = this.qualityMode === 'high' ? 'smooth' : 'high';
    },
    toggleUI() {
      this.uiHidden = !this.uiHidden;
    },
    setHoveredObject(v: HoveredObject | null) {
      this.hoveredObject = v;
    },
    setFps(v: number) {
      this.fps = v;
    },
    setParticleCount(v: number) {
      this.particleCount = v;
    },
    toast(message: string) {
      this.lastToast = message;
      window.setTimeout(() => {
        if (this.lastToast === message) this.lastToast = '';
      }, 1800);
    },
    async searchNodes(keyword: string): Promise<SearchResult[]> {
      this.searchKeyword = keyword;
      const q = keyword.trim();
      if (!q) return [];
      const localPoets = this.poets
        .filter((p) => p.name.includes(q) || p.tags.some((tag) => tag.includes(q)) || famousAliases(p.name).some((a) => a.includes(q) || q.includes(a)))
        .sort((a, b) => (famousWeight(b.name) - famousWeight(a.name)) || (b.poemCount - a.poemCount))
        .slice(0, 12)
        .map((p) => ({ id: p.id, type: 'poet' as const, title: p.name, subtitle: `${p.dynastyRaw || p.dynasty} · ${p.poemCount.toLocaleString()} 首` }));
      const localPoems = this.poems
        .filter((poem) => poem.title.includes(q) || poem.content.includes(q))
        .slice(0, 12)
        .map((poem) => ({ id: poem.id, type: 'poem' as const, title: poem.title, subtitle: this.poets.find((p) => p.id === poem.poetId)?.name || poem.dynasty, poetId: poem.poetId }));
      if (this.dataMode === 'real-index') {
        const realPoets = searchRealPoets(q, 16);
        const realLines = await searchRealLines(q, 16);
        const merged = this.activePanel === 'line'
          ? [...realLines, ...localPoems, ...realPoets, ...localPoets]
          : [...realPoets, ...localPoets, ...realLines, ...localPoems];
        const seen = new Set<string>();
        return merged.filter((r) => (seen.has(`${r.type}:${r.id}`) ? false : (seen.add(`${r.type}:${r.id}`), true))).slice(0, 30);
      }
      return [...localPoets, ...localPoems];
    },
    async materializeSearchResult(result: SearchResult): Promise<{ poet?: PoetNode; poem?: PoemNode }> {
      if (result.type === 'poet') {
        const poet = this.poets.find((p) => p.id === result.id);
        if (poet) await this.selectPoet(poet.id);
        return { poet };
      }
      if (result.type === 'poem') {
        const poem = this.poems.find((p) => p.id === result.id);
        if (poem) this.selectPoem(poem.id);
        return { poem, poet: poem ? this.poets.find((p) => p.id === poem.poetId) : undefined };
      }
      if (result.type === 'line' && result.poetId != null && result.poemIndex != null) {
        const poet = this.poets.find((p) => p.id === result.poetId);
        if (!poet) return {};
        await this.selectPoet(poet.id);
        const poem = this.poems.find((p) => p.poetId === poet.id && p.catalogIndex.endsWith(String(result.poemIndex).padStart(6, '0')));
        if (poem) this.selectPoem(poem.id);
        return { poet, poem };
      }
      return {};
    },
    /*
    createVoidPoem(position = { x: 0, y: 0, z: 0 }) {
      const id = `void:${Date.now()}`;
      const lines = ['虚空有星尘', '忽然成短章', '一编号如海', '照见古今光'];
      const poet = this.poets[0];
      const node: PoemNode = {
        id,
        poetId: poet.id,
        title: '虚空之诗',
        dynasty: '宇宙噪声',
        form: '古体',
        content: lines.join('\n'),
        lines,
        position: { ...position, y: position.y + 10 },
        catalogIndex: `VOID-${BigInt(Date.now()).toString(36).toUpperCase()}`,
        source: 'void',
      };
      // 保留用户点击虚空时的世界坐标；只有外部未传入坐标时才落到作者星团附近。
      if (!position || (position.x === 0 && position.y === 0 && position.z === 0)) {
        node.position = deterministicPoemPosition(poet, id, this.poems.length + 1);
      }
      this.poems = [...this.poems, node];
      this.selectedPoemId = node.id;
      this.selectedPoetId = node.poetId;
      this.particleCount = this.poets.length + this.poems.length;
    },
    */
    updateHashForPoet(id: string) {
      history.replaceState(null, '', `${location.pathname}${location.search}#a=${encodeURIComponent(id)}`);
    },
    updateHashForPoem(id: string) {
      history.replaceState(null, '', `${location.pathname}${location.search}#poem=${encodeURIComponent(id)}`);
    },
    restoreFromHash() {
      const hash = decodeURIComponent(location.hash || '');
      if (hash.startsWith('#a=')) {
        const id = hash.slice(3);
        if (this.poets.some((p) => p.id === id)) void this.selectPoet(id);
      }
    },
  },
});
