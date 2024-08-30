import { defineStore } from 'pinia'
import User from '@/classes/User'
import { ref } from 'vue'

export const userStore = defineStore('counter', () => {
  const users = [
    {
      nome: 'Gustavo',
      email: 'gustavo@example.com',
      senha: 'Gustavo123!',
      cpf: '12345678901'
    },
    {
      nome: 'Wagner',
      email: 'wagner@example.com',
      senha: 'Wagner456!',
      cpf: '23456789012'
    },
    {
      nome: 'Marcos',
      email: 'marcos@example.com',
      senha: 'Marcos789!',
      cpf: '34567890123'
    },
    {
      nome: 'Luan',
      email: 'luan@example.com',
      senha: 'Luan321!',
      cpf: '45678901234'
    },
    {
      nome: 'Matheus',
      email: 'matheus@example.com',
      senha: 'Matheus654!',
      cpf: '56789012345'
    }
  ]

  const failCounter = ref(0)

  function isNewUser(email: string, cpf: number) {
    return users.some((user) => user.email === email || user.cpf == cpf)
  }

  function addUser(name: string, email: string, password: string, cpf: number) {
    const newUser = new User(name, email, password, cpf)
    users.push(newUser)
  }

  function auth(email: string, password: string) {
    const userTryingToLogin =
      users.find((user) => user.email === email)
    if (userTryingToLogin?.senha == password) {
      return true
    } else {
      failCounter.value++
      return false
    }
  }

  return {
    users,
    isNewUser,
    addUser,
    auth
  }
})
