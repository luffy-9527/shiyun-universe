<template>
  <div v-if="!store.uiHidden" class="hud-layer">
    <header class="brand-bar">
      <div class="logo-mark">诗云</div>
      <div class="logo-sub">Poetry Cloud</div>
    </header>

    <div class="top-toolbar">
      <PoemFormFilter />
      <button class="toolbar-chip" :class="{ active: commonOnly }" @click="commonOnly = !commonOnly">常用字</button>
      <button class="toolbar-chip" :class="{ active: geluOnly }" @click="geluOnly = !geluOnly">格律</button>
      <button class="toolbar-chip gold" @click="moreOpen = !moreOpen">更多</button>
      <QualityToggle />
    </div>

    <div class="mode-panel">
      <div class="mode-tabs">
        <button :class="{ active: store.activePanel === 'poet' }" @click="store.setActivePanel('poet')">诗人</button>
        <button :class="{ active: store.activePanel === 'line' }" @click="store.setActivePanel('line')">寻诗</button>
        <button :class="{ active: store.activePanel === 'explore' }" @click="store.setActivePanel('explore')">探诗</button>
        <button :class="{ active: store.activePanel === 'dynasty' }" @click="store.setActivePanel('dynasty')">朝代</button>
      </div>
      <SearchPanel v-if="store.activePanel !== 'dynasty'" />
      <DynastyFilter v-else />
      <div v-if="store.dataError" class="data-warning slim">{{ store.dataError }}</div>
    </div>

    <MorePanel :open="moreOpen" @close="moreOpen = false" />

    <div class="corner-stats">
      {{ totalPoets }} 诗人 · {{ totalPoems }} 首 ·
      <button @click="store.toggleUI()">隐藏界面 · H</button>
    </div>

    <div class="bottom-hint">
      WASD 飞行 · 拖拽转向 · 滚轮调速 · <b>点击星君看其真作</b>
    </div>

    <div class="status-panel compact">
      <span>{{ store.qualityMode === 'high' ? '画质·高' : '画质·流畅' }}</span>
      <span>FPS {{ store.fps || '--' }}</span>
      <span>粒子 {{ store.particleCount.toLocaleString() }}</span>
      <span>{{ store.dataMode === 'real-index' ? '真实语料' : '演示语料' }}</span>
    </div>
  </div>
  <button v-else class="show-ui" @click="store.toggleUI()">显示界面 · H</button>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useMagicKeys } from '@vueuse/core';
import { watch } from 'vue';
import { useUniverseStore } from '../stores/universe';
import SearchPanel from './SearchPanel.vue';
import DynastyFilter from './DynastyFilter.vue';
import PoemFormFilter from './PoemFormFilter.vue';
import QualityToggle from './QualityToggle.vue';
import MorePanel from './MorePanel.vue';

const store = useUniverseStore();
const moreOpen = ref(false);
const commonOnly = ref(false);
const geluOnly = ref(false);
const totalPoets = computed(() => (store.selectedDynasties.length === 0 ? (store.manifest?.poetCount || store.poets.length) : store.filteredPoets.length).toLocaleString());
const totalPoems = computed(() => (store.selectedDynasties.length === 0 ? (store.manifest?.poemCount || store.poems.length) : store.filteredPoems.length).toLocaleString());

const keys = useMagicKeys();
watch(keys.h, (v) => {
  const el = document.activeElement as HTMLElement | null;
  if (v && el?.tagName !== 'INPUT' && el?.tagName !== 'TEXTAREA') store.toggleUI();
});
</script>
