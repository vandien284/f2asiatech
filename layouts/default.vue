<script setup lang="ts"></script>
<template>
    <div class="overflow-hidden">
        <Loading></Loading>
        <TheHeader></TheHeader>
        <slot />
        <TheFooter></TheFooter>
    </div>
</template>