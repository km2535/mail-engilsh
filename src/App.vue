<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from '@/components/NavbarBoot.vue'
import Footer from '@/components/FooterBoot.vue'
</script>

<template>
  <div class="nav">
    <Navbar />
  </div>
  <div class="container">
    <RouterView />
  </div>
  <Footer />
</template>

<style scoped>
.nav {
  display: block;
  width: 100%;
  height: 100px;
}
</style>
