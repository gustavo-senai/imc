<script setup lang="ts">
import LoginForm from '@/components/forms/LoginForm.vue'
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import RegisterForm from '@/components/forms/RegisterForm.vue'

const route = useRoute()

const isLoginPage = ref(true)

 if(route.path != '/') {
  isLoginPage.value = false
}
console.log(isLoginPage.value)
</script>

<template>
  <div class="container-initial">
    <div class="left-column">
      <header class="header text-success">
        <img src="../assets/img/bmi.png" alt="" style="height: 50px; width: 50px" />
        <h1 class="m-3">Calculadora IMC</h1>
      </header>
      <LoginForm v-if="isLoginPage" class="page-form" />
      <RegisterForm v-else class="page-form" />
    </div>
    <div class="middle-gradient"></div>
    <div class="right-column">
      <header class="header">
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a v-if="isLoginPage" class="h4 m-3 text-success" href="register">Cadastrar</a>
            <a v-else class="h4 m-3 text-success" href="/">Login</a>
          </li>
          <li class="nav-item">
            <a class="h4 m-3 text-success" href="equipe">Equipe</a>
          </li>
          <li class="nav-item">
            <a class="h4 m-3 text-success" href="https://abeso.org.br/">Abeso</a>
          </li>
        </ul>
      </header>
      <img
        src="../assets/img/logo.png"
        alt=""
        class="initial-image"
        style="width: 35vw; height: 60vh"
      />
    </div>
  </div>
</template>
<style scoped lang="scss">
.container-initial {
  display: flex;
  flex-direction: row;
  height: 100vh;
  font-family: "SUSE", sans-serif;
}

.left-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
  background-color: #d8d8d7;

  .page-form {
    display: flex;
    flex-direction: column;
    width: 25vw;
  }
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: flex-start !important;
  align-items: center;
  margin: 5px 0 20px 25px;
}

.middle-gradient {
  width: 10px;
  background: linear-gradient(to right, #d8d8d7, #bfbbbb);
}

.right-column {
  display: flex;
  flex-direction: column;
  width: 50vw;
  justify-content: flex-start;
  align-items: center;
  background-color: #bfbbbb;

  .header {
    margin: 50px 0 150px 25px;
    font-weight: 800;
  }
}
</style>
