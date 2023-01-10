<template>
    <div class="main-layout">
        <NuxtLoadingIndicator />
        
        <aside class="main-sidebar main-layout__sidebar">
            <layout-navigation />
        </aside>
        
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
    .main-layout {
        display: grid;
        grid-template-columns: minmax(300px, 500px) minmax(700px, 1fr);
        min-height: 100vh;

        &__sidebar {
            position: relative;
            background-color: $white;
            box-shadow: 0 0 15px -15px $dark;
        }

        &__content {
            padding: 30px;
            background-color: $main-bg;
            min-height: 150vh;
        }
    }
</style>