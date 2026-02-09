<template>
  <div class="px-[30px] py-[40px]">
    <h3 class="text-lg text-[#FF5300] uppercase pb-8 pt-4">Quasar branding</h3>
    <div class="p-4">
      <div v-if="props.asset">
        <p class="font-bold mb-6">File info</p>
        <hr />
        <div class="flex items-center mt-4">
          <!-- Left-aligned text -->
          <p class="font-bold">
            {{
              props.asset.image_name || props.asset.image_path.split('/').pop()
            }}
          </p>

          <!-- Right-aligned icons -->
          <div class="ml-auto flex items-center">
            <FontAwesomeIcon
              :icon="['far', 'heart']"
              :class="[
                'text-lg cursor-pointer transition-all duration-200 ease-in-out hover:scale-125',
                props.asset.favourited ? 'text-orange-500' : 'text-gray-400',
              ]"
            />

            <img
              class="cursor-pointer w-[32px] transition-opacity duration-500 ease-in-out"
              src="../assets/Download.svg"
              :alt="props.asset.image_name || 'Asset ' + props.asset.id"
            />
          </div>
        </div>

        <div class="flex text-[12px] text-gray-600 gap-4 mb-4 mt-1">
          <span class="uppercase">{{ props.asset.file_type }}</span
          ><span>{{ (props.asset.file_size / 1000000).toFixed(1) }}MB</span>
          <span
            >{{ props.asset.image_dimensions.width }} x
            {{ props.asset.image_dimensions.height }} px</span
          >
        </div>

        <div
          class="relative inline-block cursor-pointer mb-5"
          @click="openModal(asset)"
        >
          <!-- main image -->
          <img :src="props.asset.image_path" alt="" class="block" />

          <!-- centered icon overlay -->
          <img
            src="../assets/Subtract.svg"
            alt="Magnify icon"
            class="absolute w-8 h-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          />
        </div>

        <hr />

        <AssetModal
          v-if="selectedImage"
          :asset="selectedImage"
          :show="modalOpen"
          @close="modalOpen = false"
        />

        <h4 class="font-bold my-4">Tags</h4>
        <div v-if="props.asset.tags.length">
          <ul class="flex flex-wrap gap-2 text-[12px] my-4">
            <li
              v-for="tag in props.asset.tags"
              :key="tag"
              class="flex items-center gap-1 rounded-full bg-gray-200 px-3 py-1 capitalize"
            >
              {{ tag }}
              <button
                class="ml-1 text-gray-500 hover:text-gray-700"
                aria-label="Remove tag Branding"
              >
                ✕
              </button>
            </li>
          </ul>
        </div>
        <div v-else><p>No Tags set</p></div>
        <hr />
        <h4 class="font-bold my-4">Description</h4>
        <p>{{ props.asset.description }}</p>
        <hr />
        <h4 class="mb-0 font-bold mt-4">File History</h4>

        <small
          >Date added: <DateFormat :value="props.asset.updated_at"
        /></small>
      </div>

      <div v-else>
        <div class="flex items-center gap-2 mb-4">
          <h4 class="mb-0 font-bold">Project Description</h4>
          <img
            class="w-6"
            src="/src/assets/pencil-line.svg"
            alt="Pencil icon"
          />
        </div>

        <p class="text-sm mb-4">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
        <hr class="mb-4" />

        <div class="flex items-center gap-2 mb-4">
          <h4 class="mb-0 font-bold">Project Tags</h4>
          <img
            class="w-6"
            src="/src/assets/pencil-line.svg"
            alt="Pencil icon"
          />
        </div>

        <div class="mb-4">
          <ul class="flex flex-wrap gap-2 text-[12px] mb-4">
            <li
              class="flex items-center gap-1 rounded-full bg-gray-200 px-3 py-1"
            >
              Branding
              <button
                class="ml-1 text-gray-500 hover:text-gray-700"
                aria-label="Remove tag Branding"
              >
                ✕
              </button>
            </li>

            <li
              class="flex items-center gap-1 rounded-full bg-gray-200 px-3 py-1"
            >
              Design Team
              <button
                class="ml-1 text-gray-500 hover:text-gray-700"
                aria-label="Remove tag Design"
              >
                ✕
              </button>
            </li>

            <li
              class="flex items-center gap-1 rounded-full bg-gray-200 px-3 py-1"
            >
              2025
              <button
                class="ml-1 text-gray-500 hover:text-gray-700"
                aria-label="Remove tag Design"
              >
                ✕
              </button>
            </li>

            <li
              class="flex items-center gap-1 rounded-full bg-gray-200 px-3 py-1"
            >
              In Progress
              <button
                class="ml-1 text-gray-500 hover:text-gray-700"
                aria-label="Remove tag Design"
              >
                ✕
              </button>
            </li>
          </ul>

          <hr class="mb-4" />
        </div>

        <div class="flex items-center gap-2 mb-4">
          <h4 class="mb-0 font-bold">Project URLs</h4>
          <img
            class="w-6"
            src="/src/assets/pencil-line.svg"
            alt="Pencil icon"
          />
        </div>

        <ul class="text-sm mb-4 space-y-1">
          <li>
            <a href="https://www.astutegraphics.com"
              >https://www.astutegraphics.com</a
            >
          </li>
          <li><a href="https://www.adidas.com">https://www.adidas.com</a></li>
          <li>
            <a href="https://www.superlongannoyingurl..."
              >https://www.superlongannoyingurl...</a
            >
          </li>
        </ul>

        <hr class="mb-4" />

        <small class="text-gray-500"
          >Project Created: 01 Jan 2023 at 13:07 <br />
          last modified by: <br />You<br />15 May 2025 at 17:52
        </small>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Asset } from '../data/assets-array';
import { ref } from 'vue';
import DateFormat from './DateFormat.vue';
import AssetModal from './AssetModal.vue';

// Image Modal
const modalOpen = ref(false);
const selectedImage = ref<Asset | null>(null);

function openModal(asset: Asset) {
  selectedImage.value = asset;
  modalOpen.value = true;
}

const props = defineProps<{
  asset: Asset | null;
}>();
</script>
