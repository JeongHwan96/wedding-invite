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
        <div class="image" :class="weddingphoto.className"></div>
      </div>
    </div>

    <!-- 모달 슬라이더 -->
    <div v-show="isModalOpen" class="modal-overlay" @click.self="closeModal">
      <swiper
        ref="swiperRef"
        :initial-slide="selectedIndex"
        :lazy="true"
        :loop="true"
        class="modal-swiper"
      >
        <swiper-slide v-for="img in photo" :key="img.identifier">
          <div class="modal-image" :class="img.className"></div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <button class="modal-close" @click="closeModal">닫기</button>
    </div>
  </div>
</template>

<script lang="ts" src="./Wedding_Gallery.ts"></script>

<style scoped src="../assets/css/Wedding_Gallery.css"></style>
