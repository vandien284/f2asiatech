<script setup lang="ts">
import { useDataStore } from '@/stores/data'
import type { ICategory } from '~/shared/types/Category'
import type { ISubCategory } from '~/shared/types/SubCategory'
const dataStore = useDataStore()
const { menus, categories, subCategories, products } = storeToRefs(dataStore)
const selectMenu = ref(0)
const selectCate = ref(0)
const showCategory = ref(false)
const showSubCase = ref(false)
const newCategory = ref<ICategory[]>([])
const newSubCate = ref<ISubCategory[]>([])

const handleShowCategory = (id: number) => {
    const filtered = categories.value.filter((item: ICategory) => item.menu_id === id)

    if (selectMenu.value === id && showCategory.value) {
        showCategory.value = false
        showSubCase.value = false
        selectMenu.value = 0
        return
    }

    showCategory.value = true
    selectMenu.value = id

    if (JSON.stringify(newCategory.value) !== JSON.stringify(filtered)) {
        showSubCase.value = false
        selectCate.value = 0
    } else if (selectCate.value !== 0) {
        handleShowSubCategory(selectCate.value)
    }

    newCategory.value = filtered
}

const handleShowSubCategory = (id: number) => {
    showSubCase.value = true
    selectCate.value = id
    newSubCate.value = subCategories.value.filter((item: ISubCategory) => item.category_id === id)
}

</script>
<template>
    <div class="w-fit h-full flex flex-col pr-[5px]">
        <div v-for="item in menus" :key="item.id" class="flex w-fit">
            <div @click="handleShowCategory(item.id)"
                class="item-info flex items-center bg-[#f7f7f7] border-b border-b-[#e1e1e1] border-dotted gap-[12px] xl:w-[22rem] lg:w-[18rem] md:w-[14rem] px-[1rem] py-[0.5rem]  cursor-pointer">
                <span :class="['flex-1', 'text-start', 'fz-lg', { active: selectMenu === item.id }]">{{ item.name
                }}</span>
                <NuxtImg v-if="item.categorys && item.categorys.length > 0" class="rotate-270"
                    src="/images/icons/icon-arrow.svg" alt="arrow"></NuxtImg>
            </div>
        </div>
        <div v-if="showCategory"
            class="list-case  !left-[22rem] xl:!left-[22rem] lg:!left-[18rem] md:!left-[14rem] xl:w-[20rem] lg:w-[16rem] md:w-[12rem] relative h-full gap-0 p-0 flex flex-col">
            <div v-for="item in newCategory" :key="item.id" @click="handleShowSubCategory(item.id)"
                class="item-info flex items-center bg-[#f7f7f7] border-b border-b-[#e1e1e1] border-dotted gap-[12px] w-full px-[1rem] py-[0.5rem]  cursor-pointer">
                <span :class="['flex-1', 'text-start', 'fz-lg', { active: selectCate === item.id }]">{{ item.name
                }}</span>
                <NuxtImg v-if="item.sub_category && item.sub_category.length > 0" class="rotate-270"
                    src="/images/icons/icon-arrow.svg" alt="arrow"></NuxtImg>
            </div>
        </div>
        <div v-if="showSubCase"
            class="list-case list-sub-case !left-[42rem] xl:w-[20rem] lg:w-[16rem] md:w-[12rem] xl:!left-[42rem] lg:!left-[34rem] md:!left-[26rem]  relative h-full gap-0 p-0 flex flex-col">
            <div v-for="item in newSubCate" :key="item.id"
                class="item-info  gap-[12px] w-full px-[1rem] py-[0.5rem]  cursor-pointer">
                <span class="flex-1 text-start fz-lg font-bold">{{ item.name }}</span>
            </div>
        </div>
    </div>
</template>
<style scoped lang="css">
.item-info:hover span {
    color: #ca2628;
}

.list-case {
    background-color: #fff;
    box-shadow: 1px 2px 10px -2px #bebebe;
    position: absolute;
    top: 0;
    transition: all .2s;
    z-index: 100;
}

.list-sub-case {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: auto !important;
    -ms-overflow-style: auto !important;
}

.list-sub-case::-webkit-scrollbar {
    display: block !important;
    width: 6px;
}

.list-sub-case::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 4px;
}
</style>