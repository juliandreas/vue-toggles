<script setup lang="ts">
import { computed, ref, watchEffect } from "vue";
import { type VueTogglesProps } from "../types";

const props = withDefaults(defineProps<VueTogglesProps>(), {
  modelValue: undefined,
  value: undefined,
  width: 75,
  height: 25,
  dotColor: "#ffffff",
  uncheckedBg: "#939393",
  checkedBg: "#5850ec",
  uncheckedTextColor: "#ffffff",
  checkedTextColor: "#ffffff",
  uncheckedText: "",
  checkedText: "",
  fontSize: 12,
  fontWeight: "normal",
});

const emits = defineEmits<{
  "update:modelValue": [boolean];
  click: [void];
}>();

// Track whether the toggle is checked
const isChecked = ref(props.value || props.modelValue);

watchEffect(() => {
  // Warn if both 'v-model' and ':value' are provided
  if (props.value !== undefined && props.modelValue !== undefined) {
    console.warn(
      'Avoid using both "v-model" and ":value" at the same time. Choose one for better predictability.'
    );
  }

  // Sync the 'isChecked' with the incoming prop 'value'
  isChecked.value = props.value || props.modelValue;
});

const bgStyle = computed(() => {
  const styles = {
    width: `${props.width}px`,
    height: `${props.height}px`,
    background: isChecked.value ? props.checkedBg : props.uncheckedBg,
    opacity: props.disabled ? "0.5" : "1",
    cursor: !props.disabled ? "pointer" : "not-allowed",
  };

  return styles;
});

const dotStyle = computed(() => {
  const styles = {
    background: props.dotColor,
    width: `${props.height - 8}px`,
    height: `${props.height - 8}px`,
    "min-width": `${props.height - 8}px`,
    "min-height": `${props.height - 8}px`,
    "margin-left": isChecked.value
      ? `${props.width - (props.height - 3)}px`
      : "5px",
  };

  if (isChecked.value) {
    if (props.reverse) {
      styles["margin-left"] = "5px";
    } else {
      styles["margin-left"] = `${props.width - (props.height - 3)}px`;
    }
  } else {
    if (props.reverse) {
      styles["margin-left"] = `${props.width - (props.height - 3)}px`;
    } else {
      styles["margin-left"] = "5px";
    }
  }

  return styles;
});

const textStyle = computed(() => {
  const styles = {
    "font-weight": props.fontWeight,
    "font-size": `${props.fontSize}px`,
    color:
      isChecked.value && !props.disabled
        ? props.checkedTextColor
        : props.uncheckedTextColor,
    right: isChecked.value ? `${props.height - 3}px` : "auto",
    left: isChecked.value ? "auto" : `${props.height - 3}px`,
  };

  if (isChecked.value) {
    if (props.reverse) {
      styles.left = `${props.height - 3}px`;
      styles.right = "auto";
    } else {
      styles.right = `${props.height - 3}px`;
      styles.left = "auto";
    }
  } else {
    if (props.reverse) {
      styles.right = `${props.height - 3}px`;
      styles.left = "auto";
    } else {
      styles.left = `${props.height - 3}px`;
      styles.right = "auto";
    }
  }

  return styles;
});

const toggle = () => {
  if (!props.disabled) {
    isChecked.value = !isChecked.value;
    emits("update:modelValue", isChecked.value); // emit v-model value
    emits("click");
  }
};
</script>

<template>
  <span
    class="vue-toggles"
    :style="bgStyle"
    role="switch"
    tabindex="0"
    :aria-checked="isChecked"
    :aria-readonly="disabled"
    @keyup.enter.prevent="toggle"
    @keyup.space.prevent="toggle"
    @click="toggle"
  >
    <span aria-hidden="true" :style="dotStyle" class="vue-toggles__dot">
      <span
        v-if="checkedText || uncheckedText"
        class="vue-toggles__text"
        :style="textStyle"
      >
        {{ isChecked ? checkedText : uncheckedText }}
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
  transition: background-color ease 0.2s, width ease 0.2s, height ease 0.2s;
}

.vue-toggles__dot {
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 9999px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  transition: margin ease 0.2s;
}

.vue-toggles__text {
  position: absolute;
  font-family: inherit;
  user-select: none;
  white-space: nowrap;
}

@media (prefers-reduced-motion) {
  /* Disable animations if user have a reduced motion setting */
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
