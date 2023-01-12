<template>
    <div class="page">
        <!-- <span v-if="isLoading">{{ isLoading }}</span> -->
        <div v-if="isLoading">load</div>
        <div v-else>
            <ul class="page__list">
                <li  class="page__item" v-for="product in products" :key="product.id">
                    {{ product.title }}
                </li>
            </ul>
            <p v-if="error">
                {{ error }}
            </p>
        </div>
        
        <!-- <span v-if="pending">Loading</span> -->
        <!-- <div v-else> -->
        
        <!-- <ul class="page__list">
            <li  class="page__item" v-for="product in products" :key="product.id">
                {{ product.title }}
            </li>
        </ul> -->
        <!-- <span v-else>0</span> -->

        <!-- <div v-if="product">
            {{ product.title }}
        </div>
        <span v-else>0</span>

        <p v-if="productsStore.error">
            {{ productsStore.error }}
        </p>
        <span v-else>0</span>
        <button @click="create">Crerate</button>
        <button @click="deleteProduct">Delete</button>
        <button @click="editProduct">Edit</button> -->
        <!-- </div> -->
        
    </div>
</template>

<script lang="ts" >
    export default {
        name: 'MainPage',
    } 
</script>

<script setup lang="ts">
    const { products, error, fetchAll } = useProducts();
    const isLoading = await fetchAll();
    
    
    // import { useProductsStore } from '@/store/products';
   
    // const productsStore = useProductsStore();
    // const { pending } = await useLazyAsyncData('productas', () => productsStore.fetchAll())
    // const products = computed(() => productsStore._products);
    
    // await productsStore.fetchAll(); 
    // await productsStore.fetchOne(1);
    // const products = productsStore.products;
    // const product = productsStore.product;
    // const wait = productsStore.isLoading;

    // const create = async () => {
    //     const body = {
    //         category: 'string',
    //         title: 'string',
    //         description: 'string',
    //         image: 'string',
    //         price: 1, 
    //     }
    //     await productsStore.create(body);
    // };

    // const deleteProduct = async () => {
    //     console.log(productsStore);
    //     await productsStore.deleteItem(23);
    // };

    // const editProduct = async () => {
    //     const body = {
    //         category: 'string',
    //         title: 'string2',
    //         description: 'string',
    //         image: 'string',
    //         price: 1, 
    //     }
    //     await productsStore.editItem(23, body);
    // };
</script>

<style lang="scss">
    .page {


        &__list {
            
            @include font($dark, 40px, 46px, 700);
        }

        &__item {
            @include truncate(300px);
        }
    }
</style>