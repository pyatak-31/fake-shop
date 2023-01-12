import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', () => {
    interface Token {
        token: string;
    }

    interface Data {
        token: string;
        
    }

    interface AuthData {
        username: string;
        password: string;
    }
    
    // state
    const _token = ref<string | null>(null);
    const _error = ref(null);
    const _isLoadind = ref(false);
    const _obj: any = ref(null);

    // getters
    const token =  computed(() => _token);
    const error =  computed(() => _error);
    const isLoadind =  computed(() => _isLoadind);
    
    // actions
    const login = async (body: AuthData) => {
        const {data, error, pending } = await useFetch<Data>(`https://fakestoreapi.com/auth/login`, {
            method: 'POST',
            body
        });
        // console.log(data.value);
        // console.log(error.value?.response?._data);
        
        _token.value = data.value ? data.value.token : null;
        _error.value = error.value ? error.value.response?._data : null;
        _isLoadind.value = pending.value;

        // const res = await useFetch('/api/products')
        // _obj.value = res.data
        
    };

    return { token, error, isLoadind, login, _obj }
});

