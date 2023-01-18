<template>
   
        <NuxtLayout name="empty" >
            <span v-if="hasError">
                {{ error }}
            </span>
            <page-card>
                <text-title rank="6">
                    Войти
                </text-title>

                <form
                    class="login-form login__form"
                    @submit.prevent="login"
                >
                    <form-input
                        id="email"
                        type="text"
                        class="login-form__input"
                        label="Email"
                        placeholder="Введите email"
                        required
                        v-model="data.email"
                    />

                    <form-input
                        id="password"
                        type="password"
                        class="login-form__input"
                        label="Пароль"
                        placeholder="Введите пароль"
                        required
                        v-model="data.password"
                    />
                    <span v-if="isLoading">Loading...</span>
                    <button type="submit">2123</button>
                </form>
            </page-card>

             <!-- <NuxtLayout name="error" v-if="error">
            {{ error }}
        </NuxtLayout> -->
        </NuxtLayout>
    
</template>

<script lang="ts">export default { name: 'LoginPage' }</script>

<script setup lang="ts">
    import {} from "#app";
    definePageMeta({
        layout: false,
        middleware: ["auth"]
    });

    const { data, isLoading, error, hasError, login } = useAuth();
</script>

<style lang="scss">
    .form {

    }
</style>