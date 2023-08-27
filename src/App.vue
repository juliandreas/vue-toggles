<script setup lang="ts">
import { ref } from "vue";
// import VueToggles from "./components/VueToggles.vue";
import { VueToggles } from "vue-toggles";

const checked = ref(false);
</script>

<template>
  <VueToggles :value="checked" @click="checked = !checked" />
</template>
