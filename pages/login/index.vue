<template>
    <page-card>
        <form
            class="form"
            @submit.prevent
        >
            <form-input
                id="name"
                label="Имя пользователя"
                type="text"
                placeholder="Введите имя"
                v-model="data.username"
                
            />
        </form>
        <button @click="submit">2123</button>
        <p>{{ authStore.token }}</p>
        <p>{{  authStore.error }}</p>
        <p>{{ authStore._obj }}</p>
    </page-card>
</template>

<script lang="ts">
    definePageMeta({
        layout: "empty",
    });
</script>

<script setup lang="ts">
    import { useAuthStore } from '@/store/auth';

    const authStore = useAuthStore();

    await authStore.login({
            username: "mor_2314",
            password: "83r5^_"
        });
    
    const data = ref({
        username: '',
        password: '',
    });
    
    const submit = async () => {
        // const res = await useFetch('/api/products')
        // console.log(res.data);
        // const { data } = await useAsyncData('authStore.login', () => authStore.login({ username: '', password: ''}))
        await authStore.login({
            username: "mor_2314",
            password: "83r5^_"
        });
    };
</script>

<style lang="scss">
    
</style>