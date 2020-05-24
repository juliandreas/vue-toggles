<template>
  <button
    @click="toggle"
    @keydown.space.prevent="toggle"
    role="switch"
    :aria-checked="value ? 'true' : 'false'"
    :aria-readonly="disabled ? 'true' : 'false'"
    tabindex="0"
    :style="bgStyle"
    class="toggles-btn"
  >
    <span aria-hidden="true" :style="dotStyle" class="dot">
      <span v-show="checked && value" :style="checkedStyle" class="text">
        {{ checked }}
      </span>

      <span v-show="unchecked && !value" :style="uncheckedStyle" class="text">
        {{ unchecked }}
      </span>
    </span>
  </button>
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
    uncheckedBg: {
      type: String,
      default: '#939393',
    },
    checkedBg: {
      type: String,
      default: '#5850ec',
    },
    disabledBg: {
      type: String,
      default: '#939393',
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
    uncheckedColor: {
      type: String,
      default: '#fff',
    },
    checkedColor: {
      type: String,
      default: '#fff',
    },
    fontWeight: {
      type: [Number, String],
      default: 'normal',
    },
  },
  computed: {
    bgStyle() {
      const styles = {
        width: this.width + 'px',
        height: this.height + 'px',
      };

      if (this.value) {
        styles.background = this.checkedBg;
      } else {
        styles.background = this.uncheckedBg;
      }

      if (this.disabled) {
        styles.background = this.disabledBg;
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
        styles.marginLeft = this.width - (this.height - 3) + 'px';
      } else {
        styles.marginLeft = '5px';
      }

      return styles;
    },
    checkedStyle() {
      const styles = {
        'font-weight': this.fontWeight,
        color: this.fontColor,
        'font-size': this.fontSize + 'px',
      };

      if (this.checkedColor) {
        styles.color = this.checkedColor;
      }

      if (this.value) {
        styles.right = this.height - 4 + 'px';
        styles.left = 'auto';
      } else {
        styles.right = 'auto';
        styles.left = this.height - 4 + 'px';
      }

      return styles;
    },
    uncheckedStyle() {
      const styles = {
        'font-weight': this.fontWeight,
        color: this.fontColor,
        'font-size': this.fontSize + 'px',
      };

      if (this.uncheckedColor) {
        styles.color = this.uncheckedColor;
      }

      if (this.value) {
        styles.right = this.height - 4 + 'px';
        styles.left = 'auto';
      } else {
        styles.right = 'auto';
        styles.left = this.height - 4 + 'px';
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

.toggles-btn {
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 9999px;
  border: 0;
  padding: 0;
  overflow: hidden;
  transition: all ease 0.2s;
}

.dot {
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 9999px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  transition: all ease 0.2s;

  .text {
    position: absolute;
    font-family: inherit;
    opacity: 1;
    user-select: none;

    @media all and (-ms-high-contrast: none) {
      /* IE11 fix */
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>
