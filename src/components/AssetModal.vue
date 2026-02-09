<template>
  <div
    v-if="show"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
  >
    <!-- Close button top-right -->
    <button
      @click="$emit('close')"
      class="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
      aria-label="Close modal"
    >
      ✕
    </button>

    <div class="relative flex flex-col items-start max-w-[90vw] max-h-[80vh]">
      <!-- File info above the image, left-aligned to image -->
      <div class="flex items-center w-[100%]">
        <div>
          <p class="text-white text-lg font-semibold">
            {{ asset.image_path.split('/').pop() }}
          </p>
        </div>

        <div class="flex items-center ml-auto">
          <button class="text-white hover:text-orange-500">
            <FontAwesomeIcon :icon="['far', 'heart']" />
          </button>

          <!-- Download icon -->
          <button class="text-white hover:text-gray-300">
            <img
              src="../assets/Download.svg"
              alt="Download"
              class="filter brightness-0 invert"
            />
          </button>
        </div>

        <!-- Heart icon -->
      </div>

      <!-- Image + scroll arrows -->
      <div class="relative flex items-center justify-center w-full">
        <!-- Left arrow -->
        <div
          class="absolute left-[-3rem] top-1/2 transform -translate-y-1/2 text-white text-6xl cursor-pointer select-none"
        >
          ‹
        </div>

        <!-- Right arrow -->
        <div
          class="absolute right-[-3rem] top-1/2 transform -translate-y-1/2 text-white text-6xl cursor-pointer select-none"
        >
          ›
        </div>

        <img
          :src="asset.image_path"
          :alt="asset.image_name || 'Asset ' + asset.id"
          class="max-h-[80vh] object-contain"
        />
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
