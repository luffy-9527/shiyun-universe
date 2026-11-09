<template>
  <div v-if="open && !store.uiHidden" class="more-panel glass">
    <div class="more-head">
      <strong>更多</strong>
      <button @click="$emit('close')">×</button>
    </div>

    <section>
      <label>赠诗指引线</label>
      <div class="segmented">
        <button :class="{ active: !store.showRelations }" @click="ensureRelations(false)">不显示</button>
        <button :class="{ active: store.showRelations }" @click="ensureRelations(true)">一次性</button>
        <button :class="{ active: store.showRelations && store.selectedPoetId }" @click="focusRelations">常驻</button>
      </div>
    </section>

    <section>
      <label>显示层</label>
      <label class="check-row"><input type="checkbox" :checked="store.showRelations" @change="store.toggleRelations()" /> 赠诗网络 · 开启后可显示诗人关系弧线</label>
      <label class="check-row"><input type="checkbox" :checked="store.showPoems" @change="store.togglePoems()" /> 诗歌小星 · 显示已加载作品星群</label>
      <label class="check-row"><input type="checkbox" checked /> 引力 · 摄像机随星系柔和靠近</label>
    </section>

    <section>
      <label>画质</label>
      <div class="segmented">
        <button :class="{ active: store.qualityMode === 'smooth' }" @click="setQuality('smooth')">流畅</button>
        <button :class="{ active: store.qualityMode === 'high' }" @click="setQuality('high')">高画质</button>
      </div>
    </section>

    <section>
      <label>数据</label>
    </section>

    <section>
      <label>关于 · 数据</label>
      <div class="about-actions">
        <button @click="copyDataHint">复制数据路径</button>
        <button @click="store.toggleUI()">截图模式</button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useUniverseStore } from '../stores/universe';
import type { QualityMode } from '../types/poetry';

defineProps<{ open: boolean }>();
defineEmits<{ close: [] }>();
const store = useUniverseStore();

function ensureRelations(value: boolean) {
  if (store.showRelations !== value) store.toggleRelations();
}

function focusRelations() {
  if (!store.showRelations) store.toggleRelations();
  store.toast(store.selectedPoetId ? '已锁定当前诗人关系网' : '先点击一位诗人，再锁定关系网');
}

function setQuality(mode: QualityMode) {
  if (store.qualityMode !== mode) store.toggleQualityMode();
}

async function copyDataHint() {
  await navigator.clipboard.writeText(`${location.origin}/data/manifest.json`);
  store.toast('已复制本地数据入口');
}
</script>
