<template>
    <Transition name="main-sidebar">
        <aside
            class="main-sidebar"  
            v-if="isOpenMenu"
        >
            <layout-navigation @logout="logout" />
        </aside>
    </Transition>
</template>

<script setup lang="ts">
    interface Sidebar {
        isOpenMenu: boolean;
    }
    const props = defineProps<Sidebar>();

    const emits = defineEmits<{
        (e: 'logout'): void
    }>();
    const logout = () => {
        emits('logout');
    }
</script>

<style lang="scss">
    $width: 300px;

    .main-sidebar {
        width: $width;
        background-color: $white;
        box-shadow: 0 0 15px -15px $dark;
        will-change: width;
    }

    .main-sidebar-enter-active {
        animation: main-sidebar 0.5s;
    }
    .main-sidebar-leave-active {
        animation: main-sidebar 0.5s reverse;
    }
    @keyframes main-sidebar {
        0% {
            width: 0px;
            overflow: hidden;
        }
        100% {
            width: $width;
        }
    }
</style>