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

      <div class="grid grid-cols-4">
        <div class="col-span-3 bg-white">
          <h3 class="font-semibold text-xl m-5">Astute Manager Pro Projects</h3>
          <div class="m-5 border-b flex justify-between h-12">
            <div class="flex items-end">
              <button class="btn-primary uppercase mr-2 tab-buttons">
                active projects
              </button>
              <button class="btn-primary uppercase btn_grey-out tab-buttons">
                archived projects
              </button>
            </div>
            <div>
              <button class="btn-primary flex gap-2">
                <svg
                  class="size-5 mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  <path
                    d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM296 408L296 344L232 344C218.7 344 208 333.3 208 320C208 306.7 218.7 296 232 296L296 296L296 232C296 218.7 306.7 208 320 208C333.3 208 344 218.7 344 232L344 296L408 296C421.3 296 432 306.7 432 320C432 333.3 421.3 344 408 344L344 344L344 408C344 421.3 333.3 432 320 432C306.7 432 296 421.3 296 408z"
                  />
                </svg>
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
            <button class="btn-primary flex gap-2">
              <svg
                class="size-5 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
              >
                <path
                  d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM296 408L296 344L232 344C218.7 344 208 333.3 208 320C208 306.7 218.7 296 232 296L296 296L296 232C296 218.7 306.7 208 320 208C333.3 208 344 218.7 344 232L344 296L408 296C421.3 296 432 306.7 432 320C432 333.3 421.3 344 408 344L344 344L344 408C344 421.3 333.3 432 320 432C306.7 432 296 421.3 296 408z"
                />
              </svg>
              New Folder
            </button>
            <button class="btn-primary flex gap-2">
              <svg
                class="size-5 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
              >
                <path
                  d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM296 408L296 344L232 344C218.7 344 208 333.3 208 320C208 306.7 218.7 296 232 296L296 296L296 232C296 218.7 306.7 208 320 208C333.3 208 344 218.7 344 232L344 296L408 296C421.3 296 432 306.7 432 320C432 333.3 421.3 344 408 344L344 344L344 408C344 421.3 333.3 432 320 432C306.7 432 296 421.3 296 408z"
                />
              </svg>
              Upload files
            </button>
            <button
              class="btn-primary bg-white !text-gray-400 border-solid border-2 border-black-500 rounded-full flex gap-2"
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

          <!-- filer bar grid -->

          <div
            class="grid grid-cols-[120px_2fr_60px_60px_200px] items-center px-5 py-1 border-b text-sm text-gray-600"
          >
            <input type="checkbox" class="justify-self-start" />
            <span class="font-medium">File name</span>
            <span>Kind</span>
            <span>Size</span>
            <span>Added / Modified</span>
          </div>

          <AssetView
            :assets="assets"
            :view-mode="viewMode"
            @select="selectAsset"
            @clear="clearSelection"
          />
        </div>

        <div class="col-span-1">
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
