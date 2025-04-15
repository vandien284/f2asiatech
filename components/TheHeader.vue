<script lang="ts">

</script>
<template>
    <div class="header-container">
        <div class="header-content w-full max-width pd-container gap-[1rem] h-full flex items-center justify-between">
            <div class="img-brand select-none">
                <NuxtLink href="/"> <img class="cursor-pointer" src="/images/logo-brand.png" /></NuxtLink>
            </div>
            <div class="header-find">
                <div class="group-find">
                    <input type="text" class="style-input fz-lg" placeholder="Key search">
                    <NuxtImg class="cursor-pointer" src="/images/icons/icon-find.svg" alt="logo" loading="lazy"></NuxtImg>
                </div>
            </div>
            <div class="header-hotline select-none">
                <NuxtImg class="icon-primary cursor-pointer" src="/images/icons/icon-hotline.svg" width="33" height="33" alt="logo" loading="lazy"></NuxtImg>
                <span class="span-hotline gap-1 flex flex-col cursor-pointer">
                    <span class="fz-md font-bold">Hotline</span>
                    <span class="fz-md font-bold">1900 066 890</span>
                </span>
            </div>
            <div class="header-user select-none">
                <NuxtImg class="cursor-pointer icon-primary" src="/images/icons/icon-user.svg" alt="logo" loading="lazy"></NuxtImg>
                <span class="span-user gap-1 flex flex-col cursor-pointer"><span class="fz-md font-bold">Hi,</span>
                    <span class="fz-md font-bold">Login</span></span>
            </div>
            <div class="header-right select-none">
                <div class="btn-cart p-1 cursor-pointer">
                    <NuxtImg class="icon-primary" src="/images/icons/icon-cart.svg" alt="logo" loading="lazy" width="33" height="33"></NuxtImg>
                </div>
                <div class="header-lang">
                    <NuxtImg class="cursor-pointer" src="/images/icons/flag-vi.svg" alt="logo" loading="lazy"></NuxtImg>
                    <NuxtImg class="cursor-pointer" src="/images/icons/flag-en.svg" alt="logo" loading="lazy"></NuxtImg>
                </div>
            </div>
        </div>
    </div>
</template>