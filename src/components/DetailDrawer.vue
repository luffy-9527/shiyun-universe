<template>
  <aside v-if="!store.uiHidden" class="detail-drawer glass" :class="{ empty: !store.selectedPoet && !store.selectedPoem }">
    <button class="drawer-close" title="关闭" @click="store.clearSelection()">×</button>

    <template v-if="store.selectedPoem && author">
      <div class="drawer-headline">
        <div>
          <div class="drawer-kicker">Poem Star</div>
          <h2>《{{ store.selectedPoem.title }}》</h2>
          <div class="meta-line">{{ author.name }} · {{ store.selectedPoem.dynasty }} · {{ store.selectedPoem.form }}</div>
        </div>
        <div class="small-actions">
          <button @click="sharePoem">分享</button>
          <button @click="store.selectPoet(author.id)">作者</button>
        </div>
      </div>

      <div class="poem-body">
        <p v-for="(line, index) in store.selectedPoem.lines" :key="`${line}-${index}`">{{ line }}</p>
      </div>
      <dl class="info-list compact">
        <div><dt>目录编号</dt><dd>{{ store.selectedPoem.catalogIndex }}</dd></div>
        <div><dt>数据来源</dt><dd>{{ sourceLabel(store.selectedPoem.source) }}</dd></div>
      </dl>
      <div class="drawer-actions">
        <button @click="fly(author.position, 220)">定位作者</button>
        <button @click="copyPoem">复制诗文</button>
      </div>
    </template>

    <template v-else-if="store.selectedPoet">
      <div class="drawer-headline">
        <div>
          <div class="drawer-kicker">Poet Star</div>
          <h2>{{ store.selectedPoet.name }}</h2>
          <div class="meta-line">
            {{ store.selectedPoet.dynastyRaw || store.selectedPoet.dynasty }} ·
            {{ store.selectedPoet.poemCount.toLocaleString() }} 首{{ store.selectedPoet.source === 'real-index' ? '真实作品' : '演示作品' }}
          </div>
        </div>
        <div class="small-actions">
          <button @click="sharePoet">分享</button>
          <button @click="portraitPoet">留影</button>
        </div>
      </div>

      <dl class="info-list compact">
        <div><dt>影响力</dt><dd>{{ Math.round(store.selectedPoet.influence) }}</dd></div>
        <div><dt>生卒年</dt><dd>{{ lifeSpan }}</dd></div>
        <div><dt>坐标</dt><dd>{{ coord(store.selectedPoet.position) }}</dd></div>
      </dl>

      <p class="description">{{ store.selectedPoet.description }}</p>

      <section class="poet-work-section">
        <div class="section-title-row">
          <h3>全部诗词</h3>
          <span>
            已加载 {{ poemsOfSelected.length.toLocaleString() }} / {{ store.selectedPoet.poemCount.toLocaleString() }}
          </span>
        </div>

        <div v-if="isLoadingPoems" class="load-progress">
          <div class="bar"><i :style="{ width: `${store.poemLoadProgress || 18}%` }" /></div>
          <span>正在按分片加载 {{ store.selectedPoet.name }} 的作品……</span>
        </div>
        <div v-if="store.poemLoadError" class="data-warning inline">{{ store.poemLoadError }}</div>

        <div v-if="poemsOfSelected.length" class="poem-title-list">
          <article v-for="poem in pagedPoems" :key="poem.id" class="poem-title-card">
            <button class="poem-title-main" @click="openPoem(poem.id)">
              <span class="caret">›</span>
              <strong>{{ poem.title }}</strong>
              <em>{{ poem.form }}</em>
            </button>
            <div class="poem-row-actions">
              <button @click="openPoem(poem.id)">定位</button>
              <button @click="copyOnePoem(poem.id)">复制编号</button>
              <button @click="portraitPoem(poem.id)">留影</button>
            </div>
          </article>
          <button v-if="visibleCount < poemsOfSelected.length" class="load-more" @click="visibleCount += 80">
            显示更多 {{ Math.min(80, poemsOfSelected.length - visibleCount) }} 首
          </button>
        </div>
        <div v-else-if="!isLoadingPoems" class="muted poem-empty-note">
          真实数据模式下，点击诗人会从 <code>poems/{{ store.selectedPoet.id.slice(0, 2) }}.json</code> 按 Range 读取该诗人的全部作品；没有真实分片时会显示演示作品。
        </div>
      </section>

      <section>
        <div class="section-title-row">
          <h3>相关诗人网络</h3>
          <span>{{ relatedPoets.length }} 条可见关系</span>
        </div>
        <div class="relation-list">
          <button v-for="rel in relatedPoets.slice(0, 18)" :key="rel.id" @click="openPoet(rel.id)">{{ rel.name }}</button>
          <span v-if="!relatedPoets.length" class="muted">暂无已加载关系。</span>
        </div>
      </section>

      <div class="drawer-actions sticky-actions">
        <button @click="fly(store.selectedPoet.position, 220)">飞向诗人</button>
        <button @click="store.showRelations || store.toggleRelations()">临时高亮网络</button>
      </div>
    </template>

    <template v-else>
      <div class="drawer-kicker">Welcome</div>
      <h2>进入诗歌星海</h2>
      <p class="description big-copy">{{ store.corpusSlogan }}</p>
      <p class="description">点击作者星会打开他的完整作品抽屉；点击诗星即可阅读真实诗文。</p>
    </template>
  </aside>
  <div v-if="store.lastToast && !store.uiHidden" class="toast glass">{{ store.lastToast }}</div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useUniverseStore } from '../stores/universe';
import type { PoemNode, Vec3Tuple } from '../types/poetry';

const store = useUniverseStore();
const visibleCount = ref(80);
const author = computed(() => store.selectedPoem ? store.poets.find((p) => p.id === store.selectedPoem?.poetId) || null : null);
const poemsOfSelected = computed(() => {
  const poet = store.selectedPoet;
  if (!poet) return [];
  const list = store.poems.filter((p) => p.poetId === poet.id);
  if (store.currentPoemForm !== '全部') return list.filter((p) => p.form === store.currentPoemForm);
  return list;
});
const pagedPoems = computed(() => poemsOfSelected.value.slice(0, visibleCount.value));
const isLoadingPoems = computed(() => store.selectedPoet && store.poemLoadingPoetId === store.selectedPoet.id);
const lifeSpan = computed(() => {
  const p = store.selectedPoet;
  if (!p || (!p.birthYear && !p.deathYear)) return '未载';
  return `${p.birthYear ?? '?'} — ${p.deathYear ?? '?'}`;
});
const relatedPoets = computed(() => {
  const ids = new Set(store.relatedPoetIds);
  return [...ids].map((id) => store.poets.find((p) => p.id === id)).filter(Boolean) as typeof store.poets;
});

watch(() => store.selectedPoetId, () => { visibleCount.value = 80; });
watch(() => store.currentPoemForm, () => { visibleCount.value = 80; });

function coord(v: Vec3Tuple) {
  return `${v.x.toFixed(1)}, ${v.y.toFixed(1)}, ${v.z.toFixed(1)}`;
}

function sourceLabel(source?: string) {
  if (source === 'real-shard') return '真实作品分片';
  return source === 'real-shard' ? '真实作品分片' : '真实诗文';
}

function fly(position: Vec3Tuple, distance: number) {
  window.dispatchEvent(new CustomEvent('shiyun:fly-to', { detail: { position, distance } }));
}

function openPoem(id: string) {
  store.selectPoem(id);
  const poem = store.poems.find((p) => p.id === id);
  if (poem) fly(poem.position, 140);
}

async function openPoet(id: string) {
  await store.selectPoet(id);
  const poet = store.poets.find((p) => p.id === id);
  if (poet) fly(poet.position, 95);
}

async function copyPoem() {
  if (!store.selectedPoem || !author.value) return;
  await navigator.clipboard.writeText(`《${store.selectedPoem.title}》\n${author.value.name}\n\n${store.selectedPoem.lines.join('\n')}`);
  store.toast('已复制诗文');
}

async function copyOnePoem(id: string) {
  const poem = store.poems.find((p) => p.id === id);
  if (!poem) return;
  await navigator.clipboard.writeText(poem.catalogIndex);
  store.toast('已复制目录编号');
}

async function sharePoet() {
  if (!store.selectedPoet) return;
  const url = `${location.origin}${location.pathname}${location.search}#a=${encodeURIComponent(store.selectedPoet.id)}`;
  await navigator.clipboard.writeText(url);
  store.toast('已复制诗人分享链接');
}

async function sharePoem() {
  if (!store.selectedPoem) return;
  const url = `${location.origin}${location.pathname}${location.search}#poem=${encodeURIComponent(store.selectedPoem.id)}`;
  await navigator.clipboard.writeText(url);
  store.toast('已复制诗作分享链接');
}

function portraitPoet() {
  const name = store.selectedPoet?.name || '诗人';
  store.toast(`已留影：${name} 的星系视角`);
}

function portraitPoem(id: string) {
  const poem: PoemNode | undefined = store.poems.find((p) => p.id === id);
  store.toast(`已留影：《${poem?.title || '诗'}》`);
}
</script>
