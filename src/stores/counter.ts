import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const counterStore = defineStore('counter', () => {
  const count = ref(0)

  function addValue(value: number) {
    count.value = value
  }
  function resetCount() {
    count.value = 0
  }
  const currentCount = computed(() => {
    return `Seu IMC é de: ${count.value}`
  })
  return {
    count, addValue, resetCount, currentCount
  }
})
