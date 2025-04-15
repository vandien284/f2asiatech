<template>
    <div class="w-full flex items-center scroll">
        <div class="col-10 px-[8px] col-lg-4 col-md-7 col-sm-8">
            <img src="/assets/images/banner3_1.webp" class="max-w-full" alt="">
        </div>
        <div class="col-10 px-[8px] col-lg-4 col-md-7 col-sm-8">
            <img src="/assets/images/banner3_3.webp" class="max-w-full" alt="">
        </div>
        <div class="col-10 px-[8px] col-lg-4 col-md-7 col-sm-8">
            <img src="/assets/images/banner3_2.webp" class="max-w-full" alt="">
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

@media (min-width: 992px)  {
    .col-lg-4 {
        flex: 0 0 auto;
        width: 33.33333333%;
    }
}

@media (min-width: 768px) and (max-width: 991){
    .col-md-7 {
        flex: 0 0 auto;
        width: 58.33333333%;
    }
}

@media (min-width: 576px) and (max-width: 767){
    .col-sm-8 {
        flex: 0 0 auto;
        width: 66.66666667%;
    }
}
</style>