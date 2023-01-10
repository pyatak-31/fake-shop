<template>
    <div class="form-input">
        <label
            for=""
            class="form-input__label"
            v-if="label"
        >
            {{ label }}
        </label>

        <input
            :type="type"
            class="form-input__field"
        >

        <small class="form-input__error"></small>
    </div>
</template>

<script setup lang="ts">
    type InputType = 'text' | 'number' | 'password' | 'email' | 'url' | 'tel';

    interface Props {
        label?: string,
        type?: InputType,
    }

    

    const props = withDefaults(defineProps<Props>(), {
        type: 'text',
    });
</script>

<style scoped>

</style>