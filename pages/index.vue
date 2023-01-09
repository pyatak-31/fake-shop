<template>
    <div class="page">
        Main page

        <ul class="page__list" v-if="products">
            <li v-for="product in products" :key="product.id">
                {{ product.title }}
            </li>
        </ul>

        <div v-if="product">
            {{ product.title }}
        </div>

        <button @click="create">Crerate</button>
        <button @click="deleteProduct">Delete</button>
        <button @click="editProduct">Edit</button>
    </div>
</template>

<script lang="ts" >
    export default {
        name: 'MainPage',
    } 
</script>

<script setup lang="ts">
    import { useProductsStore } from '@/store/products';

    const productsStore = useProductsStore();
    onMounted(async () => {
    })
    await productsStore.fetchAll();
    await productsStore.fetchOne(1);
    const products = productsStore.products;
    const product = productsStore.product;

    const create = async () => {
        const body = {
            category: 'string',
            title: 'string',
            description: 'string',
            image: 'string',
            price: 1, 
        }
        await productsStore.create(body);
    };

    const deleteProduct = async () => {
        console.log(productsStore);
        await productsStore.deleteItem(23);
    };

    const editProduct = async () => {
        const body = {
            category: 'string',
            title: 'string2',
            description: 'string',
            image: 'string',
            price: 1, 
        }
        await productsStore.editItem(23, body);
    };
</script>

<style lang="scss">
    .page {


        &__list {
            background-color: $primary;
        }
    }
</style>