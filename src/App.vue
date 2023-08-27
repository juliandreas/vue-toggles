<script setup lang="ts">
import { ref } from "vue";
// import Test from "./components/VueToggles.vue";
import { VueToggles } from "vue-toggles";
import "vue-toggles/dist/style.css";

const checked = ref(false);
</script>

<template>
  <VueToggles :value="checked" @click="checked = !checked" />
</template>
