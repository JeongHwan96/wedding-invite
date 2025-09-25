<template>
  <div class="share">
    <h3>다른 분들께 공유가 필요하면 카카오톡으로 공유해주세요</h3>

    <div class="kakaoshare" @click="shareKakao">
      <img
        class="kakao-btn"
        src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_small.png"
        alt=""
      />
      카카오톡 공유
    </div>
  </div>
</template>

<script lang="ts" src="./SnsShare.ts"></script>
<style scoped src="../assets/css/SnsShare.css"></style>
