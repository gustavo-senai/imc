<script setup lang="ts">
import type { FormProps } from './types'
import FormButton from '@/components/forms/FormButton.vue'
import { reactive } from 'vue'

const props = defineProps<FormProps>()
const emit = defineEmits<{
  (e: 'submit', values: Record<string, any>): void
}>()

const fields = reactive(
  props.fields.map((field) => ({
    for: field.for,
    type: field.type,
    name: field.name,
    title: field.title,
    model: field.model
  }))
)

function submit(values) {
  emit('submit', values)
  console.log('emitido', values)
}
</script>

<template>
  <VeeForm :validation-schema="props.validation" @submit="submit">
    <div class="mb-3" v-for="field in fields" :key="field.name">
      <label :for="field.for" class="form-label">{{ field.title }}</label>
      <VeeField :name="field.name" :bails="false" v-slot="{ field, errors }">
        <input
          :id="field.for"
          :type="field.type"
          v-model="field.model"
          class="form-control"
          v-bind="field"
        />
        <div class="text-danger" v-for="(error, index) in errors" :key="index">
          {{ error }}
        </div>
      </VeeField>
    </div>
    <FormButton>{{ props.buttonText }}</FormButton>
  </VeeForm>
</template>
