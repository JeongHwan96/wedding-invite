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
        title: "결혼식에 초대합니다 💌",
        description:
          "두 사람이 소중한 인연을 맺고 함께 걸어가려 합니다. 귀한 걸음으로 저희의 시작을 축복해주세요!",
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
