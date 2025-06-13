// src/components/Map.ts
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Map extends Vue {
  private map: any = null;
  private marker: any = null;

  urlComponent = "드마레웨딩컨벤션";
  destination = encodeURIComponent(this.urlComponent);
  lat = 36.99430453447451;
  lon = 127.08792010448062;

  tmapScheme = `tmap://route?goalname=${this.destination}&goalx=${this.lon}&goaly=${this.lat}&appname=JKNavigation`;
  tmapIntent = `intent://route?goalname=${this.destination}&goalx=${this.lon}&goaly=${this.lat}#Intent;scheme=tmap;package=com.skt.tmap.ku;end`;
  tmapFallback = "https://play.google.com/store/apps/details?id=com.skt.tmap.ku";

  kakaoScheme = `kakaomap://route?ep=${this.lat},${this.lon}&ename=${this.urlComponent}&by=CAR`;
  kakaoIntent = `intent://route?ep=${this.lat},${this.lon}&ename=${this.urlComponent}&by=CAR#Intent;scheme=kakaomap;package=net.daum.android.map;end`;
  kakaoFallback = "https://play.google.com/store/apps/details?id=net.daum.android.map";

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
      center: new window.kakao.maps.LatLng(this.lat, this.lon),
      level: 3,
      draggable: true
    };

    this.map = new window.kakao.maps.Map(container, options);

    const markerPosition = new window.kakao.maps.LatLng(this.lat, this.lon);

    const markerImage = new window.kakao.maps.MarkerImage(
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png",
      new window.kakao.maps.Size(24, 35),
      { offset: new window.kakao.maps.Point(12, 35) }
    );

    this.marker = new window.kakao.maps.Marker({
      position: markerPosition,
      image: markerImage
    });

    const iwContent = `<div style="padding:10px;">${this.urlComponent} <br></div>`;
    const infowindow = new window.kakao.maps.InfoWindow({
      content: iwContent,
      position: markerPosition
    });

    this.marker.setMap(this.map);
    infowindow.open(this.map, this.marker);
  }

  private isIOS(): boolean {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
  }

  private isAndroid(): boolean {
    return /Android/i.test(navigator.userAgent);
  }

  private openApp(url: string, fallbackUrl: string) {
    const now = Date.now();
    window.location.href = url;

    // fallback: 앱이 실행되지 않으면 일정 시간 후 스토어로 이동
    setTimeout(() => {
      if (Date.now() - now < 2200) {
        window.location.href = fallbackUrl;
      }
    }, 2000);
  }

  public startTmap() {
    if (this.isAndroid()) {
      this.openApp(this.tmapIntent, this.tmapFallback);
    } else if (this.isIOS()) {
      this.openApp(this.tmapScheme, this.tmapFallback);
    } else {
      alert("지원하지 않는 OS입니다.");
    }
  }

  public startKakaoMap() {
    if (this.isAndroid()) {
      this.openApp(this.kakaoIntent, this.kakaoFallback);
    } else if (this.isIOS()) {
      this.openApp(this.kakaoScheme, this.kakaoFallback);
    } else {
      alert("지원하지 않는 OS입니다.");
    }
  }
}
