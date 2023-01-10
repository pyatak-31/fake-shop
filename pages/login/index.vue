<template>
    <div class="card">
        <form @submit.prevent>
            <form-input
                label="1"
                type="number"
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

</script>

<style lang="scss">
    .card {
        padding: 20px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
    }
</style>