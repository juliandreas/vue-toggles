<template>
  <div id="app">
    <span role="checkbox" tabindex="0" aria-checked="false" class="first">
      <span aria-hidden="true" class="second" :class="{ hoger: test }"></span>
    </span>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    test: false,
  }),
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
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  height: 100vh;
}

.first {
  width: 50px;
  height: 25px;
  background: grey;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
  border: 2px solid black;
  border-radius: 6px;
}

.second {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #fff;
}

.hoger {
  transform: translateX(25px);
}
</style>
