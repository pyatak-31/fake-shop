<template>
    <div class="form-input">
        <label
            :for="id"
            class="form-input__label"
            v-if="label"
        >
            {{ label }}
        </label>

        <input
            :type="type"
            :id="id"
            class="form-input__field"
            :class="{ 'form-input__field--error': error }"
            :placeholder="placeholder"
            :value="modelValue"
            @input="onChange($event)"
        >

        <small
            class="form-input__error"
            v-if="error"
        >
            {{ error }}
        </small>
    </div>
</template>

<script setup lang="ts">
    type InputType = 'text' | 'number' | 'password' | 'email' | 'url' | 'tel';

    interface Props {
        id: string;
        label?: string;
        type?: InputType;
        modelValue: string | number;
        placeholder?: string;
        error?: string;
    };

    const props = withDefaults(defineProps<Props>(), {
        type: 'text',
    });

    const emits = defineEmits<{
        (e: 'update:modelValue', value: string | number): void
    }>()

    const onChange = (event: Event) => {
        let value: string | number = (event.target as HTMLInputElement).value;
        if (props.type === 'number') {
            value = Number(value);
        }
        emits('update:modelValue', value);
    };
</script>

<style lang="scss">
.form-input {
    display: flex;
    flex-direction: column;

    &__label {
        margin-bottom: 5px;
        @include font($dark, 16px, 24px, 400);
        cursor: pointer;
    }

    &__field {
        width: 100%;
        padding: 6px 12px;
        @include font($dark, 14px, 20px, 400);
        border: 1px solid #E0E0E0;
        border-radius: 4px;

        &::placeholder {
            color: #757575;
        }

        &:focus {
            border-color: #AC9FF0;
        }

        &--error {
            border-color: #A92525;
        }
    }

    &__error {
        margin-top: 2px;
        @include font(#A92525, 12px, 16px, 400);
    }
}
</style>