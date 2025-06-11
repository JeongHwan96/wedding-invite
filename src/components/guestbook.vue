<template>
  <div>
    <div class="guestBook_wrap">
      <div class="title"><h2>방명록 남기기</h2></div>
      <div class="insert_wrap">
        <div class="name"><input type="text" placeholder="이름" /></div>
        <textarea name="content" rows="3" placeholder="내용"></textarea>

        <button class="submit" type="submit">남기기</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" src="./guestbook.ts"></script>

<style scoped src="../assets/css/guestbook.css"></style>
