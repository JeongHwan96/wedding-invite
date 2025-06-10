<template>
  <div class="container">
    <div class="title">
      <p>Gallery</p>
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
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="img in photo" :key="img.identifier">
            <img class="modal-image" :src="getImageUrl(img.className)" alt="웨딩 이미지" />
          </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
      <button class="modal-close" @click="closeModal">닫기</button>
    </div>
  </div>
</template>

<script lang="ts" src="./Wedding_Gallery.ts"></script>

<style scoped src="../assets/css/Wedding_Gallery.css"></style>
