<script setup lang="ts">
import { ref } from "vue";
import VueToggles from "./components/VueToggles.vue";

const isChecked = ref(false);
</script>

<template>
  <VueToggles :value="isChecked" @click="isChecked = !isChecked" />
</template>
