<template>
    <div class="card">
        <slot />
    </div>
</template>

<script lang="ts" >
    export default {
        name: 'PageCard',
    } 
</script>

<style lang="scss">
    .card {
        padding: 20px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
    }
</style>