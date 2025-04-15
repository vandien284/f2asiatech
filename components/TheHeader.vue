<script lang="ts">

</script>
<template>
    <div class="header-container">
        <div class="header-content w-full max-width pd-container gap-[1rem] h-full flex items-center justify-between">
            <div class="img-brand select-none">
                <NuxtLink href="/"> <img class="cursor-pointer" src="/assets/images/logo-brand.png" /></NuxtLink>
            </div>
            <div class="header-find">
                <div class="group-find">
                    <input type="text" class="style-input fz-lg" placeholder="Key search">
                    <img class="cursor-pointer" src="/assets/images/icons/icon-find.svg" alt="logo" loading="lazy">
                </div>
            </div>
            <div class="header-hotline select-none">
                <img class="icon-primary cursor-pointer" src="/assets/images/icons/icon-hotline.svg" alt="logo" loading="lazy">
                <span class="span-hotline gap-1 flex flex-col cursor-pointer">
                    <span class="fz-md font-bold">Hotline</span>
                    <span class="fz-md font-bold">1900 066 890</span>
                </span>
            </div>
            <div class="header-user select-none">
                <img class="cursor-pointer icon-primary" src="/assets/images/icons/icon-user.svg" alt="logo" loading="lazy">
                <span class="span-user gap-1 flex flex-col cursor-pointer"><span class="fz-md font-bold">Hi,</span>
                    <span class="fz-md font-bold">Login</span></span>
            </div>
            <div class="header-right select-none">
                <div class="btn-cart p-1 cursor-pointer">
                    <img class="icon-primary" src="/assets/images/icons/icon-cart.svg" alt="logo" loading="lazy">
                </div>
                <div class="header-lang">
                    <img class="cursor-pointer" src="/assets/images/icons/flag-vi.svg" alt="logo" loading="lazy">
                    <img class="cursor-pointer" src="/assets/images/icons/flag-en.svg" alt="" loading="lazy">
                </div>
            </div>
        </div>
    </div>
</template>