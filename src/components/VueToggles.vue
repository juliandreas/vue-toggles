<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  value: boolean;
  disabled?: boolean;
  reverse?: boolean;
  checkedText?: string;
  uncheckedText?: string;
  width?: number;
  height?: number;
  uncheckedBg?: string;
  checkedBg?: string;
  dotColor?: string;
  fontSize?: number | string;
  checkedColor?: string;
  uncheckedColor?: string;
  fontWeight?: number | string;
}

const props = withDefaults(defineProps<Props>(), {
  width: 75,
  height: 25,
  uncheckedBg: '#939393',
  checkedBg: '#5850ec',
  dotColor: '#ffffff',
  fontSize: 12,
  checkedColor: '#ffffff',
  uncheckedColor: '#ffffff',
  fontWeight: 'normal'
});

const emits = defineEmits<{
  click: [void];
}>();

const classes = computed(() => {
  return {
    'base-switch__input': true,
    [`base-switch__input--true`]: props.value,
    [`base-switch__input--disabled`]: props.disabled
  };
});

const bgStyle = computed(() => {
  const styles = {
    width: `${props.width}px`,
    height: `${props.height}px`,
    background: props.value ? props.checkedBg : props.uncheckedBg,
    opacity: props.disabled ? '0.5' : '1',
    cursor: !props.disabled ? 'pointer' : 'not-allowed'
  };

  return styles;
});

const dotStyle = computed(() => {
  const styles = {
    background: props.dotColor,
    width: `${props.height - 8}px`,
    height: `${props.height - 8}px`,
    'min-width': `${props.height - 8}px`,
    'min-height': `${props.height - 8}px`,
    'margin-left': props.value ? `${props.width - (props.height - 3)}px` : '5px'
  };

  if ((!props.value && props.reverse) || (props.value && !props.reverse)) {
    styles['margin-left'] = `${props.width - (props.height - 3)}px`;
  } else if ((props.value && props.reverse) || (!props.value && !props.reverse)) {
    styles['margin-left'] = '5px';
  }

  return styles;
});

const textStyle = computed(() => {
  const styles = {
    'font-weight': props.fontWeight,
    'font-size': `${props.fontSize}px`,
    color: props.value && !props.disabled ? props.checkedColor : props.uncheckedColor,
    right: props.value ? `${props.height - 3}px` : 'auto',
    left: props.value ? 'auto' : `${props.height - 3}px`
  };

  if (!props.value && props.reverse) {
    styles.right = `${props.height - 3}px`;
    styles.left = 'auto';
  } else if (props.value && props.reverse) {
    styles.left = `${props.height - 3}px`;
    styles.right = 'auto';
  }

  return styles;
});

const toggle = () => {
  if (!props.disabled) {
    emits('click');
  }
};
</script>

<template>
  <span
    class="vue-toggles"
    :style="bgStyle"
    role="switch"
    tabindex="0"
    :aria-checked="value ? 'true' : 'false'"
    :aria-readonly="disabled ? 'true' : 'false'"
    @keyup.enter.prevent="toggle"
    @keyup.space.prevent="toggle"
    @click="toggle"
  >
    <span aria-hidden="true" :style="dotStyle" class="dot">
      <span v-show="checkedText && value" :style="textStyle" class="text">
        {{ checkedText }}
      </span>

      <span v-show="uncheckedText && !value" :style="textStyle" class="text">
        {{ uncheckedText }}
      </span>
    </span>
  </span>
</template>

<style>
.vue-toggles {
  display: flex;
  align-items: center;
  border-radius: 9999px;
  overflow: hidden;
  transition:
    background-color ease 0.2s,
    width ease 0.2s,
    height ease 0.2s;
}

.vue-toggles .dot {
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 9999px;
  box-shadow:
    0 1px 3px 0 rgba(0, 0, 0, 0.1),
    0 1px 2px 0 rgba(0, 0, 0, 0.06);
  transition: margin ease 0.2s;
}

.vue-toggles .text {
  position: absolute;
  font-family: inherit;
  user-select: none;
  white-space: nowrap;
}

@media all and (-ms-high-contrast: none) {
  .vue-toggles .text {
    /* IE11 fix */
    top: 50%;
    transform: translateY(-50%);
  }
}

@media (prefers-reduced-motion) {
  /* disable animations if user have a reduced motion setting */
  .vue-toggles,
  .vue-toggles *,
  .vue-toggles *::before,
  .vue-toggles *::after {
    animation: none !important;
    transition: none !important;
    transition-duration: none !important;
  }
}
</style>
