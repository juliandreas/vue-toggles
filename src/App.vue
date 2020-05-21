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
      class="margin"
    />

    <SimpleToggle @click="toggle" :value="value" class="margin" />
  </div>
</template>

<script>
export default {
  name: "App",
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

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
