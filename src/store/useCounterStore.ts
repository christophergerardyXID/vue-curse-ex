import {defineStore} from "pinia";
import {ref} from "vue";

export const useCounterStore = defineStore('counter', () => {
    const counter = ref(0);

    const updateCounter = () => {
        counter.value += 1;
    }

    return {
        counter,
        updateCounter,
    }
});