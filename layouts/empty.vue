<template>
    <div class="empty-layout">

        <slot />
    </div>
</template>

<script lang="ts">
    export default { name: 'empty' }
</script>

<script setup lang="ts">
    // onBeforeMount(() => {
    //     console.log(123);
    // });
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