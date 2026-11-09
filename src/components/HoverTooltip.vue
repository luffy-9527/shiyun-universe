<template>
  <div
    v-if="store.hoveredObject && !store.uiHidden"
    class="hover-tooltip"
    :style="{ left: `${store.hoveredObject.screenX + 14}px`, top: `${store.hoveredObject.screenY + 14}px` }"
  >
    <span>{{ store.hoveredObject.type === 'poet' ? '诗人' : '诗作' }}</span>
    <strong>{{ store.hoveredObject.name }}</strong>
  </div>
</template>

<script setup lang="ts">
import { useUniverseStore } from '../stores/universe';
const store = useUniverseStore();
</script>
