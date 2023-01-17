<template>
    <div>
        <!-- <NuxtLayout name="error" v-if="error">
            {{ error }}
        </NuxtLayout> -->
        <span v-if="isError">
            {{ error }}
        </span>

    <NuxtLayout name="empty" >
    <page-card>
        <form
            class="form"
            @submit.prevent
        >
            <form-input
                id="email"
                label="Email"
                type="text"
                placeholder="Введите email"
                v-model="data.email"
            />

            <form-input
                id="password"
                label="Пароль"
                type="password"
                placeholder="Введите пароль"
                v-model="data.password"
            />
        </form>

        <span v-if="authStore.isLoading">Loading...</span>

        <button @click="submit">2123</button>
        <p>{{ authStore.token }}</p>
        <!-- <p>{{  error }}</p> -->
       
    </page-card>
    </NuxtLayout>
</div>
</template>

<script setup lang="ts">
    import { useAuthStore } from '@/store/auth';
    definePageMeta({
        // layout: "empty",
        layout: false,
        middleware: ["auth"]
    });

    const authStore = useAuthStore();
    const error = computed(() => authStore.error);
    const isError = computed(() => authStore.isError);
    // console.log(error.value?.message);

    const data = ref({
        email: 'oleg@mail.ru',
        password: '123456',
    });
    
    const submit = async () => {
        await authStore.login(data.value);
        // if (error) {
        //     clearError({ redirect: '/login' })
        // }
    };
</script>

<style lang="scss">
    
</style>