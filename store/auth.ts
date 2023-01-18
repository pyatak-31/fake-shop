import { defineStore } from 'pinia';
import { LoginRequestData } from '~~/type/auth.interface';

export const useAuthStore = defineStore('auth', () => {
    const { error, errorMessage, isLoading, hasError, baseAsyncAction } = useStore();
    const config = useRuntimeConfig();

    // state
    const token = ref<string | undefined>(useCookie(config.public.ACCESS_TOKEN).value ?? undefined);
    
    // getters
    const isAuth =  computed<boolean>(() => Boolean(token.value));

    const login = async (body: LoginRequestData) => {
        await baseAsyncAction(async () => {
            const data = await $fetch(`/api/auth/login`, {
                method: 'POST',
                body
            });
            token.value = data.idToken;
        });
    };

    const refresh = async () => {
        await baseAsyncAction(async () => {
            const data = await $fetch(`/api/auth/refresh`, {
                method: 'POST',
                body: {
                    refresh_token: useCookie(config.public.REFRESH_TOKEN).value
                }
            });
            
            token.value = data[config.public.ACCESS_TOKEN];
        });
    };

    const logout = async () => {
        await baseAsyncAction(async () => {
            const data = await $fetch(`/api/auth/logout`);
            token.value = undefined;
        });
    };

    return { token, error, errorMessage, isLoading, isAuth, hasError, login, logout, refresh };
});
