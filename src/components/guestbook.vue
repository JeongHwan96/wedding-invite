<template>
  <div class="guestBook_wrap">
    <div class="title"><h2>방명록 남기기</h2></div>
    <div class="insert_wrap">
      <input type="text" v-model="name" placeholder="이름" />
      <textarea v-model="content" rows="3" placeholder="내용"></textarea>
      <button class="submit" @click="submitMessage">남기기</button>
    </div>

    <div class="message_list">
      <div class="message" v-for="(msg, index) in messages" :key="index">
        <strong>{{ msg.name }}</strong
        >: {{ msg.content }}
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./guestbook.ts"></script>
<style scoped src="../assets/css/guestbook.css"></style>
