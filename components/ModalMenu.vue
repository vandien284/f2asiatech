<script setup lang="ts">
import { useDataStore } from '@/stores/data'
import type { ICategory } from '~/shared/types/Category'
import type { ISubCategory } from '~/shared/types/SubCategory'
const dataStore = useDataStore()
const { menus, categories, subCategories, products } = storeToRefs(dataStore)
const showCategory = ref(false)
const showSubCase = ref(false)
const newCategory = ref<ICategory[]>([])
const newSubCate = ref<ISubCategory[]>([])
const title = ref("")

const props = defineProps({
  showModal: {
    type: Boolean,
    required: true
  }
})


const handleCategory = (id: number, name: string) => {
    showCategory.value = true
    title.value = name
    newCategory.value = categories.value.filter((item: ICategory) => item.menu_id === id)
}

const handleSubCategory = (id: number, name: string) => {
    showSubCase.value = true
    title.value = name
    newSubCate.value = subCategories.value.filter((item: ISubCategory) => item.category_id === id)
}

const handleReNavigation = (type: string) => {
    if(type == "category") {
        showCategory.value = false
        showSubCase.value = false
    } else {
        showCategory.value = true
        showSubCase.value = false
    }
}

const emit = defineEmits(['closeModal'])

const closeModal = () => {
  emit('closeModal')
}

</script>
<template>
    <div v-if="props.showModal" class="category-container h-full !p-0 fixed top-0 left-0 z-[550] pd-container w-full flex items-center max-width m-auto">
        <div class="background-overlay" @click="closeModal"></div>
        <div class="list-category">
            <div class="category-title w-full flex items-center justify-center">
                <b class="text-title text-center">List of item</b>
            </div>
            <div v-for="item in menus" :key="item.id" class="flex w-full" @click="handleCategory(item.id, item.name ?? '')">
                <div
                    class="item-info flex items-center bg-[#f7f7f7] border-b border-b-[#e1e1e1] border-dotted gap-[12px] w-full px-[1rem] py-[0.7rem]  cursor-pointer">
                    <span class="flex-1 text-start fz-lg">{{ item.name }}</span>
                    <NuxtImg v-if="item.categorys && item.categorys.length > 0" class="rotate-270"
                        src="/images/icons/icon-arrow.svg" alt="arrow" width="17"></NuxtImg>
                </div>
            </div>
            <div v-if="showCategory" class="list-case  w-[18rem] relative h-full gap-0 p-0 flex flex-col">
                <div class="category-title w-full flex items-center gap-2">
                    <NuxtImg @click="handleReNavigation('category')" class="rotate-90" src="/images/icons/icon-arrow.svg" alt="arrow" width="17"></NuxtImg>
                    <span class="fz-lg">{{title}}</span>
                </div>
                <div v-for="item in newCategory" :key="item.id" @click="handleSubCategory(item.id, item.name ?? '')"
                    class="item-info flex items-center bg-[#f7f7f7] border-b border-b-[#e1e1e1] border-dotted gap-[12px] w-full px-[1rem] py-[0.7rem]  cursor-pointer">
                    <span class="flex-1 text-start fz-lg">{{ item.name }}</span>
                    <NuxtImg v-if="item.sub_category && item.sub_category.length > 0" class="rotate-270"
                        src="/images/icons/icon-arrow.svg" alt="arrow" width="17"></NuxtImg>
                </div>
            </div>
            <div v-if="showSubCase" class="list-case list-sub-case  w-[18rem] relative h-full gap-0 p-0 flex flex-col">
                <div class="category-title w-full flex items-center gap-2">
                    <NuxtImg @click="handleReNavigation('sub_cate')" class="rotate-90" src="/images/icons/icon-arrow.svg" alt="arrow" width="17"></NuxtImg>
                    <span class="fz-lg">{{title}}</span>
                </div>
                <div v-for="item in newSubCate" :key="item.id"
                    class="item-info flex items-center bg-[#f7f7f7] border-b border-b-[#e1e1e1] border-dotted gap-[12px] w-full px-[1rem] py-[0.7rem]  cursor-pointer">
                    <span class="flex-1 text-start fz-lg">{{ item.name }}</span>
                </div>
            </div>
            <div class="cate-lang d-none">
                <NuxtImg class="cursor-pointer" src="/images/icons/flag-vi.svg" alt="logo_vi" width="40" height="35" />
                <NuxtImg class="cursor-pointer" src="/images/icons/flag-en.svg" alt="logo_en" width="40" height="35" />
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

.category-container .background-overlay {
    background: #00000080;
}

.background-overlay {
    height: 100%;
    left: 50%;
    position: fixed;
    top: 0;
    transform: translate(-50%);
    width: 100%;
    z-index: -1;
}

.list-category {
    align-items: start;
    flex-direction: column;
    overflow-y: scroll;
    z-index: 2;
}

@media (max-width: 796px) {
    .list-category {
        background: #fff;
        height: 100%;
        max-width: 18rem;
        width: 70%;
    }
}

.list-category,
.list-category .category {
    display: flex;
}

@media (max-width: 796px) {
    .list-category .category-title {
        background: #eee;
        display: flex !important;
        gap: .5rem;
        margin-bottom: .75rem;
        padding: .75rem;
    }
}

@media (max-width: 796px) {
    .list-category .cate-lang {
        display: flex !important;
        gap: .5rem;
        justify-content: center;
        padding: 1rem;
        width: 100%;
    }
}
</style>