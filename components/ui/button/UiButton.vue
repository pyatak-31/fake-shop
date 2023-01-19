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

<script lang="ts">export default { name: 'UiButton' }</script>

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
        rounded?: boolean;
        outline?: boolean;
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
        let result = `button button--size-${ props.size }`;
        if (props.outline) {
            result += ` button--outline button--outline-${ props.theme }`;
        } else {
            result += ` button--${ props.theme }`;
        }
        if (props.disabled) {
            result += ' button--disabled';
        }
        if (props.rounded) {
            result += ' button--rounded';
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
    $padding: 8px 24px;
    $padding-small: 4px 16px;
    $light-text-color: $white;
    $dark-text-color: $dark;
    $shadow-primary: 0px 2px 4px rgba(58, 87, 232, 0.3);
    $shadow-success: 0px 2px 4px rgba(26, 160, 83, 0.3);
    $shadow-danger: 0px 2px 4px rgba(192, 50, 33, 0.3);
    $shadow-warning: 0px 2px 4px rgba(241, 106, 27, 0.3);
    $shadow-info: 0px 2px 4px rgba(7, 154, 162, 0.3);
    $shadow-secondary: 0px 2px 4px rgba(108, 117, 125, 0.3);
    $shadow-light: 0px 2px 4px rgba(222, 226, 230, 0.3);
    $shadow-dark: 0px 2px 4px rgba(33, 37, 41, 0.3);

    @mixin theme($theme, $bg, $bg-hover, $shadow, $color:'') {
        &--#{ $theme } {
            background-color: $bg;
            @if $color != '' {
                color: $color;
            }

            &:hover,
            &:focus {
                background-color: $bg-hover;
                box-shadow: $shadow;
            }
        }
    }

    @mixin outline($theme, $color, $color-hover, $shadow) {
        &-#{ $theme } {
            border: 1px solid $color;
            color: $color;

            &:hover,
            &:focus {
                color: $color-hover;
                border-color: $color-hover;
                box-shadow: $shadow;
            }
        }
    }

    @mixin size($size, $padding, $font-size, $line-height, $width) {
        &--size-#{ $size } {
            padding: $padding;
            @include font('', $font-size, $line-height, '');

            .button__icon {
                width: $width;
                height: $width;
            }
        }
    }

    .button {
        display: flex;
        align-items: center;
        justify-content: center;
        @include font($light-text-color, '', '', 400);
        text-transform: capitalize;
        border-radius: 4px;
        transition: box-shadow .3s, background-color .3s;

        &--rounded {
            border-radius: 50px;
        }
        
        @include size('default', $padding, 16px, 28px, 24px);
        @include size('large', $padding, 19px, 33px, 24px);
        @include size('small', $padding-small, 13px, 17px, 16px);
        
        @include theme('primary', $primary, $primary-hover, $shadow-primary);
        @include theme('success', $success, $success-hover, $shadow-success);
        @include theme('danger', $danger, $danger-hover, $shadow-danger);
        @include theme('warning', $warning, $warning-hover, $shadow-warning);
        @include theme('info', $info, $info-hover, $shadow-info);
        @include theme('secondary', $secondary, $secondary-hover, $shadow-secondary);
        @include theme('light', $light, $light-hover, $shadow-light, $dark-text-color);
        @include theme('dark', $dark, $dark-hover, $shadow-dark);
        
        &--outline {
            background-color: $white;
            transition: box-shadow .3s, color .3s, border-color .3s;

            @include outline('primary', $primary, $primary-hover, $shadow-primary);
            @include outline('success', $success, $success-hover, $shadow-success);
            @include outline('danger', $danger, $danger-hover, $shadow-danger);
            @include outline('warning', $warning, $warning-hover, $shadow-warning);
            @include outline('info', $info, $info-hover, $shadow-info);
            @include outline('secondary', $secondary, $secondary-hover, $shadow-secondary);
            @include outline('light', $light, $light-hover, $shadow-light);
            @include outline('dark', $dark, $dark-hover, $shadow-dark);
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