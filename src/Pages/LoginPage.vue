<script setup lang="ts">
import LoginForm from '@/components/forms/LoginForm.vue'
</script>

<template>
  <div class="container-initial">
    <div class="left-column">
      <header class="header">
        <img src="../assets/img/bmi.png" alt="" style="height: 50px; width: 50px;" />
        <h1 class="display-6 m-3">Display 4</h1>
      </header>
      <LoginForm />
    </div>
    <div class="right-column">
      <a href="equipe" class="nav-link p-0 mb-4 text-success border-bottom border-success">Equipe</a>
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
  .header {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
}

.right-column {
  display: flex;
  flex-direction: column;
  width: 50vw;
  align-items: center;
  justify-content: center;
  background-color: #e5e5e5;
}

</style>
