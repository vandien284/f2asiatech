<script setup lang="ts">
import { useDataStore } from '@/stores/data'
import type { ICategory } from '~/shared/types/Category'
import type { ISubCategory } from '~/shared/types/SubCategory'
const dataStore = useDataStore()
const { menus, categories, subCategories, products } = storeToRefs(dataStore)
interface Props {
  nameCate: string | undefined
}

const props = defineProps<Props>()
</script>
<template>
    <div class="w-full py-[0.65rem] px-[1rem] flex flex-col gap-[1rem]">
        <span  class="subcate-name fz-xxl text-[#212529] font-bold">{{ props.nameCate }}</span>
        <div class="grid auto-rows-auto gap-[0.75rem] h-fit xl:grid-cols-5 lg:grid-cols-4 grid-cols-2">
            <ProductItem v-for="item in products" :key="item.id" :item="item"></ProductItem>
        </div>
        <div class="btn-seemore relative flex items-center justify-center cursor-pointer">
            <div class="bg-[#fff] px-[1rem] relative w-fit ">
                <p class="bg-[#ca2628] !text-[#fff] min-w-[9rem] w-fit gap-[0.5rem] h-[2.75rem] min-h-[38px] px-[1rem] text-center flex justify-center items-center rounded-[100px]">See all</p>
            </div>
        </div>
    </div>
</template>
<style scoped>
.btn-seemore:before {
    background-color: #dee2e6;
    content: "";
    height: 1px;
    position: absolute;
    width: 100%;
}
.btn-seemore p:hover{
    filter: brightness(1.05);
}
</style>