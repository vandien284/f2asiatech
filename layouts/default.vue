<script setup lang="ts">
import ModalMenu from '~/components/ModalMenu.vue';

</script>
<template>
    <div class="overflow-hidden">
        <Loading></Loading>
        <TheHeader></TheHeader>
        <slot />
        <TheFooter></TheFooter>
        
    </div>
</template>