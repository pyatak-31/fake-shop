<template>
    <div class="main-layout">
        <NuxtLoadingIndicator color="red" />
        
        <button class="toggle-menu-btn" @click="toggleMenu">1</button>
        
        <layout-sidebar
            class="main-layout__sidebar"
            :isOpenMenu="isOpenMenu"
            @logout="logout"
        />
       
        <main class="main-layout__content">
            <slot />
        </main>
    </div>
</template>

<script lang="ts" >
    export default { name: 'MainLayout' } 
</script>

<script setup lang="ts">
    const { logout } = useAuth();
    
    const isOpenMenu = ref(true);
    const toggleMenu = () => {
        isOpenMenu.value = !isOpenMenu.value;
    };

    
// const nuxtApp = useNuxtApp();
//   const loading = ref(false);
//   nuxtApp.hook("page:start", () => {
//     loading.value = true;
//   });
//   nuxtApp.hook("page:finish", () => {
//     loading.value = false;
//   });
</script>

<style lang="scss">
    .loader {
        position: fixed;
        top: 50%;
        left: 50%;
        width: 300px;
        height: 200px;
    }
    .main-layout {
        position: relative;
        display: flex;
        min-height: 100vh;

        &__sidebar {
            position: relative;
        }

        &__content {
            flex: 1;
            padding: 30px;
            background-color: $main-bg;
            min-height: 150vh;
        }
    }

    .toggle-menu-btn {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
        width: 30px;
        height: 100%;
        background-color: $primary;
    }
</style>