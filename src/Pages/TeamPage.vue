<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import DevCard from '@/components/CardDev/DevCard.vue'
</script>

<template>
  <NavBar />
  <div class="team-page">
    <h1 class="text-center text-success">Equipe</h1>
    <DevCard />
  </div>
</template>
<style scoped lang="scss">
  .team-page {
    background-color: #bfbbbb;
  }
</style>
