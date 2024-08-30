<script setup lang="ts">
import FormComponent from '@/components/forms/FormComponent.vue'
import router from '@/router';
import { userStore } from '@/stores/users';
import { ref } from 'vue'

const store = userStore()

const name = ref()
const cpf = ref()
const email = ref()
const password = ref()
const confirmPassword = ref()

const loginFields = [
  {
    for: 'inputName',
    type: 'text',
    name: 'nome',
    title: 'Nome',
    model: name
  },
  {
    for: 'inputCpf',
    type: 'number',
    name: 'cpf',
    title: 'Cpf',
    model: cpf
  },
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
  },
  {
    for: 'inputPasswordConfirm',
    type: 'password',
    name: 'passwordConfirm',
    title: 'Confirmar senha',
    model: confirmPassword
  }
]

const rules = {
  nome: 'required|alpha_spaces',
  cpf: 'required|digits:11|integer',
  email: 'required|max:100|email',
  senha: 'required|min:7',
  passwordConfirm: 'confirmed:@senha',
}

function register(values) {
  
  if(store.isNewUser(email.value, cpf.value)) {
    router.push('/calculadora')
  }
  else {
    alert('Já existe um usuário com esse e-mail e/ou CPF')
  }
}
</script>

<template>
  <FormComponent :fields="loginFields" :validation="rules" button-text="Cadastrar" @submit="register()" />
</template>