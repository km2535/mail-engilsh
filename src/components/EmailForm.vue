<template>
  <div>
    <!-- 모달을 여는 버튼 -->
    <button class="subscribe-button" @click="isModalOpen = true">📩 구독하기</button>

    <!-- 모달 창 -->
    <div v-if="isModalOpen" class="modal-backdrop">
      <div class="modal">
        <div class="modal-header">
          <h2>메일 구독</h2>
          <button class="close-btn" @click="isModalOpen = false">✕</button>
        </div>
        <div class="modal-body">
          <p>최신 기술 용어를 매일 이메일로 받아보세요!</p>
          <form @submit.prevent="subscribe">
            <select v-model="tech">
              <option value="BACKEND" selected>백엔드</option>
              <option value="FRONTEND">프론트엔드</option>
              <option value="FULLSTACK">풀스택</option>
              <option value="INFRA">인프라</option>
            </select>
            <input
              type="email"
              v-model="email"
              placeholder="이메일 주소 입력"
              class="email-input"
              required
            />
            <button type="submit" class="submit-btn">구독하기</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import subscribeApi from '@/api/modules/subscribeApi.ts'
import type { SubscribeRequest, SubscribeResponse } from '@/api/type/Subscribe.ts'

export default {
  data() {
    return {
      isModalOpen: false, // 모달 열림 상태
      email: '', // 사용자 이메일
      tech: 'BACKEND',
    }
  },
  methods: {
    async subscribe() {
      if (this.email) {
        const data: SubscribeRequest = {
          email: this.email,
          tech: this.tech,
        }
        await subscribeApi.subscribeContents<SubscribeResponse>(data).then((res) => {
          if (res.result == 'FAIL') {
            alert(`구독 실패 :  ${res.errorMessageForClient}`)
            return res.errorMessageForClient
          }
          alert(`구독이 완료되었습니다: ${this.email} ${this.tech}`)
        })
        //이메일로 구독하는 API
        this.email = '' // 입력 필드 초기화
        this.isModalOpen = false // 모달 닫기
      } else {
        alert('이메일을 입력해주세요.')
      }
    },
  },
}
</script>

<style scoped>
/* 모달 배경 */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

/* 모달 창 */
.modal {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 400px;
  animation: fadeIn 0.3s ease-in-out;
}

/* 모달 헤더 */
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.modal-header h2 {
  font-size: 1.5rem;
  color: #333;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: #888;
  transition: color 0.3s ease;
}

.close-btn:hover {
  color: #000;
}

/* 모달 본문 */
.modal-body {
  text-align: center;
}

.modal-body p {
  font-size: 1rem;
  margin-bottom: 20px;
  color: #555;
}

/* 이메일 입력 필드 */
.email-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 15px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease;
}

.email-input:focus {
  border-color: #006d5b;
}

/* 구독 버튼 */
.submit-btn {
  background-color: #006d5b;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #007f6d;
}

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
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
