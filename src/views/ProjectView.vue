
<template>
  <div class="p-6">
    <h1 class="text-xl font-semibold mb-4">Project View</h1>

      <div class="p-6 bg-green-500 text-white">
    Tailwind is working 🎉
  </div>

    <AssetView :assets="assets" />
  </div>





</template>

<script setup lang="ts">
import AssetView from '../components/AssetView.vue';
import { assets } from '../data/assets-array';
</script>
