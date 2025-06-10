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
        center: new kakao.maps.LatLng(36.99430453447451, 127.08792010448062), // 지도 중심좌표
        level: 2 // 확대 레벨
      };
      var map = new kakao.maps.Map(container, options);
      // 마커가 표시될 위치입니다
      var markerPosition = new kakao.maps.LatLng(36.99430453447451, 127.08792010448062);
      var iwContent =
        '<div style="padding:0 auto;">드마레 웨딩컨벤션 <br><a href="https://map.kakao.com/link/to/드마레 웨딩컨벤션,36.99430453447451, 127.08792010448062" style="color:blue" target="_blank">길찾기</a></div>';
      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        position: markerPosition
      });

      // 인포윈도우를 생성합니다
      var infowindow = new kakao.maps.InfoWindow({
        position: markerPosition,
        content: iwContent
      });

      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(map);
      infowindow.open(map, marker);
    },

    setDraggable(draggable) {
      const container = document.getElementById("map"); // 지도를 담을 영역
      const options = {
        center: new kakao.maps.LatLng(36.994465, 127.087989), // 지도 중심좌표
        level: 3 // 확대 레벨
      };
      var map = new kakao.maps.Map(container, options);
      map.setDraggable(draggable);
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
