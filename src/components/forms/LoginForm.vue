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

function submit(values) {
  console.log('aqui')
  if (!store.isNewUser(values.email, values.cpf)) {
    store.addUser(values.nome, values.email, values.senha, values.cpf)
    router.push('/calculadora')
  } else {
     return alert('Usuário já existente')
  }
}
</script>
<template>
  <FormComponent :fields="loginFields" :validation="rules" button-text="Login" />
</template>
