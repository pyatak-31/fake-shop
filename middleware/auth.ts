import jwtDecode from "jwt-decode";
import { useAuthStore } from '@/store/auth';

export default defineNuxtRouteMiddleware(async (to, from) => {
    interface MyToken {
        name: string;
        exp: number;
    }

    const authStore = useAuthStore();
   
    const isValid = (token:any) => {
        const jwtData = jwtDecode<MyToken>(token) || {};
        const expires = jwtData.exp || 0;
        return (new Date().getTime() / 1000) < expires
    }
    
    if (to.path !== '/login' && authStore.isAuth) {
        await authStore.refresh();
        if (!isValid(authStore.token)) {
            await authStore.refresh();
        }
    } else if (to.path !== '/login' && !authStore.isAuth) {
        return navigateTo('/login');
    } else if (to.path === '/login' && authStore.isAuth) {
        if (isValid(authStore.token)) {
            return navigateTo('/');
        } else {
            await authStore.refresh();
        }
    } else {
        return true;
    }
});
