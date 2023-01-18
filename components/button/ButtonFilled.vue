<template>
    <button
        :type="type"
        :class="classList"
        :disabled="disabled"
        @click="onClick"   
    >
        <i
            :class="iconClass"
            v-if="hasLeftIcon"    
        >
            <slot name="left-icon"></slot>
        </i>

        <slot />

        <i
            :class="iconClass"
            v-if="hasRightIcon"    
        >
            <slot name="right-icon"></slot>
        </i>
    </button>
</template>

<script lang="ts">export default { name: 'ButtonFilled' }</script>

<script setup lang="ts">
    import {} from "#app";
    type Type = 'button' | 'reset' | 'submit';
    type Size = 'small' | 'default' | 'large';
    type Theme = 'primary' | 'success' | 'danger' | 'warning' | 'info' | 'secondary' | 'light' | 'dark';
    interface TitleProps {
        type?: Type;
        theme?: Theme;
        disabled?: boolean;
        size?: Size;
    }

    const props = withDefaults(defineProps<TitleProps>(), {
        type: 'button',
        theme: 'primary',
        size: 'default',
    });

    const slot = useSlots();
    const hasRightIcon = computed(() => Boolean(slot['right-icon']));
    const hasLeftIcon = computed(() => Boolean(slot['left-icon']));
    const hasText = computed(() => Boolean(slot['default']));

    const classList = computed(() => {
        let result = `button button--${ props.theme }  button--${ props.size }-size`;
        if (props.disabled) {
            result += ' button--disabled'
        }
        return result;
    });

    const iconClass = computed(() => {
        let result = `button__icon`;
        if (!hasText.value) {
            result += ' button__icon--only';
        } else if (hasText.value && hasRightIcon.value) {
            result += ' button__icon--right';
        } else if (hasText.value && hasLeftIcon.value) {
            result += ' button__icon--left';
        }
        return result;
    });

    const emits = defineEmits<{
        (e: 'onClick'): void
    }>();

    const onClick = () => {
        emits('onClick');
    };
</script>

<style scoped lang="scss">
    $light-text-color: $white;
    $dark-text-color: $dark;
    $bg-primary: $primary;
    $bg-primary-hover: $primary-hover;
    $bg-success: $success;
    $bg-success-hover: $success-hover;
    $bg-danger: $danger;
    $bg-danger-hover: $danger-hover;
    $bg-warning: $warning;
    $bg-warning-hover: $warning-hover;
    $bg-info: $info;
    $bg-info-hover: $info-hover;
    $bg-secondary: $secondary;
    $bg-secondary-hover: $secondary-hover;
    $bg-light: $light;
    $bg-light-hover: $light-hover;
    $bg-dark: $dark;
    $bg-dark-hover: $dark-hover;

    .button {
        display: flex;
        align-items: center;
        justify-content: center;
        @include font($light-text-color, '', '', 400);
        text-transform: capitalize;
        border-radius: 4px;
        transition: box-shadow .3s, background-color .3s;
        
        &--default-size {
            padding: 8px 24px;
            @include font('', 16px, 28px, '');

            .button__icon {
                width: 24px;
                height: 24px;
            }
        }

        &--large-size {
            padding: 8px 24px;
            @include font('', 19px, 33px, '');

            .button__icon {
                width: 24px;
                height: 24px;
            }
        }

        &--small-size {
            padding: 4px 16px;
            @include font('', 13px, 17px, '');

            .button__icon {
                width: 16px;
                height: 16px;
            }
        }
        
        &--primary {
            background-color: $bg-primary;

            &:hover,
            &:focus {
                background-color: $bg-primary-hover;
                box-shadow: 0px 2px 4px rgba(58, 87, 232, 0.3);
            }
        }

        &--success {
            background-color: $bg-success;
            
            &:hover,
            &:focus {
                background-color: $bg-success-hover;
                box-shadow: 0px 2px 4px rgba(26, 160, 83, 0.3);
            }
        }

        &--danger {
            background-color: $bg-danger;

            &:hover,
            &:focus {
                background-color: $bg-danger-hover;
                box-shadow: 0px 2px 4px rgba(192, 50, 33, 0.3);
            }
        }

        &--warning {
            background-color: $bg-warning;

            &:hover,
            &:focus {
                background-color: $bg-warning-hover;
                box-shadow: 0px 2px 4px rgba(241, 106, 27, 0.3);
            }
        }
        
        &--info {
            background-color: $bg-info;

            &:hover,
            &:focus {
                background-color: $bg-info-hover;
                box-shadow: 0px 2px 4px rgba(7, 154, 162, 0.3);
            }
        }

        &--secondary {
            background-color: $bg-secondary;

            &:hover,
            &:focus {
                background-color: $bg-secondary-hover;
                box-shadow: 0px 2px 4px rgba(108, 117, 125, 0.3);
            }
        }

        &--light {
            background-color: $bg-light;
            color: $dark-text-color;

            &:hover,
            &:focus {
                background-color: $bg-light-hover;
                box-shadow: 0px 2px 4px rgba(222, 226, 230, 0.3);
            }
        }

        &--dark {
            background-color: $bg-dark;

            &:hover,
            &:focus {
                background-color: $bg-dark-hover;
                box-shadow: 0px 2px 4px rgba(33, 37, 41, 0.3);
            }
        }

        &--disabled {
            pointer-events: none;
            opacity: .3;
        }

        &__icon {
            display: inline-block;
            width: 24px;
            height: 24px;
            
            &--right {
                margin-left: 5px;
            }
            
            &--left {
                margin-right: 5px;
            }
        }
    }
</style>