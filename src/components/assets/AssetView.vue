<template>
  <AssetList
    v-if="props.viewMode === 'list'"
    :assets="props.assets"
    @select="$emit('select', $event)"
    @clear="$emit('clear')"
  />

  <AssetGrid v-else :assets="props.assets" @select="$emit('select', $event)" />
</template>

<script setup lang="ts">
import AssetList from './AssetList.vue';
import AssetGrid from './AssetGrid.vue';
import type { Asset } from '../../data/assets-array';

const props = defineProps<{
  assets: Asset[];
  viewMode: string;
}>();

const emit = defineEmits<{
  (e: 'select', id: number): void;
  (e: 'clear'): void;
}>();
</script>
