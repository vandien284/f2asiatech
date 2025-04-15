<script setup lang="ts">
import { useLoadingStore } from "@/stores/loading";
const loadingStore = useLoadingStore();
</script>

<template>
  <div class="bg-loader" v-if="loadingStore.load">
    <div class="w-full h-full flex justify-center items-center">
      <NuxtImg src="/images/logo-brand.png" sizes="10vw" alt="logo"></NuxtImg>
    </div>
  </div>
</template>

<style scoped>
.bg-loader {
  background: white;
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 99999999;
}
</style>
