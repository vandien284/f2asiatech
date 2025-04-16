<script setup lang="ts">
import { useDataStore } from '@/stores/data'
const dataStore = useDataStore()
const { menus, categories, subCategories, products, banner } = storeToRefs(dataStore)
await dataStore.fetchAllBanner()
await dataStore.fetchAllMenu()
await dataStore.fetchProduct(subCategories.value[0].id ?? 0)
const showModal = ref(false)

const handleShowModal = () => {
  if (window.innerWidth <= 768) { 
    showModal.value = true
  } else {
    showModal.value = false
  }
}

</script>
<template>
    <div class="layout-container top-full">
        <div class="header-nav bg-primary relative">
            <div class="nav-detail max-width pd-container m-auto">
                <NuxtImg @click="handleShowModal" class="cursor-pointer  icon-text" src="/images/icons/icon-navige.svg" alt="logo"/>
                <span class="font-bold fz-lg uppercase color-background">List of item</span>
            </div>
            <ModalMenu :show-modal="showModal" @closeModal="showModal = false"></ModalMenu>
        </div>
        <div class="home-container w-full flex flex-col items-center max-width m-auto pd-container">
            <div class="w-full h-full relative flex items-start">
                <Menu v-if="menus.length > 0" class="hidden md:block"></Menu>
                <Banner></Banner>
            </div>
            <Content></Content>
            <Products :name-cate="subCategories[0].name"></Products>
        </div>
    </div>
</template>