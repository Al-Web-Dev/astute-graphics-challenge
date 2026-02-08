<template>
  <div
    v-for="asset in assets"
    :key="asset.id"
    @click.stop="toggleSelection(asset.id)"
    :class="[
      'group px-5 py-1 border-b grid grid-cols-[35px_85px_2fr_60px_60px_180px_20px] text-sm text-gray-600 h-[105px] items-center transition-colors duration-500 ease-in-out cursor-pointer',
      selectedId === asset.id ? 'bg-[#FAFAFA]' : 'hover:bg-[#FAFAFA]',
    ]"
  >
    <!-- selection checkbox -->
    <div
      @click.stop="toggleSelection(asset.id)"
      class="justify-self-start w-4 h-4 border border-gray-300 rounded cursor-pointer flex items-center justify-center transition-opacity duration-200"
      :class="
        selectedId === asset.id
          ? 'opacity-100'
          : 'opacity-0 group-hover:opacity-100'
      "
    >
      <svg
        v-if="selectedId === asset.id"
        class="w-3 h-3 text-orange-500"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 011.414-1.414L8.414 12.586l7.879-7.879a1 1 0 011.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </div>

    <!-- thumbnail -->
    <div class="h-[75px] w-[75px] flex items-center justify-center">
      <img
        :src="asset.image_path"
        :alt="asset.image_name || 'Asset ' + asset.id"
        class="h-full w-full object-contain"
      />
    </div>

    <!-- details -->
    <div class="flex items-center">
      <p>{{ asset.image_name || asset.image_path.split('/').pop() }}</p>
      <img
        class="ml-4 w-[32px] transition-opacity duration-500 ease-in-out"
        :class="
          selectedId === asset.id
            ? 'opacity-100'
            : 'opacity-0 group-hover:opacity-100'
        "
        src="../../assets/Download.svg"
        alt="Download Icon"
      />
      <FontAwesomeIcon
        :icon="['far', 'heart']"
        :class="[
          'ml-auto px-8 text-lg cursor-pointer transition-all duration-200 ease-in-out hover:scale-125',
          asset.favourited ? 'text-orange-500' : 'text-gray-400',
          selectedId === asset.id
            ? 'opacity-100'
            : 'opacity-0 group-hover:opacity-100',
        ]"
      />
    </div>

    <div>
      <p class="uppercase">{{ asset.file_type }}</p>
    </div>
    <div>
      <p>{{ (asset.file_size / 1000000).toFixed(1) }}MB</p>
    </div>
    <div><DateFormat :value="asset.updated_at" /></div>
    <div><p>...</p></div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, defineProps } from 'vue';
import type { Asset } from '../../data/assets-array';
import DateFormat from '../../components/DateFormat.vue';

const props = defineProps<{
  assets: Asset[];
}>();

const emit = defineEmits<{
  (e: 'select', id: number): void;
  (e: 'clear'): void;
}>();

const selectedId = ref<number | null>(null);

function toggleSelection(id: number) {
  if (selectedId.value === id) {
    selectedId.value = null;
    emit('clear');
  } else {
    selectedId.value = id;
    emit('select', id);
  }
}
</script>
