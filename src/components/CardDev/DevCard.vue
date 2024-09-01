<script setup lang="ts">
import devs from './devs';
</script>
<template>
  <div class="dev-container">
    <div class="card p-1 m-1 rounded" v-for="(dev, index) in devs" :key="index" style="width: 300px">
      <img
        :src="dev.img"
        :alt="`${dev.name} foto`"
        class="card-img-top py-2 mx-auto rounded-circle"
        style="height: 200px; width: 200px"
      />
      <div class="card-body">
        <h4 class="card-text text-center">
          {{ dev.name }}
        </h4>
        <div v-for="link in dev.links" :key="link.url" class="card p-1 link-card">
          <img :src="link.logo" alt="Logo" class="" style="height: 80px; width: 80px" />
          <a
            :href="link.url"
            target="_blank"
            class="link-offset-2 link-offset-3-hover link-underline p-1 link-underline-opacity-0 link-underline-opacity-100-hover"
            >{{ link.nickname }}</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.dev-container {
  display: flex;
  flex: 1 1 auto;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}
.link-card {
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  flex-direction: row;
}
</style>
