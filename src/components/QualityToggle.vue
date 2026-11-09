<template>
  <button class="toolbar-chip" @click="store.toggleQualityMode()">画质·{{ store.qualityMode === 'high' ? '高' : '低' }}</button>
</template>
<script setup lang="ts">
import { useUniverseStore } from '../stores/universe';
const store = useUniverseStore();
</script>
