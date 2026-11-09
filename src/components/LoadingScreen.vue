<template>
  <Transition name="fade">
    <div v-if="store.loading" class="loading-screen">
      <div class="loading-orb"></div>
      <div class="loading-title">诗云 · 中国诗歌宇宙</div>
      <div class="loading-text">{{ store.loadingText || '正在展开三千年诗歌星图' }}</div>
      <div class="loading-slogan">{{ store.corpusSlogan }}</div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { useUniverseStore } from '../stores/universe';
const store = useUniverseStore();
</script>
