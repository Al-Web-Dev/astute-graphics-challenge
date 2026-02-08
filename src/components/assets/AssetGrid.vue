<template>
  <div class="grid grid-cols-3 gap-4">
    <div
      v-for="asset in assets"
      :key="asset.id"
      @click.stop="$emit('select', asset.id)"
      class="border rounded p-2 cursor-pointer hover:bg-gray-100"
    >
      <img
        :src="asset.image_path"
        :alt="asset.image_name"
        class="h-32 w-full object-cover"
      />
      <p class="text-sm mt-2">
        {{ asset.image_name || asset.image_path.split('/').pop() }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Asset } from '../../data/assets-array';

const props = defineProps<{
  assets: Asset[];
}>();
const emit = defineEmits<{
  (e: 'select', id: number): void;
}>();
</script>
