import jwtDecode from "jwt-decode";
import { useAuthStore } from '@/store/auth';
import { DecodeToken } from "~~/type/auth.interface";

const isValid = (token: string) => {
    const jwtData = jwtDecode<DecodeToken>(token) || {};
    const expires = jwtData.exp || 0;
    return (new Date().getTime() / 1000) < expires
}

export default defineNuxtRouteMiddleware(async (to, from) => {
    const authStore = useAuthStore();
       
    if (to.path !== '/login' && authStore.isAuth) {
        await authStore.refresh();
        if (!isValid(authStore.token!)) {
            await authStore.refresh();
        }
    } else if (to.path !== '/login' && !authStore.isAuth) {
        return navigateTo('/login');
    } else if (to.path === '/login' && authStore.isAuth) {
        if (isValid(authStore.token!)) {
            return navigateTo('/');
        } else {
            await authStore.refresh();
        }
    } else {
        return true;
    }
});
