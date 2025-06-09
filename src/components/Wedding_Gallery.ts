import { Vue, Component } from "vue-property-decorator";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

interface Team {
  className: string;
  identifier: number;
}

@Component
export default class WeddingGallery extends Vue {
  photo: Team[] = [
    { className: "img1", identifier: 1 },
    { className: "img2", identifier: 2 },
    { className: "img3", identifier: 3 },
    { className: "img4", identifier: 4 },
    { className: "img5", identifier: 5 }
  ];

  isModalOpen = false;
  selectedIndex = 0;
  swiper: Swiper | null = null;

  openModal(index: number): void {
    this.selectedIndex = index;
    this.isModalOpen = true;

    this.$nextTick(() => {
      if (this.swiper) {
        this.swiper.slideToLoop(index, 0);
      } else {
        this.swiper = new Swiper(this.$refs.swiperContainer as HTMLElement, {
          loop: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          },
          initialSlide: index
        });
      }
    });
  }

  closeModal(): void {
    this.isModalOpen = false;
  }
}
