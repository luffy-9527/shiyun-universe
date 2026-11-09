<template>
  <div class="form-filter compact-filter">
    <button
      v-for="form in forms"
      :key="form"
      class="toolbar-chip"
      :class="{ active: store.currentPoemForm === form }"
      @click="store.setPoemFormFilter(form)"
    >
      {{ label(form) }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useUniverseStore } from '../stores/universe';
import type { PoemFormFilter } from '../types/poetry';
const store = useUniverseStore();
const forms: PoemFormFilter[] = ['五绝', '七绝', '五律', '七律', '现代诗', '全部'];
function label(form: PoemFormFilter) {
  if (form === '现代诗') return '自由';
  if (form === '全部') return '全部';
  return form;
}
</script>
