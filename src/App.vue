<template>
  <div id="app">
    <header>
      <h1>Vue Toggles</h1>
      <p>Still in Alpha, do not use.. yet</p>
    </header>

    <SimpleToggle
      @click="toggle"
      :value="value"
      checked="On"
      unchecked="Off"
      height="30"
      width="90"
      class="margin"
      uncheckedBgColor="lightgrey"
      checkedBgColor="#b4d455"
      fontSize="12"
      fontColor="#000"
      fontWeight="bold"
    />

    <SimpleToggle @click="toggle" :value="value" class="margin" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    value: false,
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
  background: #2c3e50;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  height: 100vh;

  header {
    background: linear-gradient(to bottom right, #939393, #5850ec);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 50px;

    h1 {
      margin-bottom: 10px;
    }
  }

  .margin {
    margin-bottom: 20px;
  }
}
</style>
