<template>
  <div class="flex justify-between mx-5">
    <div class="flex items-center">
      <input type="checkbox" class="flex justify-between pl-2" />
      <span class="font-bold text-[12px] pl-2">Select All</span>
    </div>
    <div><p class="text-gray-600 text-[12px]">Sort: Alphabetical A-Z</p></div>
  </div>
  <div class="grid grid-cols-3 gap-4 border-t-2 p-5 mt-2">
    <div
      v-for="asset in assets"
      :key="asset.id"
      @click.stop="$emit('select', asset.id)"
      class="group relative cursor-pointer border hover:border-orange-400"
    >
      <div class="flex justify-between">
        <div class="pl-2 pt-2 flex items-center">
          <input type="checkbox" />
          <FontAwesomeIcon
            :icon="['far', 'heart']"
            @click.stop="asset.favourited = !asset.favourited"
            :class="[
              ' pl-2 top-2 text-lg cursor-pointer transition-all duration-200 ease-in-out hover:scale-125',
              asset.favourited
                ? 'text-orange-500 opacity-100'
                : 'text-gray-400',
              'opacity-0 group-hover:opacity-100',
            ]"
          />
          <img
            class="w-[32px] transition-opacity duration-500 ease-in-out"
            :class="
              selectedId === asset.id
                ? 'opacity-100'
                : 'opacity-0 group-hover:opacity-100'
            "
            src="../../assets/Download.svg"
            alt="Download Icon"
          />
        </div>
        <p class="relative top-2 right-2">...</p>
      </div>

      <!-- thumbnail -->
      <div class="h-[218px] w-[244px] flex items-center justify-center">
        <img
          :src="asset.image_path"
          :alt="asset.image_name || 'Asset ' + asset.id"
          class="h-full w-full object-contain p-2"
        />
      </div>
      <div class="bg-[#F5F5F5] p-4 mt-2">
        <p class="text-sm mt-2">
          {{ asset.image_name || asset.image_path.split('/').pop() }}
        </p>
        <span class="text-[12px] text-gray-600">
          {{ asset.image_dimensions.width }} x
          {{ asset.image_dimensions.height }} px
        </span>
        <span class="text-[12px] text-gray-600"
          >{{ (asset.file_size / 1000000).toFixed(1) }}MB</span
        >
      </div>
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
