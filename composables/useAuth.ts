import { useAuthStore } from '@/store/auth';

export const useAuth = () => {
    const authStore = useAuthStore();
    
    const isLoading = computed(() => authStore.isLoading);
    const error = computed(() => authStore.errorMessage);
    const hasError = computed(() => authStore.hasError);

    const data = ref({
        email: 'oleg@mail.ru',//oleg@mail.ru
        password: '123456',//123456
    });

    const login = async () => {
        await authStore.login(data.value);
    };

    const logout = async () => {
        await authStore.logout();
    };

    return { data, isLoading, error, hasError, login, logout };
};
