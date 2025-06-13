<template>
  <div>
    <div id="map" class="map"></div>
    <div class="change-area" id="img_tmap_prev" change-data="img"></div>
    <div class="location-trans-wrapper">
      <h3>🚇 지하철</h3>
      <p>1호선 평택역 1번 출구 배스킨라빈스 방향 도보 6분</p>

      <h3 class="spacing">🚌 버스</h3>
      <p>평택역 정류장 하차 후 배스킨라빈스 방향 도보 6분</p>

      <h3 class="spacing">📍 주소</h3>
      <p>경기도 평택시 중앙로 46 M프라자 9층(평택동 35-3)</p>
      <p>☎️ Tel. 031-650-8200</p>

      <h3 class="spacing">🅿️ 주차</h3>
      <p>건물 주차장 또는 건너편 자란 공영주차장 이용</p>
      <p><span class="star">※</span> 2시간 무료 이용 가능 이후 추가요금 발생</p>
      <h3 class="navi">네비게이션</h3>
      <img
        id="img_tmap_prev_img"
        class="width-max"
        src="../assets/img/tmap.png"
        @click="startTmap"
      />
    </div>
  </div>
</template>

<script lang="ts" src="./Map.ts"></script>

<style scoped src="../assets/css/Map.css"></style>
