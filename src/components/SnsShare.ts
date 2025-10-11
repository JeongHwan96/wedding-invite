import { Vue, Component } from "vue-property-decorator";

declare global {
  interface Window {
    Kakao: any;
  }
}

@Component
export default class SnsShare extends Vue {
  kakaoKey = "96e348f9eeaef0bb8993803964dd22bd";
  async mounted() {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(this.kakaoKey);
      console.log("Kakao SDK initialized!");
    }
  }
  shareKakao() {
    if (!window.Kakao) {
      console.error("Kakao SDK not loaded");
      return;
    }

    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "김정환 💌 박소연",
        description: `2026년 06월 13일 <br> 평택 드마레 웨딩컨벤션`,
        imageUrl: "https://jeonghwan96.github.io/wedding-invite//assets/img/img1.jpg",
        link: {
          mobileWebUrl: "https://jeonghwan96.github.io/wedding-invite/",
          webUrl: "https://jeonghwan96.github.io/wedding-invite/"
        }
      },
      buttons: [
        {
          title: "청첩장 보기",
          link: {
            mobileWebUrl: "https://jeonghwan96.github.io/wedding-invite/",
            webUrl: "https://jeonghwan96.github.io/wedding-invite/"
          }
        }
      ]
    });
  }
}
