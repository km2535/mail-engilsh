<template>
  <nav class="navbar">
    <div class="nav-container">
      <!-- 로고 -->
      <a href="#" class="logo">🌟 Tech Vocab</a>

      <!-- 네비게이션 메뉴 -->
      <ul class="nav-menu">
        <li class="nav-item">
          <RouterLink class="nav-link" :class="{ active: isActive('/') }" to="/"> Home </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" :class="{ active: isActive('/tech') }" to="/tech">
            기술용어
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  computed: {
    // 현재 경로 가져오기
    currentPath() {
      return this.$route.path
    },
  },
  methods: {
    isActive(path: string) {
      return this.currentPath === path
    },
  },
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #ffffffcc;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  font-family: 'Poppins', sans-serif;
}

/* 내부 정렬 및 간격 */
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 20px;
}

/* 로고 스타일 */
.logo {
  font-size: 1.8rem;
  font-weight: bold;
  color: #006d5b;
  text-decoration: none;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.1);
}

/* 네비게이션 메뉴 */
.nav-menu {
  display: flex;
  list-style: none;
  gap: 20px;
  margin: 0;
  padding: 0;
}

/* 메뉴 항목 */
.nav-item {
  display: flex;
}

/* 메뉴 링크 스타일 */
.nav-link {
  text-decoration: none;
  font-size: 1rem;
  color: #333;
  padding: 8px 15px;
  border-radius: 20px;
  transition: all 0.3s ease;
}

.nav-link.active {
  color: white;
  background-color: #006d5b;
  box-shadow: 0 4px 10px rgba(0, 109, 91, 0.3);
}

.nav-link:hover {
  color: white;
  background-color: #007f6d;
  box-shadow: 0 4px 12px rgba(0, 127, 109, 0.3);
}
</style>
