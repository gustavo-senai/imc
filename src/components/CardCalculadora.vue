<script setup lang="ts">
import { onUnmounted, ref } from 'vue'
import { counterStore } from '@/stores/counter'

const store = counterStore()
const weight = ref<number>()
const height = ref<number>()
const imcValue = ref<number>()

function calculate() {
  if (weight.value && height.value) {
    imcValue.value = (weight.value / (height.value * height.value)).toFixed(1)
    store.addValue(imcValue.value)
  } else {
    alert('Informe seu peso e altura para calcular o IMC')
  }
}

onUnmounted(() => store.resetCount())
</script>

<template>
  <div class="calculator-container p-4 mx-auto my-5">
    <div class="input-group mb-3">
      <span class="input-group-text border border-success">Peso(Kg)</span>
      <input v-model="weight" type="number" class="form-control border border-success" />
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text border border-success">Altura(m)</span>
      <input v-model="height" type="number" class="form-control border border-success" />
    </div>
    <button type="button" class="btn btn-success" @click="calculate">Calcular IMC</button>
  </div>
</template>

<style scoped lang="scss">
.calculator-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vh;
  border: 3px solid #198754;
  border-radius: 15px;
}
</style>
