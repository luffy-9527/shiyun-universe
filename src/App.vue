<template>
  <main class="app-shell" :class="{ 'performance-lite': qualityMode === 'smooth' || (fps > 0 && fps < 42) }">
    <UniverseCanvas />
    <HudPanel />
    <DetailDrawer />
    <HoverTooltip />
    <LoadingScreen />
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useUniverseStore } from './stores/universe';
import UniverseCanvas from './components/UniverseCanvas.vue';
import HudPanel from './components/HudPanel.vue';
import DetailDrawer from './components/DetailDrawer.vue';
import HoverTooltip from './components/HoverTooltip.vue';
import LoadingScreen from './components/LoadingScreen.vue';

const store = useUniverseStore();
const { qualityMode, fps } = storeToRefs(store);
onMounted(() => store.bootstrap());
</script>
