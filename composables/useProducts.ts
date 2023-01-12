import { useProductsStore } from '@/store/products';
import { computed } from 'vue'

export const useProducts = () => {
    const productsStore = useProductsStore();
    const products = computed(() => productsStore._products);
    const error = computed(() => productsStore._error);

    const fetchAll = async () => {
        const { pending } = await useLazyAsyncData('productas', () => productsStore.fetchAll());
        return pending;
    }

    return { products, error, fetchAll }
  }
