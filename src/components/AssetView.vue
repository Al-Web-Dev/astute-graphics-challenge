<template>
  <div class="space-y-4">
    <div
      v-for="asset in assets"
      :key="asset.id"
      class="border p-4 rounded"
    >
      <img
        :src="asset.image_path"
        :alt="asset.image_name || 'Asset ' + asset.id"
        class="w-32 h-32 object-cover"
      />
      <div class="mt-2">
        <h2 class="font-semibold text-sm">
          {{ asset.image_name || 'Unnamed Asset' }}
        </h2>
        <p class="text-xs text-gray-500">{{ asset.file_type }} • {{ (asset.file_size / 1000000).toFixed(2) }} MB</p>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import type { Asset } from '../data/assets-array'

const props = defineProps<{
  assets: Asset[]
}>()
</script>
