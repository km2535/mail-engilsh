<script lang="ts">
import { defineComponent, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'BlogView',
  setup() {
    const route = useRoute();

    // URL 변경 및 초기 로직 처리 함수
    const handleRouteChange = (currentPath: string) => {
      console.log('현재 URL:', currentPath);

      // 여기에 URL 변경 시 수행할 로직을 추가
    };

    // 컴포넌트 초기 로드 시 실행
    onMounted(() => {
      handleRouteChange(route.fullPath); // 초기 URL 처리
    });

    // URL 변경 감지
    watch(
      () => route.fullPath,
      (newPath) => {
        console.log('URL 변경 감지:', newPath);
        handleRouteChange(newPath); // URL 변경 시 처리
      }
    );

    return {};
  },
});
</script>

<template>
  <div>
    <h1>Blog View</h1>
  </div>
</template>

<style scoped>
/* 스타일 추가 */
</style>
