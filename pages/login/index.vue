<template>
    <div class="card">
        <form
            class="form"
            @submit.prevent
        >
            <form-input
                id="name"
                label="Имя пользователя"
                type="text"
                placeholder="Введите имя"
                v-model="data.name"
                error="oshibka oshibka oshibka oshibka oshibka oshibka oshibka oshibka oshibka"
            />
        </form>
    </div>
</template>

<script lang="ts">
    definePageMeta({
        layout: "empty",
    });
</script>

<script setup lang="ts">
    const data = ref({
        name: '',
    });
    
</script>

<style lang="scss">
    .card {
        padding: 20px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
    }
</style>