<script setup>
import { useKeenSlider } from 'keen-slider/vue.es'
import { useDataStore } from '@/stores/data'
const dataStore = useDataStore()
const { banner } = storeToRefs(dataStore)
const current = ref(0)
const dotHelper = ref(null)

const [container, slider] = useKeenSlider(
    {
        loop: true,
        initial: current.value,
        slideChanged: (s) => {
            current.value = s.track.details.rel
        },
    },
    [
        (slider) => {
            let timeout
            let mouseOver = false
            function clearNextTimeout() {
                clearTimeout(timeout)
            }
            function nextTimeout() {
                clearTimeout(timeout)
                if (mouseOver) return
                timeout = setTimeout(() => {
                    slider.next()
                }, 2000)
            }
            slider.on("created", () => {
                slider.container.addEventListener("mouseover", () => {
                    mouseOver = true
                    clearNextTimeout()
                })
                slider.container.addEventListener("mouseout", () => {
                    mouseOver = false
                    nextTimeout()
                })
                nextTimeout()
            })
            slider.on("dragStarted", clearNextTimeout)
            slider.on("animationEnded", nextTimeout)
            slider.on("updated", nextTimeout)
            dotHelper.value = slider ? [...Array(slider.slides.length).keys()] : []
        },
    ]
)

const handleImageError = () => {
  imageSrc.value = '/images/logo-brand.png';
};
onMounted(() => {
    if (slider) {
        loading().stop()
    }
})
</script>
<template>
    <div class="flex-1 min-w-0">
        <div class="w-full justify-center flex flex-wrap relative overflow-hidden">
            <div class="keen-slider pt-[12px]" ref="container">
                <div v-for="item in banner.filter((item) => item.type == 1)" :key="item.id"
                    :class="`banner-image keen-slider__slide number-slide${item.id} w-full flex justify-center items-center`">
                    <NuxtImg :src="item.image_url" :alt="`banner ${id}`" @error="item.image_url = '/images/logo-brand.png'" sizes="10vw"></NuxtImg>
                </div>
            </div>
            <div class="w-full">
                <button type="button" @click="slider.prev()" name="prev" class="btn-slide left-[10px]"
                    aria-label="prev">
                    <NuxtImg src="/images/icons/icon-arrow.svg" alt="prev " class="rotate-90 icon-white"></NuxtImg>
                </button>

                <button type="button" @click="slider.next()" name="next" class="btn-slide right-[10px]"
                    aria-label="next">
                    <NuxtImg src="/images/icons/icon-arrow.svg" alt="next" class="rotate-270 icon-white"></NuxtImg>
                </button>
            </div>
            <div v-if="slider" class="dots">
                <button v-for="(_slide, idx) in dotHelper" @click="slider.moveToIdx(idx)"
                    :class="{ dot: true, active: current === idx }" :key="idx"></button>
            </div>
        </div>
    </div>
</template>
<style lang="css" scoped>
.banner-image img {
    max-width: 100%;
}
.dots {
    display: flex;
    padding: 10px 0;
    justify-content: center;
    position: absolute;
    bottom: 0;
}

.dot {
    border: none;
    width: 10px;
    height: 10px;
    background: #00000080;
    border-radius: 50%;
    margin: 0 5px;
    padding: 5px;
    cursor: pointer;

}

.dot:focus {
    outline: none;
}

.dot.active {
    background: #ffffff;
}

.btn-slide {
    background: #00000080;
    border: none;
    color: #fff;
    cursor: pointer;
    padding-inline: 12px;
    padding-block: 15px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
}
</style>