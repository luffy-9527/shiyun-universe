<template>
  <div class="filter-group">
    <button
      v-for="item in dynastyOptions"
      :key="item"
      class="filter-pill"
      :class="{ active: item === dynastyOptions[0] ? store.selectedDynasties.length === 0 : store.selectedDynasties.includes(item) }"
      @click="store.setDynastyFilter(item)"
    >
      <span>{{ item }}</span>
      <small>{{ store.dynastyCounts[item] || 0 }}</small>
    </button>
  </div>
</template>

<script setup lang="ts">
import { dynastyOptions } from '../data/dynastyConfig';
import { useUniverseStore } from '../stores/universe';
const store = useUniverseStore();
</script>
