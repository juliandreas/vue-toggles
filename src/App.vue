<template>
  <div id="app">
    <header>
      <h1>Vue Toggles</h1>
      <p>Still in Beta though..</p>
    </header>

    <VueToggles
      @click="toggle"
      :value="value"
      :checked="checked"
      :unchecked="unchecked"
      :height="height"
      :width="width"
      :uncheckedBgColor="uncheckedBgColor"
      :checkedBgColor="checkedBgColor"
      :fontSize="fontSize"
      :fontColor="fontColor"
      :fontWeight="fontWeight"
    />

    <input v-model="height" id="height" type="number" />
    <label for="height">Height</label>

    <input v-model="width" id="width" type="number" />
    <label for="width">Width</label>

    <input v-model="checked" id="checked" type="text" />
    <label for="checked">Checked Text</label>

    <input v-model="unchecked" id="unchecked" type="text" />
    <label for="unchecked">Unchecked Text</label>

    <input v-model="uncheckedBgColor" id="uncheckedBgColor" type="text" />
    <label for="uncheckedBgColor">Unchecked Background Color</label>

    <input v-model="checkedBgColor" id="checkedBgColor" type="text" />
    <label for="checkedBgColor">Checked Background Color</label>

    <input v-model="fontColor" id="fontColor" type="text" />
    <label for="fontColor">Font Color</label>

    <input v-model="fontSize" id="fontSize" type="number" />
    <label for="fontSize">Font Size</label>

    <input v-model="fontWeight" id="fontWeight" type="text" />
    <label for="fontWeight">Font Weight</label>
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
    fontColor: '#fff',
    fontSize: 12,
    fontWeight: 'normal',
  }),
  methods: {
    toggle() {
      this.value = !this.value;
    },
  },
};
</script>

<style lang="scss">
body {
  min-height: 100vh;
  background: #faf9fd;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #000;
  height: 100vh;

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

  label {
    margin-bottom: 25px;
  }

  .bg {
    margin-bottom: 50px;
  }
}
</style>
