<template>
    <div class="form-input">
        <input
            :type="type"
            :id="id"
            class="form-input__field"
            :class="{ 'form-input__field--error': error }"
            :placeholder="placeholder"
            :required="required"
            :value="modelValue"
            @input="onChange($event)"
        >

        <label
            :for="id"
            class="form-input__label"
            v-if="label"
        >
            {{ label }}<span v-if="required">*</span>
        </label>

        <small
            class="form-input__error"
            v-if="error"
        >
            {{ error }}
        </small>
    </div>
</template>

<script lang="ts">export default { name: 'UiInput' }</script>

<script setup lang="ts">
    type InputType = 'text' | 'number' | 'password' | 'email' | 'url' | 'tel';

    interface inputProps {
        id: string;
        label?: string;
        type?: InputType;
        modelValue: string | number;
        placeholder?: string;
        required?: boolean,
        error?: string;
    };

    const props = withDefaults(defineProps<inputProps>(), {
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
$text-color: $dark;
$placeholder-color: $grey-1;
$border-color: $grey-2;
$border-color-focus: $primary-50;
$border-color-error: $danger;

.form-input {
    display: flex;
    flex-direction: column;

    &__label {
        order: 0;
        margin-bottom: 5px;
        padding-left: 0px;
        @include font($text-color, 16px, 24px, 400);
        cursor: pointer;
        transition: padding-left .3s, font-weight .3s;
    }

    &__field {
        order: 1;
        width: 100%;
        padding: 8px 16px;
        @include font($text-color, 14px, 20px, 400);
        border: 1px solid $border-color;
        border-radius: 4px;

        &::placeholder {
            color: $placeholder-color;
        }

        &:focus {
            border-color: $border-color-focus;

            & + .form-input__label {
                padding-left: 16px;
                font-weight: 700;
            }
        }

        &--error {
            border-color: $border-color-error;
        }
    }

    &__error {
        order: 3;
        margin-top: 2px;
        @include font($border-color-error, 12px, 16px, 400);
    }
}
</style>