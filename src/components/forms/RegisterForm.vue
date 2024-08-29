<script setup lang="ts">
import FormComponent from '@/components/forms/FormComponent.vue'
import { ref } from 'vue'

const name = ref('')
const cpf = ref()
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const loginFields = [
  {
    for: 'inputName',
    type: 'text',
    name: 'nome',
    title: 'Nome',
    model: name.value
  },
  {
    for: 'inputCpf',
    type: 'number',
    name: 'cpf',
    title: 'Cpf',
    model: cpf.value
  },
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
  nome: 'required|alpha_spaces',
  cpf: 'required|digits:11',
  email: 'required|min:7|max:100|email',
  senha: 'required|min:10',
  passwordConfirm: 'confirmed:@senha',
}
</script>

<template>
  <FormComponent :fields="loginFields" :validation="rules" button-text="Cadastrar" />
</template>