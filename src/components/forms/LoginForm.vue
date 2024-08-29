<script setup lang="ts">
import FormComponent from '@/components/forms/FormComponent.vue'
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const loginFields = [
  {
    for: 'inputEmail',
    type: 'email',
    name: 'email',
    title: 'Email',
    model: email.value
  },
  {
    for: 'inputPassword',
    type: 'password',
    name: 'senha',
    title: 'Senha',
    model: password.value
  }
]

const rules = {
  email: 'required|email',
  senha: 'required|min:10',
}
</script>
<template>
  <FormComponent :fields="loginFields" :validation="rules" button-text="Login" />
</template>
