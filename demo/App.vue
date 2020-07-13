<template>
  <div id="app">
    <Header />

    <div class="container">
      <div class="wrapper">
        <div class="inputs" style="margin-right: 25px;">
          <label for="height">Height (height)</label>
          <input id="height" v-model="height" type="number" />

          <label for="width">Width (width)</label>
          <input id="width" v-model="width" type="number" />

          <label for="checked">Checked Text (checkedText)</label>
          <input id="checkedText" v-model="checkedText" type="text" />

          <label for="unchecked">Unchecked Text (uncheckedText)</label>
          <input id="uncheckedText" v-model="uncheckedText" type="text" />

          <label for="checkedBg">Checked Background Color (checkedBg)</label>
          <input id="checkedBg" v-model="checkedBg" type="color" />

          <label for="uncheckedBg">Unchecked Background Color (uncheckedBg)</label>
          <input id="uncheckedBg" v-model="uncheckedBg" type="color" />
        </div>

        <div class="inputs">
          <label for="checkedColor">Checked Text Color (checkedColor)</label>
          <input id="checkedColor" v-model="checkedColor" type="color" />

          <label for="uncheckedColor">Unchecked Text Color (uncheckedColor)</label>
          <input id="uncheckedColor" v-model="uncheckedColor" type="color" />

          <label for="dotColor">Dot Color (dotColor)</label>
          <input id="dotColor" v-model="dotColor" type="color" />

          <label for="fontSize">Font Size (fontSize)</label>
          <input id="fontSize" v-model="fontSize" type="number" />

          <label for="fontWeight">Font Weight (fontWeight)</label>
          <input id="fontWeight" v-model="fontWeight" type="text" />

          <label>Disabled (disabled)</label>
          <div class="radio-wrapper">
            <input id="disabled-false" v-model="disabled" type="radio" :value="false" />
            <label for="disabled-false">False</label>
            <input id="disabled-true" v-model="disabled" type="radio" :value="true" />
            <label for="disabled-true">True</label>
          </div>

          <label>Reverse (reverse)</label>
          <div class="radio-wrapper">
            <input id="reverse-false" v-model="reverse" type="radio" :value="false" />
            <label for="reverse-false">False</label>
            <input id="reverse-true" v-model="reverse" type="radio" :value="true" />
            <label for="reverse-true">True</label>
          </div>
        </div>
      </div>

      <div class="wrapper">
        <VueToggles
          :value="value"
          :checked-text="checkedText"
          :unchecked-text="uncheckedText"
          :height="height"
          :width="width"
          :unchecked-bg="uncheckedBg"
          :unchecked-color="uncheckedColor"
          :checked-bg="checkedBg"
          :checked-color="checkedColor"
          :disabled="disabled"
          :dot-color="dotColor"
          :font-size="fontSize"
          :font-weight="fontWeight"
          :reverse="reverse"
          @click="value = !value"
        />
      </div>
    </div>

    <div class="container">
      <div class="toggles">
        <p>Examples:</p>
        <VueToggles class="testy" :value="value2" @click="value2 = !value2" />
        <VueToggles
          :value="value2"
          checked-bg="#42A3AA"
          checked-text="On"
          unchecked-text="Off"
          @click="value2 = !value2"
        />
        <VueToggles
          :value="value2"
          checked-bg="linear-gradient(to bottom right, red, #5850ec)"
          unchecked-bg="linear-gradient(to bottom right, grey, grey)"
          checked-text="😄"
          unchecked-text="😑"
          @click="value2 = !value2"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
  data: () => ({
    value: false,
    value2: false,
    width: 75,
    height: 25,
    checkedText: 'On',
    uncheckedText: 'Off',
    checkedBg: '#5850ec',
    uncheckedBg: '#939393',
    checkedColor: '#ffffff',
    uncheckedColor: '#ffffff',
    dotColor: '#ffffff',
    fontSize: 12,
    fontWeight: 'normal',
    disabled: false,
    reverse: false,
  }),
};
</script>

<style lang="scss">
body {
  min-height: 100vh;
  background: #faf9fd;
}

#app {
  font-family: 'Exo', sans-serif;
  display: flex;
  flex-direction: column;
  color: #000;
  height: 100vh;

  .container {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;

    .wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 25px;

      .inputs {
        display: flex;
        flex-direction: column;

        label {
          font-size: 12px;
          margin-bottom: 5px;
        }

        input {
          color: #2e2e2e;
          font-size: 14px;
          padding: 8px 10px;
          border: 1px solid #d2d6dc;
          border-radius: 6px;
          margin-bottom: 10px;
        }

        input[type='color'] {
          padding: 0;
          width: 100%;
          height: 35px;
        }

        .radio-wrapper {
          display: flex;
          align-items: center;
          height: 45px;

          input[type='radio'] {
            margin-right: 5px;
          }

          label {
            margin-right: 10px;
          }
        }
      }
    }

    .toggles {
      display: flex;
      align-items: center;

      p {
        font-size: 12px;
        margin-right: 10px;
      }

      .toggles-btn {
        margin-right: 10px;
        transition: border ease 0.2s;

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
