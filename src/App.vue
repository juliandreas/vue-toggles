<template>
  <div id="app">
    <header>
      <h1>Vue Toggles</h1>
    </header>

    <div class="container">
      <div class="wrapper">
        <div class="inputs" style="margin-right: 25px;">
          <label for="height">Height</label>
          <input v-model="height" id="height" type="number" />

          <label for="width">Width</label>
          <input v-model="width" id="width" type="number" />

          <label for="checked">Checked Text</label>
          <input v-model="checked" id="checked" type="text" />

          <label for="unchecked">Unchecked Text</label>
          <input v-model="unchecked" id="unchecked" type="text" />

          <label for="dotColor">Dot Color</label>
          <input v-model="dotColor" id="dotColor" type="text" />

          <label for="uncheckedBgColor">Unchecked Background Color</label>
          <input v-model="uncheckedBgColor" id="uncheckedBgColor" type="text" />
        </div>

        <div class="inputs">
          <label for="checkedBgColor">Checked Background Color</label>
          <input v-model="checkedBgColor" id="checkedBgColor" type="text" />

          <label for="disabledBg">Disabled Background Color</label>
          <input v-model="disabledBg" id="disabledBg" type="text" />

          <label for="disabled">Disabled</label>
          <input v-model="disabled" id="disabled" type="text" />

          <label for="fontColor">Font Color</label>
          <input v-model="fontColor" id="fontColor" type="text" />

          <label for="fontSize">Font Size</label>
          <input v-model="fontSize" id="fontSize" type="number" />

          <label for="fontWeight">Font Weight</label>
          <input v-model="fontWeight" id="fontWeight" type="text" />
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
          :uncheckedBgColor="uncheckedBgColor"
          :checkedBgColor="checkedBgColor"
          :disabledBg="disabledBg"
          :disabled="disabled"
          :fontColor="fontColor"
          :dotColor="dotColor"
          :fontSize="fontSize"
          :fontWeight="fontWeight"
        />
      </div>
    </div>

    <div class="container">
      <div class="toggles">
        <VueToggles @click="value = !value" :value="value" />
        <VueToggles
          @click="value = !value"
          :value="value"
          checkedBgColor="#42A3AA"
          checked="On"
          unchecked="Off"
        />
        <VueToggles
          @click="value = !value"
          :value="value"
          uncheckedBgColor="linear-gradient(to bottom right, grey, grey)"
          checkedBgColor="linear-gradient(to bottom right, red, #5850ec)"
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
    width: 75,
    height: 25,
    checked: 'On',
    unchecked: 'Off',
    uncheckedBgColor: '#939393',
    checkedBgColor: '#5850ec',
    disabledBg: '#939393',
    disabled: false,
    fontColor: '#ffffff',
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
      }
    }

    .toggles {
      display: flex;
      .bg {
        margin-right: 10px;

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
