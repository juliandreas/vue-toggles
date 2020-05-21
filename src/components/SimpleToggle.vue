<template>
  <span
    @click="toggle()"
    @keydown.space.prevent="toggle()"
    role="switch"
    tabindex="0"
    :aria-checked="on ? 'true' : 'false'"
    :disabled="disabled"
    class="bg"
    :class="{ 'toggled-bg': on }"
  >
    <span aria-hidden="true" class="dot" :class="{ 'toggled-dot': on }">
      <span
        v-if="checked"
        class="text"
        :class="{ 'toggled-text': on, checked: on }"
      >
        {{ checked }}
      </span>

      <span
        v-if="unchecked"
        class="text"
        :class="{ 'toggled-text': !on, unchecked: !on }"
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
    label: String,
    checked: String,
    unchecked: String,
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    on: false,
  }),
  methods: {
    toggle() {
      if (!this.disabled) {
        this.on = !this.on;
      }

      this.$emit("click", this.on);
    },
  },
};
</script>

<style scoped lang="scss">
$width: 60px;
$height: 25px;
$radius: 9999px;

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
  border-radius: 9999px;
  background: #fff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  transition: all ease 0.2s;
}

.text {
  position: absolute;
  color: #fff;
  opacity: 0;
  user-select: none;
}

.toggled-text {
  opacity: 1;
  font-size: 14px;
  transition: opacity ease 0.2s;
}

.checked {
  right: $height;
}

.unchecked {
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
