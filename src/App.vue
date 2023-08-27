<script setup lang="ts">
import { ref } from 'vue';
import VueToggles from './components/VueToggles.vue';

const checked = ref(false);
</script>

<template>
  <p>Toggle me</p>
  <VueToggles :value="checked" @click="checked = !checked" />
</template>
