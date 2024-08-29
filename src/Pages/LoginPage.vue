<script setup lang="ts">
import LoginForm from '@/components/forms/LoginForm.vue'
</script>

<template>
  <div class="container-initial">
    <div class="left-column">
      <header class="header">
        <img src="../assets/img/bmi.png" alt="" style="height: 50px; width: 50px" />
        <h1 class="display-6 m-3">Calculadora IMC</h1>
      </header>
      <LoginForm class="login-form" />
    </div>
    <div class="middle-gradient"></div>
    <div class="right-column">
      <header class="header">
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="h4 m-3 text-success" href="register">Cadastrar</a>
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
}

.left-column {
  display: flex;
  flex-direction: column;
  width: 50vw;
  background-color: #d8d8d7;

  .login-form {
    display: flex;
    flex-direction: column;
    width: 25vw;
    align-self: center;
  }
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 5px 0 250px 25px;
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
    font-family: "SUSE", sans-serif;
    font-weight: 800;
  }
}
</style>
