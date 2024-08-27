<script setup lang="ts">
import weightTypes from '@/components/CardTipo/types'
import { onUpdated, ref } from 'vue'
import { counterStore } from '@/stores/counter'

const store = counterStore()
const imc = ref(0)
const types = weightTypes
const cardColor = ref('')
const textColor = ref('')
const range = ref()

const imcRanges = [
  { min: 40.0, max: Infinity, interval: 1, color: 'danger' },
  { min: 35.0, max: 39.9, interval: 2, color: 'danger' },
  { min: 30.0, max: 34.9, interval: 3, color: 'danger' },
  { min: 25.0, max: 29.9, interval: 4, color: 'warning' },
  { min: 18.6, max: 24.9, interval: 5, color: 'info' },
  { min: 1, max: 18.5, interval: 6, color: 'warning' }
]

const matchedRange = () => {
  console.log('aqui')
  range.value = imcRanges.find((range) => imc.value >= range.min && imc.value <= range.max)
  if (range.value) {
    cardColor.value = `border-4 border-${range.value.color}`
    textColor.value = `text-${range.value.color}`
  } else {
    cardColor.value = `border-black`
    textColor.value = `card-text`
  }
}
onUpdated(() => {
  console.log(store.count)
  imc.value = store.count
  matchedRange()
  console.log(range.value)
})
</script>
<template>
      <h6 class="text-center">{{ store.currentCount }}</h6>
  <div class="type-container">
    <div
      :class="`card p-2 ${range?.interval == type.value ? cardColor : 'border-none'}`"
      style="width: 300px"
      v-for="(type, value) in types"
      :key="value"
    >
      <img
        :src="type.img"
        :alt="type.title"
        class="card-img-top mx-auto"
        style="height: 250px; width: 200px"
      />
      <div class="card-body">
        <h4 :class="range?.interval == type.value ? textColor : 'card-text'">
          {{ type.title }}
        </h4>
        <h6 class="card-subtitle mb-2 text-body-secondary">{{ type.interval }}</h6>
        <p class="card-text">{{ type.description }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.type-container {
  display: flex;
  flex: 1 1 auto;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>
