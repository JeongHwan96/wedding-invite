<template>
  <div class="container">
    <div class="title">
      <p>Gallery</p>
      <h3>슬라이드 하여 넘겨 볼 수 있어요</h3>
    </div>

    <div class="players">
      <div
        class="player"
        v-for="(weddingphoto, index) in photo"
        :key="weddingphoto.identifier"
        @click="openModal(index)"
      >
        <div class="image" :class="weddingphoto.className">
          <img class="modal-image" :src="getImageUrl(weddingphoto.className)" alt="웨딩 이미지" />
        </div>
      </div>
    </div>

    <!-- 모달 슬라이더 -->
    <div v-show="isModalOpen" class="modal-overlay" @click.self="closeModal">
      <div class="swiper-container" ref="swiperContainer">
        <!-- ✅ Swiper 외부로 이동한 닫기 버튼 -->
        <button class="modal-close" @click="closeModal">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path
              d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7a1 1 0 0 0-1.41 1.42L10.59 12l-4.89 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z"
            />
          </svg>
        </button>

        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="img in photo" :key="img.identifier">
            <img class="modal-image" :src="getImageUrl(img.className)" alt="웨딩 이미지" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./Wedding_Gallery.ts"></script>
<style scoped src="../assets/css/Wedding_Gallery.css"></style>
