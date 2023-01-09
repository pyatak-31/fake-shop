<template>
    <div class="main-layout">
        <NuxtLoadingIndicator />
        
        <layout-navigation />
        
        <main class="main-layout__content">
            <slot />
        </main>
    </div>
</template>

<script lang="ts" >
    export default {
        name: 'MainLayout',
    } 
</script>

<script setup lang="ts">

</script>

<style lang="scss">
    .main-layout {}
</style>