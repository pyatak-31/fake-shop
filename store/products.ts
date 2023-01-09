import { defineStore } from 'pinia';
import { computed } from 'vue';

export const useProductsStore = defineStore('products', () => {
    const _products = ref([]);

    const products =  computed(() => _products);
    
    const fetchAll = async () => {
      const data: any = await $fetch('https://fakestoreapi.com/products', { method: 'GET'});
      _products.value = data;
    };
  
    return { products, fetchAll }
});
