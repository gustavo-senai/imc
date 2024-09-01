<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import DevCard from '@/components/CardDev/DevCard.vue'
</script>

<template>
  <NavBar />
  <div class="team-page">
    <h1 class="text-center text-success p-2">Equipe</h1>
    <DevCard />
  </div>
</template>
<style scoped lang="scss">
.team-page {
  background-color: #bfbbbb;
  height: 100vh;
  font-family: 'SUSE', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
}
</style>
