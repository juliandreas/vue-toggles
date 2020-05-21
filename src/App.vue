<template>
  <div id="app">
    <SimpleToggle :value="testy" @change="yup" checked="On" unchecked="Off" />
    {{ testy }}
  </div>
</template>

<script>
import SimpleToggle from "@/components/SimpleToggle.vue";

export default {
  name: "App",
  components: {
    SimpleToggle,
  },
  data: () => ({
    testy: false,
  }),
  methods: {
    yup(event) {
      this.testy = event.value;
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
  justify-content: center;
  align-items: center;
  color: #fff;
  height: 100vh;
}
</style>
