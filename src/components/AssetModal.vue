<template>
  <div
    v-if="show"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
  >
    <!-- modal content -->
    <div
      class="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
    >
      <!-- Close button -->
      <button
        @click="$emit('close')"
        class="absolute top-4 left-4 text-white text-2xl z-50"
        aria-label="Close modal"
      >
        ✕
      </button>

      <!-- Scroll arrows (left/right placeholders) -->
      <div
        class="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-4xl px-4 cursor-pointer select-none"
      >
        ‹
      </div>
      <div
        class="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-4xl px-4 cursor-pointer select-none"
      >
        ›
      </div>

      <!-- Image container -->
      <div class="relative">
        <img
          :src="asset.image_path"
          :alt="asset.image_name || 'Asset ' + asset.id"
          class="max-h-[80vh] max-w-[80vw] object-contain rounded"
        />

        <!-- File name and icons overlay -->
        <div
          class="absolute top-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-black/50 px-3 py-1 rounded"
        >
          <p class="text-white text-sm font-semibold">
            {{ asset.image_name || asset.image_path.split('/').pop() }}
          </p>
          <button class="text-white hover:text-orange-500">
            <FontAwesomeIcon :icon="['far', 'heart']" />
          </button>
          <button class="text-white hover:text-gray-300">
            <img src="../../assets/Download.svg" alt="Download" class="w-5" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Asset } from '../data/assets-array';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const props = defineProps<{
  show: boolean;
  asset: Asset;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();
</script>
