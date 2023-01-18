import { useAuthStore } from '@/store/auth';
import { isValidToken } from "~~/use/isValidToken";

export default defineNuxtRouteMiddleware(async (to, from) => {
    const authStore = useAuthStore();
       
    if (to.path !== '/login' && authStore.isAuth) {
        if (!isValidToken(authStore.token!)) {
            await authStore.refresh();
        }
    } else if (to.path !== '/login' && !authStore.isAuth) {
        return navigateTo('/login');
    } else if (to.path === '/login' && authStore.isAuth) {
        if (isValidToken(authStore.token!)) {
            return navigateTo('/');
        } else {
            await authStore.refresh();
        }
    } else {
        return true;
    }
});
