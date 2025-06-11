<template>
  <div>
    <div id="map" class="map"></div>
    <div class="location-trans-wrapper">
      <h3>지하철</h3>
      <p>1호선 평택역 1번 출구 강남약국 방향 도보 6분</p>
      <h3 class="spacing">버스</h3>
      <p>평택역 정류장 하차 후 강남약국 방향 도보 6분</p>
      <h3 class="spacing">주소</h3>
      <p>경기도 평택시 중앙로 46 M프라자 9층(평택동 35-3)</p>
      <p>Tel. 031-650-8200</p>
      <h3 class="spacing">주차</h3>
      <p>건물 주차장 또는 건너편 자란 공영주차장 이용</p>
      <p><span class="star">*</span> 2시간 무료 이용 가능 이후 추가요금 발생</p>
    </div>
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

<style scoped src="../assets/css/Map.css"></style>
