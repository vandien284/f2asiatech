<script setup lang="ts">
const dataStore = useDataStore()
const { banner } = storeToRefs(dataStore)
</script>
<template>
    <div class="w-full flex items-center scroll">
        <div v-for="item in banner.filter((item) => item.type == 2)" :key="item.id"
            class="col-10 px-[8px] col-lg-4 col-md-7 col-sm-8 flex justify-center items-center">
            <NuxtImg :src="item.image_url" class="max-w-full" :alt="`content ${item.id}`" @error="item.image_url = '/images/logo-brand.png'" sizes="10vw"></NuxtImg>
        </div>

    </div>
</template>

<style scoped lang="css">
.col-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
}

.scroll {
    overflow-y: hidden;
    overflow-x: auto;
    scrollbar-width: auto !important;
    -ms-overflow-style: auto !important;
}

.scroll::-webkit-scrollbar {
    display: block !important;
    height: 6px;
    bottom: 10px;
}

.scroll::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 10px;
}

@media (min-width: 992px) {
    .col-lg-4 {
        flex: 0 0 auto;
        width: 33.33333333%;
    }
}

@media (min-width: 768px) and (max-width: 991) {
    .col-md-7 {
        flex: 0 0 auto;
        width: 58.33333333%;
    }
}

@media (min-width: 576px) and (max-width: 767) {
    .col-sm-8 {
        flex: 0 0 auto;
        width: 66.66666667%;
    }
}
</style>