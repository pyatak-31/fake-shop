<template>
    <nav class="main-nav">
        <ul class="main-nav__list">
            <li
                class="main-nav__item"
                v-for="link in links"
                :key="link.to"    
            >
                <nuxt-link
                    class="main-nav__link"
                    :class="{ 'active': isParent(link.to) }"
                    :to="link.to"
                    no-prefetch
                    :exact="isMainPage(link.to)"
                >
                    {{ link.name }}
                </nuxt-link>   
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
    const links = [
        {
            name: 'Главная',
            to: '/',
        },
        {
            name: 'Товары',
            to: '/products',
        },
    ];

    const route = useRoute()
    const id = route.params.id;

    const isMainPage = (routeItem: string) => {
        return routeItem === '/';
    }

    const isParent = (routeItem: string) => {
        if (routeItem === '/') {
            return false;
        } else if (route.fullPath.includes(routeItem)) {
            return true;
        }
    };
</script>

<style scoped>

</style>