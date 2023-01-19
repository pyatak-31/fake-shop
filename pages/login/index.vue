<template>
   
        <NuxtLayout name="empty" >
            <page-card>
                <ui-title rank="1">
                    Войти
                </ui-title>

                <form
                    class="form login__form"
                    @submit.prevent="login"
                >
                    <ui-input
                        id="email"
                        type="text"
                        class="form__el"
                        label="Email"
                        placeholder="Введите email"
                        required
                        v-model="data.email"
                    />

                    <ui-input
                        id="password"
                        type="password"
                        class="form__el"
                        label="Пароль"
                        placeholder="Введите пароль"
                        required
                        v-model="data.password"
                    />

                    <span v-if="hasError">
                        {{ error }}
                    </span>
                    
                    <ui-button
                        type="submit"
                        class="form__submit-btn"
                        theme="light"
                        :disabled="isEmptyData"
                    >
                        <template #left-icon>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.53341 12.4668C5.40008 12.3335 5.33341 12.2002 5.33341 12.0002C5.33341 11.8002 5.40008 11.6668 5.53341 11.5335L9.06675 8.00016L5.53341 4.46683C5.26675 4.20016 5.26675 3.80016 5.53341 3.5335C5.80008 3.26683 6.20008 3.26683 6.46675 3.5335L10.4667 7.5335C10.7334 7.80016 10.7334 8.20016 10.4667 8.46683L6.46675 12.4668C6.20008 12.7335 5.80008 12.7335 5.53341 12.4668Z"/>
                            </svg>
                        </template>
                        Отправить
                    </ui-button>

                    <ui-button
                        theme="dark"
                        size="default"
                        outline
                        rounded
                        @on-click="log"
                    >
                        <template #left-icon>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.53341 12.4668C5.40008 12.3335 5.33341 12.2002 5.33341 12.0002C5.33341 11.8002 5.40008 11.6668 5.53341 11.5335L9.06675 8.00016L5.53341 4.46683C5.26675 4.20016 5.26675 3.80016 5.53341 3.5335C5.80008 3.26683 6.20008 3.26683 6.46675 3.5335L10.4667 7.5335C10.7334 7.80016 10.7334 8.20016 10.4667 8.46683L6.46675 12.4668C6.20008 12.7335 5.80008 12.7335 5.53341 12.4668Z"/>
                            </svg>
                        </template>
                        выв
                    </ui-button>
                
                <span v-if="isLoading">Loading...</span>
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

    const { data, isLoading, error, hasError, isEmptyData, login } = useAuth();
    const log = () => {
        data.value = {
            email: 'oleg@mail.ru',
            password: '123456',
        }
    }
</script>

<style lang="scss">
    .form {

        &__el {
            & + & {
                margin-top: 18px;
            }
        }

        &__submit-btn {
            margin-top: 30px;
        }
    }


</style>