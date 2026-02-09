<template>
  <div class="flex-1 flex overflow-hidden">
    <div class="flex">
      <img
        style="width: 210px; height: 996px"
        src="../assets/Navigation-Wide.png"
        alt="Navigation image"
      />
    </div>

    <main class="flex-1">
      <div class="pageBanner relative">
        <img src="../assets/banner.png" alt="Banner" />
        <h2
          class="absolute top-1/2 left-0 transform -translate-y-1/2 text-3xl px-4 text-white"
        >
          <span class="mx-4">ASSET MANAGER | Projects</span>
        </h2>
      </div>

      <div class="grid grid-cols-9">
        <div class="col-span-6 bg-white">
          <h3 class="font-semibold text-xl m-5">Astute Manager Pro Projects</h3>
          <div class="m-5 border-b flex justify-between h-12">
            <div class="flex items-end">
              <button class="btn btn-primary uppercase mr-2 tab-buttons">
                active projects
              </button>
              <button
                class="btn btn-primary uppercase btn_grey-out tab-buttons"
              >
                archived projects
              </button>
            </div>
            <div>
              <button
                class="group btn btn-primary flex items-center gap-2 transition bg-orange-500 border border-orange-500 text-white hover:bg-white hover:text-orange-500"
              >
                <FontAwesomeIcon
                  :icon="['fas', 'circle-plus']"
                  class="text-white transition group-hover:text-orange-500"
                />
                New Project
              </button>
            </div>
          </div>
          <div class="m-5 grid grid-cols-2">
            <div class="breadCrumbs span-col-1">
              <ul class="flex">
                <li>Active Projects</li>
                <li>Quasar Branding</li>
                <li>2025 Images</li>
              </ul>
              <h3 class="text-xl">Locations</h3>
            </div>

            <div class="col-span-1 flex justify-end">
              <img src="../assets/Tile Actions.svg" alt="three dotts" />
            </div>
          </div>
          <!-- New Folder, upload & Search Bar -->
          <div class="m-5 flex gap-2">
            <button
              class="btn group flex items-center gap-2 border border-gray-300 bg-white px-4 py-2 text-gray-500 transition hover:border-orange-500 hover:text-orange-500"
            >
              <FontAwesomeIcon
                :icon="['fas', 'circle-plus']"
                class="text-gray-400 transition group-hover:text-orange-500"
              />
              New Folder
            </button>

            <button
              class="btn group flex items-center gap-2 border border-gray-300 bg-white px-4 py-2 text-gray-500 transition hover:border-orange-500 hover:text-orange-500"
            >
              <FontAwesomeIcon
                :icon="['fas', 'circle-plus']"
                class="text-gray-400 transition group-hover:text-orange-500"
              />
              Upload files
            </button>

            <button
              class="btn btn-primary relative z-0 bg-white !text-gray-400 border-solid border-2 border-black-500 rounded-full flex gap-2"
            >
              <svg
                class="size-5 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
              >
                <path
                  d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z"
                />
              </svg>
              Search this Project
            </button>
          </div>

          <!-- Grid/col toggler -->
          <!-- Grid / List toggler -->
          <div class="flex justify-end m-5">
            <img
              class="w-6 cursor-pointer opacity-60 hover:opacity-100"
              src="../assets/list-regular-full 1.svg"
              alt="list toggler icon"
              @click="viewMode = 'list'"
            />

            <img
              class="ml-4 w-6 cursor-pointer opacity-60 hover:opacity-100"
              src="../assets/grid-2-regular-full 1.svg"
              alt="grid toggler icon"
              @click="viewMode = 'grid'"
            />
          </div>

          <AssetView
            :assets="assets"
            :view-mode="viewMode"
            @select="selectAsset"
            @clear="clearSelection"
          />
        </div>

        <div class="col-span-3">
          <SideBar :asset="selectedAsset" />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AssetView from '../components/assets/AssetView.vue';
import SideBar from '../components//SideBar.vue';
import { assets } from '../data/assets-array';

const viewMode = ref('list'); // 'grid' | 'list'
// Reactive reference to the currently selected asset
const selectedAsset = ref<Asset | null>(null);

// Called when a row is clicked
function selectAsset(id: number) {
  selectedAsset.value = assets.find((a) => a.id === id) ?? null;
}

// Called when clicked away / deselect
function clearSelection() {
  selectedAsset.value = null;
}
</script>
