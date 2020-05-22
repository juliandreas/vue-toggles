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
  >
    <span aria-hidden="true" :style="dotStyle" class="dot">
      <span
        v-if="checked"
        :style="[value ? { right: this.height + 'px', opacity: 1 } : { right: 'auto' }]"
        class="text"
      >
        {{ checked }}
      </span>

      <span
        v-if="unchecked"
        :style="[!value ? { left: this.height + 'px', opacity: 1 } : { left: 'auto' }]"
        class="text"
      >
        {{ unchecked }}
      </span>
    </span>
  </span>
</template>

<script>
export default {
  name: 'VueToggles',
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
    uncheckedBgColor: {
      type: String,
      default: '#939393',
    },
    checkedBgColor: {
      type: String,
      default: '#5850ec',
    },
    dotColor: {
      type: String,
      default: '#fff',
    },
    fontSize: {
      type: [Number, String],
      default: '14',
    },
    fontColor: {
      type: String,
      default: '#fff',
    },
    fontWeight: {
      type: String,
      default: 'normal',
    },
  },
  computed: {
    bgStyle() {
      const styles = {
        'font-weight': this.fontWeight,
        color: this.fontColor,
        'font-size': this.fontSize + 'px',
        width: this.width + 'px',
        height: this.height + 'px',
      };

      if (this.value) {
        styles.background = this.checkedBgColor;
      } else {
        styles.background = this.uncheckedBgColor;
      }

      return styles;
    },
    dotStyle() {
      const styles = {
        background: this.dotColor,
        width: this.height - 8 + 'px',
        height: this.height - 8 + 'px',
        'min-width': this.height - 8 + 'px',
        'min-height': this.height - 8 + 'px',
      };

      if (this.value) {
        styles.transform = 'translateX(' + (this.width - this.height - 2) + 'px )';
      }

      return styles;
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
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 9999px;
  transition: all ease 0.2s;
  padding: 3px;
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
  opacity: 0;
  user-select: none;

  @media all and (-ms-high-contrast: none) {
    /* IE11 fix */
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
