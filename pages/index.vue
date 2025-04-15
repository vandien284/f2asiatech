<script setup lang="ts">
import { useDataStore } from '@/stores/data'
const dataStore = useDataStore()
const { menus, categories, subCategories, products } = storeToRefs(dataStore)
await dataStore.fetchAllMenu()
await dataStore.fetchProduct(subCategories.value[0].id ?? 0)
</script>
<template>
    <div class="layout-container top-full">
        <div class="header-nav bg-primary relative">
            <div class="nav-detail max-width pd-container m-auto">
                <img class="cursor-pointer  icon-text" src="/assets/images/icons/icon-navige.svg" alt="">
                <span class="font-bold fz-lg uppercase color-background">List of item</span>
            </div>
        </div>
        <div class="home-container w-full flex flex-col items-center max-width m-auto pd-container">
            <div class="w-full h-full relative flex items-start">
                <Menu v-if="menus.length > 0" class="hidden md:block"></Menu>
                <Banner></Banner>
            </div>
            <Content></Content>
            <Products></Products>
        </div>
    </div>
</template>