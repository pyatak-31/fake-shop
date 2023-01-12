import { defineStore } from 'pinia';
import { computed, watch } from 'vue';

export const useProductsStore = defineStore('products', () => {
    interface RequestProduct {
        category: string;
        title: string;
        description: string;
        image: string;
        price: number; 
    }

    interface Product extends RequestProduct{
        id: number;
        rating?: {
            count: number;
            rate: number;
        }
    }
    // state
    const _products = ref<Array<Product>>([]);
    const _product = ref<Product | null>(null);
    const _error = ref<number | undefined>(undefined);
    
    // getters
    
    
    let id = 23;
    // actions
    const fetchAll = async () => {
        const { data: products, error, pending } = await useFetch<Array<Product>>('/api/products');
        _products.value = products.value ?? [];
        _error.value = error.value ? error.value.statusCode : undefined;
        return true;
    };

    const fetchOne = async (id: number) => {
        try {
            const data = await $fetch<Product>(`https://fakestoreapi.com/products/${ id }`);
            _product.value = data;
        } catch (error) {
            console.log(error);
        }
    };

    const create = async (body: RequestProduct) => {
        try {
            const data = await $fetch<Product>(`https://fakestoreapi.com/products`, {
                method: 'POST',
                body
            });
            _products.value.push({...data, id});
            id += 1;
        } catch (error) {
            console.log(error);
        }
    };

    const editItem = async (id: number, body: RequestProduct) => {
        try {
            const data = await $fetch<Product>(`https://fakestoreapi.com/products/${ id }`, {
                method: 'PUT',
                body
            });
            _products.value = _products.value.map((product) => {
                if (product.id === id) {
                    product = { ...body, id};
                }
                return product;
            });
        } catch (error) {
            console.log(error);
        }
    };

    const deleteItem = async (id: number) => {
        try {
            _products.value = _products.value.filter((product) => product.id !== id);
            const data = await $fetch<Product>(`https://fakestoreapi.com/products/${ id }`, {
                method: 'DELETE'
            });
        } catch (error) {
            console.log(error);
        }
    };
  
    return { _products, _error,  fetchAll, fetchOne, create, deleteItem, editItem }
});
