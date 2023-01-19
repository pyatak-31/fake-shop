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
    $themes: (
        'primary': ($primary, $primary-hover, $shadow-primary),
        'success': ($success, $success-hover, $shadow-success),
        'danger': ($danger, $danger-hover, $shadow-danger),
        'warning': ($warning, $warning-hover, $shadow-warning),
        'info': ($info, $info-hover, $shadow-info),
        'secondary': ($secondary, $secondary-hover, $shadow-secondary),
        'light': ($light, $light-hover, $shadow-light, $dark),
        'dark': ($dark, $dark-hover, $shadow-dark)
    );

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
        @include font($white, '', '', 400);
        text-transform: capitalize;
        border-radius: 4px;
        transition: box-shadow .3s, background-color .3s;

        &--rounded {
            border-radius: 50px;
        }
        
        @include size('default', $padding, 16px, 28px, 24px);
        @include size('large', $padding, 19px, 33px, 24px);
        @include size('small', $padding-small, 13px, 17px, 16px);
        
        @each $theme, $params in $themes {
            @if $theme == 'light' {
                @include theme($theme, nth($params, 1), nth($params, 2), nth($params, 3), nth($params, 4));
            } @else {
                @include theme($theme, nth($params, 1), nth($params, 2), nth($params, 3));
            }
        }
        
        &--outline {
            background-color: $white;
            transition: box-shadow .3s, color .3s, border-color .3s;

            @each $theme, $params in $themes {
                @include outline($theme, nth($params, 1), nth($params, 2), nth($params, 3));
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