<template>
  <div class="container">
    <header class="header">
      <h1 class="title">🌟 Daily Tech Vocabulary 🌟</h1>
      <p class="subtitle">매일 새로운 기술 용어와 함께 성장하세요!</p>
    </header>

    <main class="main">
      <div class="card">
        <p class="description">
          매일 아침, 영어와 한국어로 정리된 기술 용어를 이메일로 받아보세요. <br />
          개발 역량을 강화하고 글로벌 커뮤니케이션 스킬을 향상시킬 수 있습니다.
        </p>
        <button class="subscribe-button" @click="subscribe">📩 구독하기</button>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
export default {
  name: 'MainPage',
  methods: {
    subscribe() {
      alert('구독 신청 페이지로 이동합니다!')
      // 실제 구독 페이지로 라우팅 로직 추가 필요
    },
  },
}
</script>

<style scoped>
/* 전체 컨테이너 */
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(to bottom, #e0f9f5, #c4fcef);
  font-family: 'Poppins', sans-serif;
  text-align: center;
  color: #333;
  overflow: hidden;
}

/* 헤더 */
.header {
  margin-top: 50px;
  animation: fadeInDown 1s ease;
}

.title {
  font-size: 3rem;
  font-weight: 700;
  color: #006d5b;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.subtitle {
  font-size: 1.2rem;
  margin-top: 10px;
  color: #444;
}

/* 메인 카드 */
.main {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.card {
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  padding: 30px;
  max-width: 600px;
  animation: fadeInUp 1s ease;
}

.description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
  margin-bottom: 20px;
}

/* 구독 버튼 */
.subscribe-button {
  padding: 15px 40px;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  background-color: #006d5b;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.subscribe-button:hover {
  background-color: #004d43;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

/* 애니메이션 */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
