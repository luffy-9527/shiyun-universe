<template>
  <div ref="root" class="universe-canvas" />
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useUniverseStore } from '../stores/universe';
import { UniverseEngine } from '../three/UniverseEngine';

const root = ref<HTMLElement | null>(null);
const store = useUniverseStore();
const { relations, selectedPoetId, selectedPoemId, showRelations, showPoems, qualityMode } = storeToRefs(store);
const renderPoets = computed(() => store.filteredPoets);
const renderPoems = computed(() => store.filteredPoems);
const renderRelations = computed(() => {
  const ids = new Set(renderPoets.value.map((poet) => poet.id));
  return relations.value.filter((relation) => ids.has(relation.sourcePoetId) && ids.has(relation.targetPoetId));
});
let engine: UniverseEngine | null = null;

onMounted(() => {
  if (!root.value) return;
  engine = new UniverseEngine({
    container: root.value,
    poets: renderPoets.value,
    poems: renderPoems.value,
    relations: renderRelations.value,
    quality: qualityMode.value,
    showRelations: showRelations.value,
    showPoems: showPoems.value,
    onHover: (payload) => store.setHoveredObject(payload),
    onSelectPoet: async (id) => {
      await store.selectPoet(id);
      const poet = store.poets.find((p) => p.id === id);
      if (poet) engine?.flyTo(poet.position, 220);
    },
    onSelectPoem: (id) => {
      store.selectPoem(id);
    },
    onFps: (fps) => store.setFps(fps),
    onParticleCount: (count) => store.setParticleCount(count),
  });
});

watch([renderPoets, renderPoems, renderRelations], () => {
  engine?.updateData(renderPoets.value, renderPoems.value, renderRelations.value);
});

watch(selectedPoetId, (id) => {
  engine?.setSelectedPoet(id);
});

watch(selectedPoemId, (id) => {
  engine?.setSelectedPoem(id);
  if (!id) return;
  const poem = store.poems.find((p) => p.id === id);
  if (poem) engine?.flyTo(poem.position, 140);
});

watch([showRelations, showPoems], () => {
  engine?.setVisibility(showRelations.value, showPoems.value);
});

watch(qualityMode, (mode) => {
  engine?.setQuality(mode);
});

// 给 SearchPanel / DetailDrawer 触发飞行使用。
const onFlyTo = ((event: CustomEvent) => {
  engine?.flyTo(event.detail.position, event.detail.distance);
}) as EventListener;
window.addEventListener('shiyun:fly-to', onFlyTo);

onBeforeUnmount(() => {
  window.removeEventListener('shiyun:fly-to', onFlyTo);
  engine?.dispose();
  engine = null;
});
</script>
