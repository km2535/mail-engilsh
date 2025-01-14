<template>
    <v-row gap="4">
      <v-col>
        <CardItem :data="backend" />
      </v-col>
      <v-col>
        <CardItem :data="frontend" />
      </v-col>
      <v-col>
        <CardItem :data="infra" />
      </v-col>
      <v-col>
        <CardItem :data="fullstack" />
      </v-col>
    </v-row>
  <RouterView/>
</template>

<script lang="ts">
import ContentsApi from '@/api/modules/contentsApi.ts'
import type { CommonContents } from '@/api/type/Contents.ts'
import CardItem from '@/components/blog/CardItem.vue'

export default {
  components: { CardItem },
  data() {
    return {
      backend: { title: '백엔드', boardCount: 0, url: 'back-end' },
      frontend: { title: '프론트', boardCount: 0, url: 'front-end' },
      fullstack: { title: '풀스택', boardCount: 0, url: 'full-stack' },
      infra: { title: '인프라', boardCount: 0, url: 'infra' },
    }
  },
  methods: {
    async getBoardCount() {
      return await ContentsApi.contentsCount<CommonContents>()
        .then((res) => res.data)
        .then((data) => {
          this.backend.boardCount = <number>data?.backendBoardCount
          this.frontend.boardCount = <number>data?.frontendBoardCount
          this.fullstack.boardCount = <number>data?.fullstackBoardCount
          this.infra.boardCount = <number>data?.infraBoardCount
        })
    },
  },
  beforeMount() {
    this.getBoardCount()
  },
}
</script>

<style scoped></style>
