import FormPage from '@/Pages/FormPage.vue'
import CalculatorPage from '@/Pages/CalculatorPage.vue'
import TeamPage from '@/Pages/TeamPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: FormPage
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
      component: FormPage
    }
  ]
})

export default router
