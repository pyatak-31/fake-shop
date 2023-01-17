import { defineStore } from 'pinia';
import { LoginRequestData } from '~~/type/auth.interface';

export const useAuthStore = defineStore('auth', () => {
    const { error, isLoading, isError, clearError, startLoading, completeLoading, addError } = useStore();
    const config = useRuntimeConfig();

    // state
    const token = ref<string | undefined>(useCookie(config.public.ACCESS_TOKEN).value ?? undefined);
    
    // getters
    const isAuth =  computed<boolean>(() => Boolean(token.value));

    // actions
    const login = async (body: LoginRequestData) => {
        startLoading();
        try {
            const data = await $fetch(`/api/auth/login`, {
                method: 'POST',
                body
            });
            token.value = data.idToken;
            clearError();
        } catch(resError) {
            addError(resError);
        } finally {
            completeLoading();
        }
    };
    
    const refresh = async () => {
        startLoading();
        try {
            const data = await $fetch(`/api/auth/refresh`, {
                method: 'POST',
                body: {
                    refresh_token: useCookie(config.public.REFRESH_TOKEN).value
                }
            });
            // console.log(data);
            token.value = data[config.public.ACCESS_TOKEN];
            clearError();
        } catch (resError) {
            addError(resError);
        } finally {
            completeLoading();
        }
    }; 

    const logout = async () => {
        try {
            const data = await $fetch(`/api/auth/logout`);
            token.value = undefined;
            clearError();
        } catch (resError) {
            addError(resError);
        }
    };

    return { token, error, isLoading, isAuth, isError, login, logout, refresh };
});
