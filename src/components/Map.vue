<template>
  <div>
    <div id="map" class="map"></div>
  </div>
</template>

<script>
export default {
  /* global kakao */
  mounted() {
    this.waitForKakaoMap();
  },
  methods: {
    waitForKakaoMap() {
      if (window.kakao && window.kakao.maps) {
        this.initMap();
      } else {
        // 100ms 후 재시도
        setTimeout(this.waitForKakaoMap, 100);
      }
    },
    initMap() {
      const container = document.getElementById("map"); // 지도를 담을 영역
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도 중심좌표
        level: 3 // 확대 레벨
      };
      new kakao.maps.Map(container, options);
    }
  }
};
</script>

<style scoped>
.map {
  width: 100%;
  height: 400px;
}
</style>
