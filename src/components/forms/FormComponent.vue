<script setup lang="ts">
import { FormProps, FormField } from './types'
import FormButton from '@/components/forms/FormButton.vue'

const props = defineProps<FormProps>()

const fields: FormField[] = props.fields.map((field) => ({
  for: field.for,
  type: field.type,
  name: field.name,
  title: field.title,
  model: field.model
}))

function register(values) {
  console.log(values)
}
</script>

<template>
  <VeeForm :validation-schema="props.validation" @submit="register">
    <div class="mb-3" v-for="field in fields" :key="field.name">
      <label :for="field.for" class="form-label">{{ field.title }}</label>
      <VeeField :name="field.name" :bails="false" v-slot="{ field, errors }">
        <input
          :type="field.type"
          v-model="field.model"
          class="form-control"
          :id="field.for"
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
