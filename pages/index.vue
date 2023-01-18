<template>
    <div class="page">
        <!-- <span v-if="isLoading">{{ isLoading }}</span> -->
        <div v-if="isLoading && !products.length">load</div>
        <p v-else-if="error">
            {{ error }}
        </p>
        <div v-else>
            
            
                <ul class="page__list">
                    <li  class="page__item" v-for="product in products" :key="product.id">
                        {{ product.title }}
                    </li>
                </ul>
                <span v-if="isLoadingCreate">Creating...</span>
                <button @click="add">Crerate</button>
            
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
        <!-- <span v-if="pending">..................</span> -->
    </div>
</template>

<script lang="ts">
    export default { name: 'MainPage' }
</script>

<script setup lang="ts">

    definePageMeta({ middleware: ["auth"] });

    const { products, error, isLoading, fetchAll, create, add, isLoadingCreate } = useProducts();
    await fetchAll();

    // let load = ref(false)
    // const { data, pending, error: error2 } = useLazyAsyncData('count', async () => await fetchAll())
    // console.log(data);
    
    
    // let isLoadingCreate = ref(false)
    // const add = async () => {
    //     isLoadingCreate = await create();
    // }
    
    
 
    // await productsStore.fetchOne(1);
    // const products = productsStore.products;
    // const product = productsStore.product;
    
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