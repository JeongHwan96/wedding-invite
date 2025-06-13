// src/components/Map.ts
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class KakaoMap extends Vue {
  private map: any = null; // kakao.maps.Map 타입은 any로 둠
  private marker: any = null;
  urlComponent = "드마레웨딩컨벤션";
  destination = encodeURIComponent(this.urlComponent);
  lat = 36.99430453447451;
  lon = 127.08792010448062;
  fallback = "https://play.google.com/store/apps/details?id=com.skt.tmap.ku";
  url = `tmap://route?goalname=${this.destination}&goalx=${this.lon}&goaly=${this.lat}&appname=JKNavigation`;

  mounted() {
    this.waitForKakaoMap();
  }

  waitForKakaoMap() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      setTimeout(() => this.waitForKakaoMap(), 100);
    }
  }

  initMap() {
    const container = document.getElementById("map");
    if (!container) return;

    const options = {
      center: new window.kakao.maps.LatLng(36.99430453447451, 127.08792010448062),
      level: 3,
      draggable: true
    };

    this.map = new window.kakao.maps.Map(container, options);

    const markerPosition = new window.kakao.maps.LatLng(36.99430453447451, 127.08792010448062);

    // 마커 아이콘 직접 지정 (예시)
    const markerImageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png";
    const markerImageSize = new window.kakao.maps.Size(24, 35);
    const markerImageOptions = { offset: new window.kakao.maps.Point(12, 35) };
    const markerImage = new window.kakao.maps.MarkerImage(
      markerImageSrc,
      markerImageSize,
      markerImageOptions
    );

    this.marker = new window.kakao.maps.Marker({
      position: markerPosition,
      image: markerImage
    });

    const iwContent = `<div style="padding:10px;">
        드마레 웨딩컨벤션 <br>
        <a href="https://map.kakao.com/link/to/드마레 웨딩컨벤션,36.99430453447451,127.08792010448062" target="_blank" style="color:#e88535;">길찾기</a>
      </div>`;

    const infowindow = new window.kakao.maps.InfoWindow({
      content: iwContent,
      position: markerPosition
    });

    this.marker.setMap(this.map);
    infowindow.open(this.map, this.marker);
  }

  // Tmap 시작
  startTmap() {
    window.location.href = this.url;
    setTimeout(() => {
      window.location.href = this.fallback;
    }, 1500); // Tmap 미설치 시
  }
}
