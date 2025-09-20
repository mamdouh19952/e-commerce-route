import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);

  function increment() {
    count.value++;
  }
  const decrement = computed(() => count.value - 1);

  return {
    count,
    increment,
    decrement,
  };
});
