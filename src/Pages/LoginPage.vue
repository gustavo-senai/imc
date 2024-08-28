<script setup lang="ts">
import FormComponent from '@/components/forms/FormComponent.vue'
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const confirmPassword = ref('')

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
  },
  {
    for: 'inputPasswordConfirm',
    type: 'password',
    name: 'passwordConfirm',
    title: 'Confirmar senha',
    model: confirmPassword.value,
  }
]

const rules = {
  email: 'required|min:7|max:100|email',
  senha: 'required|min:10',
  passwordConfirm: 'confirmed:@senha',
}
</script>
<template>
  <FormComponent :fields="loginFields" :validation="rules" button-text="Login" />
</template>
