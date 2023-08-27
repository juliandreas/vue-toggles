<script setup lang="ts">
import { ref } from 'vue';
import TestButton from './TestButton.vue';

const checked = ref(false);
</script>

<template>
  <p>Toggle me</p>

  <TestButton :value="checked" @click="checked = !checked" />
</template>
