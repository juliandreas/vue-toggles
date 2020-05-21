<template>
  <div id="app">
    <h1>Vue Toggles</h1>
    <SimpleToggle
      style="margin-bottom: 20px;"
      :value="testy"
      @click="toggle"
      checked="On"
      unchecked="Off"
    />

    <ShortToggle @click="toggle" />
  </div>
</template>

<script>
import SimpleToggle from "@/components/SimpleToggle.vue";
import ShortToggle from "@/components/ShortToggle.vue";

export default {
  name: "App",
  components: {
    SimpleToggle,
    ShortToggle,
  },
  data: () => ({
    testy: false,
  }),
  methods: {
    toggle(payload) {
      this.testy = payload;
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
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

  h1 {
    background: linear-gradient(to bottom right, #939393, #5850ec);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 50px;
  }
}
</style>
