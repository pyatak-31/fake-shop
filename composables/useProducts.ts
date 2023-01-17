import { useProductsStore } from '@/store/products';
import { computed } from 'vue'

export const useProducts = () => {
    const productsStore = useProductsStore();
    const products = computed(() => productsStore._products);
    const error = computed(() => productsStore._error);
    const isLoading = computed(() => productsStore.isLoading);

    const fetchAll = async () => {
        // console.log(132);
        // const { pending: all } = await useLazyAsyncData('productas', () => productsStore.fetchAll());
        // return all;
        productsStore.fetchAll()
    }

    const create = async () => {
        const body = {
            category: 'string',
            title: 'string',
            description: 'string',
            image: 'string',
            price: 1, 
        }
        // await productsStore.create(body);
        const { pending: create } = await useLazyAsyncData('productas', () => productsStore.create(body));
        return create;
    };

    let isLoadingCreate = ref(false)
    const add = async () => {
        isLoadingCreate = await create();
    }
    

    return { products, error, isLoadingCreate, isLoading, fetchAll, create, add }
  }
