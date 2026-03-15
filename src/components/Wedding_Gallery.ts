import { Vue, Component } from "vue-property-decorator";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

interface Photo {
  className: string;
  identifier: number;
}

@Component
export default class WeddingGallery extends Vue {
  // 처음 보여줄 개수
  visiableCount = 4;

  // 전체 사진 목록
  photo: Photo[] = [
    { className: "img1", identifier: 1 },
    { className: "img2", identifier: 2 },
    { className: "img4", identifier: 4 },
    { className: "img9", identifier: 9 },
    { className: "img23", identifier: 23 },
    { className: "img24", identifier: 24 },
    { className: "img25", identifier: 25 },
    // { className: "img26", identifier: 26 },
    { className: "img27", identifier: 27 },
    { className: "img28", identifier: 28 },
    { className: "img29", identifier: 29 },
    // { className: "img30", identifier: 30 },
    { className: "img31", identifier: 31 },
    { className: "img32", identifier: 32 },
    { className: "img33", identifier: 33 },
    { className: "img34", identifier: 34 },
    { className: "img5", identifier: 5 },
    { className: "img8", identifier: 8 },
    { className: "img6", identifier: 6 },
    { className: "img7", identifier: 7 },
    { className: "img10", identifier: 10 },
    { className: "img11", identifier: 11 },
    { className: "img12", identifier: 12 },
    { className: "img13", identifier: 13 },
    { className: "img20", identifier: 20 },
    { className: "img17", identifier: 17 },
    { className: "img19", identifier: 19 },
    { className: "img21", identifier: 21 },
    { className: "img15", identifier: 15 },
    { className: "img16", identifier: 16 },
    { className: "img14", identifier: 14 },
    { className: "img18", identifier: 18 },
    { className: "img22", identifier: 22 }
  ];

  // 모달 관련
  isModalOpen = false;
  selectedIndex = 0;
  swiper: Swiper | null = null;

  // 🔹 화면에 보여줄 사진 (핵심)
  get visiblePhotos(): Photo[] {
    return this.photo.slice(0, this.visiableCount);
  }

  // 🔹 더보기 버튼 표시 여부
  get isGalleryMore(): boolean {
    return this.visiableCount < this.photo.length;
  }

  // 🔹 더보기 클릭
  loadGalleryMore(): void {
    this.visiableCount += 4;
  }

  // 🔹 모달 열기
  openModal(index: number): void {
    this.selectedIndex = index;
    this.isModalOpen = true;

    this.$nextTick(() => {
      if (this.swiper) {
        this.swiper.slideToLoop(index, 0);
      } else {
        this.swiper = new Swiper(this.$refs.swiperContainer as HTMLElement, {
          loop: true,
          initialSlide: index
        });
      }
    });
  }

  // 🔹 모달 닫기
  closeModal(): void {
    this.isModalOpen = false;
  }

  // 🔹 이미지 매핑
  getImageUrl(className: string): string {
    const map: { [key: string]: string } = {
      img1: require("@/assets/img/img1/img1.jpg"),
      img2: require("@/assets/img/img1/img2.jpg"),
      img4: require("@/assets/img/img1/img4.jpg"),
      img5: require("@/assets/img/img1/JO__4221.jpg"),
      img6: require("@/assets/img/img1/JO__4667.jpg"),
      img7: require("@/assets/img/img1/JO__4942.jpg"),
      img8: require("@/assets/img/img1/JO__5157.jpg"),
      img9: require("@/assets/img/img1/img7.jpg"),
      img10: require("@/assets/img/img1/JO__4313.jpg"),
      img11: require("@/assets/img/img1/JO__4590.jpg"),
      img12: require("@/assets/img/img1/1765766588439.jpg"),
      img13: require("@/assets/img/img1/1765766588724.jpg"),
      img14: require("@/assets/img/img1/1765766588882.jpg"),
      img15: require("@/assets/img/img1/1765766589006.jpg"),
      img16: require("@/assets/img/img1/1765766589094.jpg"),
      img17: require("@/assets/img/img1/1765766589171.jpg"),
      img18: require("@/assets/img/img1/1765766589276.jpg"),
      img19: require("@/assets/img/img1/1765766589372.jpg"),
      img20: require("@/assets/img/img1/1765766589446.jpg"),
      img21: require("@/assets/img/img1/1765766589544.jpg"),
      img22: require("@/assets/img/img1/1765766589677.jpg"),
      img23: require("@/assets/img/img1/ya1.jpg"),
      img24: require("@/assets/img/img1/ya2.jpg"),
      img25: require("@/assets/img/img1/ya3.jpg"),
      img26: require("@/assets/img/img1/ya4.jpg"),
      img27: require("@/assets/img/img1/ya5.jpg"),
      img28: require("@/assets/img/img1/ya6.jpg"),
      img29: require("@/assets/img/img1/ya7.jpg"),
      img30: require("@/assets/img/img1/ya8.jpg"),
      img31: require("@/assets/img/img1/ya9.jpg"),
      img32: require("@/assets/img/img1/ya10.jpg"),
      img33: require("@/assets/img/img1/ya11.jpg"),
      img34: require("@/assets/img/img1/ya12.jpg")
    };

    return map[className];
  }
}
