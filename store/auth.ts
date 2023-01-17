import { NuxtError } from 'nuxt/dist/app/composables/error';
import { defineStore } from 'pinia';
import { ResError } from '~~/type/error.interface';
import { Login, LoginRequestData } from '~~/type/login.interface';

export const useAuthStore = defineStore('auth', () => {
    const config = useRuntimeConfig();

    // state
    const token = ref<string | undefined>(useCookie(config.public.ACCESS_TOKEN).value ?? undefined);
    const authError = ref<ResError | undefined>(undefined);
    const isLoading = ref<boolean>(false);
    
    // getters
    const isAuth =  computed<boolean>(() => Boolean(token.value));

    // help
    const clearError = () => { authError.value = undefined };
    const startLoading = () => { isLoading.value = true };
    const completeLoading = () => { isLoading.value = false };
    const addError = (error: unknown) => { authError.value = (error as NuxtError).data.data; };

    // actions
    const login = async (body: LoginRequestData) => {
        startLoading();
        try {
            const data = await $fetch<Login>(`/api/auth/login`, {
                method: 'POST',
                body
            });
            token.value = data.token;
            clearError();
        } catch(error) {
            addError(error);
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
        } catch (error) {
            addError(error);
        } finally {
            completeLoading();
        }
    }; 

    const logout = async () => {
        try {
            const data = await $fetch(`/api/auth/logout`);
            token.value = undefined;
            clearError();
        } catch (error) {
            addError(error);
        }
    };

    return { token, authError, isLoading, isAuth, login, logout, refresh };
});
