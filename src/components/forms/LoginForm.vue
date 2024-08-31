<script setup lang="ts">
import FormComponent from '@/components/forms/FormComponent.vue'
import { ref } from 'vue'
import { userStore } from '@/stores/users'
import router from '@/router'

const store = userStore()

const email = ref('')
const password = ref('')

const loginFields = [
  {
    for: 'inputEmail',
    type: 'email',
    name: 'email',
    title: 'Email',
    model: email
  },
  {
    for: 'inputPassword',
    type: 'password',
    name: 'senha',
    title: 'Senha',
    model: password
  }
]

const rules = {
  email: 'required|email',
  senha: 'required|min:10',
}

function login(values) {
  email.value = values.email
  password.value = values.senha
  const authenticate = store.auth(email.value, password.value)
  console.log(authenticate)
  if (authenticate) {
    router.push('/calculadora')
  } else {
    email.value = ''
    password.value = ''
    alert('E-mail ou senha incorretos')
  }
}
</script>

<template>
  <FormComponent :fields="loginFields" :validation="rules" button-text="Login" @submit="login" />
</template>
