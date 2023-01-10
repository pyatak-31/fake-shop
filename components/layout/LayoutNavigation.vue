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
        {
            name: 'Login',
            to: '/login',
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

<style lang="scss">
    .main-nav {
        position: sticky;
        top: 0;
        padding: 30px;
        background-color: rgb(227, 238, 233);

        &__list {
            display: flex;
            flex-direction: column;
            gap: 15px;
            margin-top: 30px;
        }

        &__link {
            @include font($dark, 20px, 23px, 400);
            transition: color $transition;

            &.nuxt-link-active {
                color: $primary;
            }

            &--logout {
                color: red;
                border: none;
            }
        }
    }
</style>