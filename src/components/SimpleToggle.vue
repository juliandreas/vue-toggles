<template>
  <span
    @click="toggle"
    @keydown.space.prevent="toggle"
    role="switch"
    tabindex="0"
    :aria-checked="value ? 'true' : 'false'"
    :disabled="disabled"
    :style="bgStyle"
    class="bg"
    :class="{ 'toggled-bg': value }"
  >
    <span aria-hidden="true" class="dot" :style="dotStyle">
      <span
        v-if="checked"
        class="text"
        :style="[value ? { right: this.height + 'px' } : { right: 'auto' }]"
        :class="{ 'toggled-text': value }"
      >
        {{ checked }}
      </span>

      <span
        v-if="unchecked"
        class="text"
        :style="[!value ? { left: this.height + 'px' } : { left: 'auto' }]"
        :class="{ 'toggled-text': !value }"
      >
        {{ unchecked }}
      </span>
    </span>
  </span>
</template>

<script>
export default {
  name: 'SimpleToggle',
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
    width: {
      type: [Number, String],
      default: 75,
    },
    height: {
      type: [Number, String],
      default: 25,
    },
    dotColor: {
      type: String,
      default: '#fff',
    },
  },
  computed: {
    bgStyle() {
      return {
        width: this.width + 'px',
        height: this.height + 'px',
      };
    },
    dotStyle() {
      if (this.value) {
        return {
          background: this.dotColor,
          width: this.height - 8 + 'px',
          height: this.height - 8 + 'px',
          'min-width': this.height - 8 + 'px',
          'min-height': this.height - 8 + 'px',
          transform: 'translateX(' + (this.width - this.height - 2) + 'px )',
        };
      }

      return {
        background: this.dotColor,
        width: this.height - 8 + 'px',
        height: this.height - 8 + 'px',
        'min-width': this.height - 8 + 'px',
        'min-height': this.height - 8 + 'px',
      };
    },
  },
  methods: {
    toggle() {
      if (!this.disabled) {
        this.$emit('click', this.value);
      }
    },
  },
};
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.bg {
  display: flex;
  align-items: center;
  background: #939393;
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 9999px;
  transition: all ease 0.2s;
  padding: 3px;
  outline: none;
  overflow: hidden;
}

.dot {
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 9999px;
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

.toggled-bg {
  background: #5850ec;
  transition: all ease 0.2s;
}
</style>
