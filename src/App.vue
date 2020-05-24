<template>
  <div id="app">
    <header>
      <h1>Vue Toggles</h1>
    </header>

    <div class="container">
      <div class="wrapper">
        <div class="inputs" style="margin-right: 25px;">
          <label for="height">Height (height)</label>
          <input v-model="height" id="height" type="number" />

          <label for="width">Width (width)</label>
          <input v-model="width" id="width" type="number" />

          <label for="checked">Checked Text (checked)</label>
          <input v-model="checked" id="checked" type="text" />

          <label for="unchecked">Unchecked Text (unchecked)</label>
          <input v-model="unchecked" id="unchecked" type="text" />

          <label for="checkedBg">Checked Background Color (checkedBg)</label>
          <input v-model="checkedBg" id="checkedBg" type="color" />

          <label for="uncheckedBg">Unchecked Background Color (uncheckedBg)</label>
          <input v-model="uncheckedBg" id="uncheckedBg" type="color" />

          <label for="disabledBg">Disabled Background Color (disabledBg)</label>
          <input v-model="disabledBg" id="disabledBg" type="color" />
        </div>

        <div class="inputs">
          <label for="checkedColor">Checked Text Color (checkedColor)</label>
          <input v-model="checkedColor" id="checkedColor" type="color" />

          <label for="uncheckedColor">Unchecked Text Color (uncheckedColor)</label>
          <input v-model="uncheckedColor" id="uncheckedColor" type="color" />

          <label for="dotColor">Dot Color (dotColor)</label>
          <input v-model="dotColor" id="dotColor" type="color" />

          <label for="fontSize">Font Size (fontSize)</label>
          <input v-model="fontSize" id="fontSize" type="number" />

          <label for="fontWeight">Font Weight (fontWeight)</label>
          <input v-model="fontWeight" id="fontWeight" type="text" />

          <label>Disabled (disabled)</label>
          <div class="radio-wrapper">
            <input type="radio" id="disabled-false" v-model="disabled" :value="false" />
            <label for="disabled-false">False</label>
            <input type="radio" id="disabled-true" v-model="disabled" :value="true" />
            <label for="disabled-true">True</label>
          </div>
        </div>
      </div>

      <div class="wrapper">
        <VueToggles
          @click="value = !value"
          :value="value"
          :checked="checked"
          :unchecked="unchecked"
          :height="height"
          :width="width"
          :uncheckedBg="uncheckedBg"
          :uncheckedColor="uncheckedColor"
          :checkedBg="checkedBg"
          :checkedColor="checkedColor"
          :disabledBg="disabledBg"
          :disabled="disabled"
          :dotColor="dotColor"
          :fontSize="fontSize"
          :fontWeight="fontWeight"
        />
      </div>
    </div>

    <div class="container">
      <div class="toggles">
        <p>Examples:</p>
        <VueToggles class="testy" @click="value2 = !value2" :value="value2" />
        <VueToggles
          @click="value2 = !value2"
          :value="value2"
          checkedBg="#42A3AA"
          checked="On"
          unchecked="Off"
        />
        <VueToggles
          @click="value2 = !value2"
          :value="value2"
          uncheckedBg="linear-gradient(to bottom right, grey, grey)"
          checkedBg="linear-gradient(to bottom right, red, #5850ec)"
          checked="😄"
          unchecked="😑"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    value: false,
    value2: false,
    width: 75,
    height: 25,
    checked: 'On',
    unchecked: 'Off',
    uncheckedBg: '#939393',
    uncheckedColor: '#ffffff',
    checkedBg: '#5850ec',
    checkedColor: '#ffffff',
    disabledBg: '#939393',
    disabled: false,
    dotColor: '#ffffff',
    fontSize: 12,
    fontWeight: 'normal',
  }),
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

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
  padding: 50px;

  header {
    background: linear-gradient(to bottom right, #939393, #5850ec);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    margin-bottom: 50px;

    h1 {
      margin-bottom: 10px;
    }
  }

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

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
