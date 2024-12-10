<script setup lang="ts">

import {computed, reactive, ref} from "vue";

const isActice = ref(false);
const textSize = ref(0);

const pStyle = computed(() => ({
  fontSize: `${textSize.value}px`
}))

const pClass = computed(() => ({
  'bg-red': isActice.value,
}))

const toggle = () => {
  isActice.value = !isActice.value
}
</script>

<template>
  <router-view />

  <input
      placeholder="Text size"
      type="number"
      v-model="textSize"
  />

  <p :class="pClass" :style="pStyle">
    Hola mundo
  </p>

  <button @click="toggle">
    hola
  </button>
</template>

<style scoped>
.bg-red {
  background: red;
  color: white;
}
</style>
