<script setup lang="ts">
import { defineProps } from 'vue'
import type CardDto from '@/api/type/CardDto.ts'

defineProps<{ data: CardDto }>()
</script>

<template>
  <RouterLink :to="`/tech/${data.url}`">
    <v-card class="v-card--hover">
      <v-card-title class="card-title">{{ data.title }}</v-card-title>
      <v-card-subtitle class="card-subtitle">{{ data.boardCount }}</v-card-subtitle>
    </v-card>
  </RouterLink>
</template>

<style scoped>
.card-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #333333;
  margin-bottom: 10px;
  letter-spacing: 1px;
  font-family: 'Poppins', sans-serif;
  transition: color 0.3s ease;
  text-align: center;
}

/* 부제목 꾸미기 */
.card-subtitle {
  text-align: center;
  font-size: 1.1rem;
  color: #666666;
  margin-bottom: 20px;
  font-family: 'Roboto', sans-serif;
  transition: color 0.3s ease;
}

/* 카드 hover 시 효과 */
.card-title {
  color: #006d5b; /* hover 시 제목 색상 변화 */
}

.card-subtitle {
  color: #007f6d; /* hover 시 부제목 색상 변화 */
}
</style>
