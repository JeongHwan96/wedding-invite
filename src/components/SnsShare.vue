<template>
  <div class="share">
    <div class="kakaoshare" @click="shareKakao">
      <img
        class="kakao-btn"
        src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_small.png"
        alt=""
      />
      <span class="KakaoShareText">카카오톡 공유</span>
    </div>
  </div>
</template>

<script lang="ts" src="./SnsShare.ts"></script>
<style scoped src="../assets/css/SnsShare.css"></style>
