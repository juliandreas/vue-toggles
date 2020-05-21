<template>
  <span
    @click="toggle"
    @keydown.space.prevent="toggle"
    role="switch"
    tabindex="0"
    :aria-checked="value ? 'true' : 'false'"
    :disabled="disabled"
    class="bg"
    :class="{ 'toggled-bg': value }"
  >
    <span aria-hidden="true" class="dot" :class="{ 'toggled-dot': value }">
      <span
        v-if="checked"
        class="text"
        :class="{ 'toggled-text': value, 'text-checked': value }"
      >
        {{ checked }}
      </span>

      <span
        v-if="unchecked"
        class="text"
        :class="{
          'toggled-text': !value,
          'text-unchecked': !value,
        }"
      >
        {{ unchecked }}
      </span>
    </span>
  </span>
</template>

<script>
export default {
  name: "SimpleToggle",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    checked: {
      type: String,
      default: null,
    },
    unchecked: {
      type: String,
      default: null,
    },
  },
  methods: {
    toggle() {
      if (!this.disabled) {
        this.$emit("click", this.value);
      }
    },
  },
};
</script>

<style scoped lang="scss">
$width: 60px;
$height: 25px;
$radius: 9999px;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.bg {
  display: flex;
  align-items: center;
  width: $width;
  height: $height;
  background: #939393;
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: $radius;
  transition: all ease 0.2s;
  padding: 0 3px;
  outline: none;
  overflow: hidden;
}

.dot {
  position: relative;
  display: flex;
  align-items: center;
  width: $height - 5;
  height: $height - 5;
  min-height: $height - 5;
  min-width: $height - 5;
  border-radius: 9999px;
  background: #fff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  transition: all ease 0.2s;
}

.text {
  position: absolute;
  font-family: inherit;
  font-size: 14px;
  color: #fff;
  opacity: 0;
  user-select: none;

  @media all and (-ms-high-contrast: none) {
    // ie11
    top: 50%;
    transform: translateY(-50%);
  }
}

.toggled-text {
  opacity: 1;
  transition: opacity ease 0.2s;
}

.text-checked {
  right: $height;
}

.text-unchecked {
  left: $height;
}

.toggled-bg {
  background: #5850ec;
  transition: all ease 0.2s;
}

.toggled-dot {
  margin-left: $width - ($height - 5);
  transition: all ease 0.2s;
}
</style>
