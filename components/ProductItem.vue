<script setup lang="ts">
import type { IProduct } from "@/shared/types/Product"
interface Props {
    item: IProduct
}
const props = defineProps<Props>()

const imageSrc = ref(props.item.image_url);

const handleImageError = () => {
  imageSrc.value = '/images/logo-brand.png';
};

</script>
<template>
    <div
        class="bg-[#fff] border border-solid border-[#dee2e6] round-[8px] flex flex-col gap-[0.6rem] p-[0.65rem] w-full cursor-pointer">
        <div class="h-fit overflow-hidden relative w-full">
            <div class="item-function ">
                <div class="item-img">
                    <NuxtImg :src="imageSrc" :alt="props.item.name" loading="lazy" @error="handleImageError"></NuxtImg>
                </div>
            </div>
            <div class="flex items-center justify-center bottom-0 p-[0.25rem] absolute right-0 w-fit">
                <div
                    class="flex items-center justify-center cursor-pointer h-[2.1rem] w-[2.1rem] bg-[#ca2628] rounded-full">
                    <NuxtImg src="/images/icons/icon-cart.svg" alt="cart" width="30" height="30" class="icon-white p-[.35rem]"
                        loading="lazy"></NuxtImg>
                </div>
            </div>
        </div>
        <div class="flex flex-col justify-between min-h-[4.5rem] w-full item-info">
            <span class="fx-lg font-bold">{{ props.item.name }}</span>
            <div>
                <span class="!text-[#ca2628] font-bold">{{ formatVNDNumber(props.item.price ?? "0") }}</span>
                <span class="!text-[#ca2628]"> /{{ props.item.unit }}</span>
            </div>
        </div>
    </div>
</template>
<style scopped lang="css">
.item-function {
    display: flex;
    height: -moz-fit-content;
    height: fit-content;
    overflow: hidden;
    padding-top: 100%;
    position: relative;
    width: 100%;
}

.item-img {
    display: flex;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
}

.item-img img {
    height: 100%;
    left: 0;
    -o-object-fit: cover;
    object-fit: contain;
    top: 0;
    transition: all .7s;
    width: 100%;
}

.item-img img:hover {
    scale: 1.1;
}
.item-info:hover span {
    color: #ca2628;
}
</style>