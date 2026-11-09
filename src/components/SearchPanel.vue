<template>
  <div class="search-panel">
    <div class="search-box">
      <input
        v-model="keyword"
        type="search"
        :placeholder="placeholder"
        @input="onInput"
        @keydown.enter.prevent="goFirst"
      />
    </div>
    <div v-if="results.length" class="search-results">
      <button v-for="item in results" :key="`${item.type}:${item.id}`" @click="select(item)">
        <strong>{{ item.title }}</strong>
        <span>{{ label(item.type) }} · {{ item.subtitle }}</span>
      </button>
    </div>
    <div v-else-if="keyword.trim() && searched" class="search-empty">没有命中，试试作者名、诗名或一句诗。</div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useDebounceFn } from '@vueuse/core';
import { useUniverseStore } from '../stores/universe';
import type { SearchResult } from '../types/poetry';

const store = useUniverseStore();
const keyword = ref('');
const results = ref<SearchResult[]>([]);
const searched = ref(false);
const placeholder = computed(() => {
  if (store.activePanel === 'line') return '搜索诗句……（回车飞到第一个）';
  if (store.activePanel === 'explore') return '探诗：输入诗题、片段或编号占位';
  return '搜索诗人……（回车飞到第一个）';
});

const perform = useDebounceFn(async () => {
  searched.value = true;
  results.value = await store.searchNodes(keyword.value);
}, 180);

function onInput() {
  perform();
}

function label(type: SearchResult['type']) {
  if (type === 'poet') return '诗人';
  if (type === 'line') return '诗句';
  return '诗作';
}

async function select(item: SearchResult) {
  const payload = await store.materializeSearchResult(item);
  const target = payload.poem?.position || payload.poet?.position;
  if (target) {
    window.dispatchEvent(new CustomEvent('shiyun:fly-to', { detail: { position: target, distance: payload.poem ? 140 : 220 } }));
  }
  results.value = [];
  searched.value = false;
}

function goFirst() {
  if (results.value[0]) select(results.value[0]);
}
</script>
