<script setup lang="ts">
import {useCounterStore} from "../store/useCounterStore.ts";
import {storeToRefs} from "pinia";

const { counter } = storeToRefs(useCounterStore());
const { updateCounter } = useCounterStore();
</script>

<template>
  <h1>
    About page
  </h1>

  <code>
    {{ counter }}
  </code>

  <button @click="updateCounter">
    Aumentar contador
  </button>
</template>

<style scoped>

</style>