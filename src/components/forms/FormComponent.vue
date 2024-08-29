<script setup lang="ts">
import type { FormProps, FormField } from './types'
import FormButton from '@/components/forms/FormButton.vue'
import { userStore } from '@/stores/users'

const props = defineProps<FormProps>()

const store = userStore()

const fields: FormField[] = props.fields.map((field) => ({
  for: field.for,
  type: field.type,
  name: field.name,
  title: field.title,
  model: field.model
}))

function register(values) {
  if (values.cpf) {
    if (!store.isNewUser(values.email, values.cpf)) {
      store.addUser(values.nome, values.email, values.senha, values.cpf)
      console.log(store.users)
    } else {
      alert('Usuário já existente')
    }
  } else {
    store.auth(values.email, values.senha)
  }
}
</script>

<template>
  <VeeForm :validation-schema="props.validation" @submit="register">
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
