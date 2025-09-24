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
        title: "청첩장에 초대합니다 💌",
        description: "우리 결혼식에 초대합니다. 함께해 주세요!",
        imageUrl: "https://mwedding-invite.netlify.app/assets/img/img1.jpg",
        link: {
          mobileWebUrl: "https://mwedding-invite.netlify.app/",
          webUrl: "https://mwedding-invite.netlify.app/"
        }
      },
      buttons: [
        {
          title: "청첩장 보기",
          link: {
            mobileWebUrl: "https://mwedding-invite.netlify.app/",
            webUrl: "https://mwedding-invite.netlify.app/"
          }
        }
      ]
    });
  }
}
