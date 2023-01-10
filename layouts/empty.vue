<template>
    <div class="empty-layout">

        <slot />
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
    $bg: $main-bg;

    .empty-layout {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        background-color: $bg;
    }
</style>