import LoginPage from '@/Pages/LoginPage.vue'
import CalculatorPage from '@/Pages/CalculatorPage.vue'
import TeamPage from '@/Pages/TeamPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import RegisterPage from '@/Pages/RegisterPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LoginPage
    },
    {
      path: '/equipe',
      name: 'equipe',
      component: TeamPage
    },
    {
      path: '/calculadora',
      name: 'calculadora',
      component: CalculatorPage
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage
    }
  ]
})

export default router
