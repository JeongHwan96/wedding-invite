import { defineComponent, ref } from "vue";
import { Swiper as SwiperClass } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

interface Team {
  className: string;
  identifier: number;
}

export default defineComponent({
  name: "WeddingGallery",
  components: { Swiper, SwiperSlide },
  setup() {
    const photo = ref<Team[]>([
      { className: "img1", identifier: 1 },
      { className: "img2", identifier: 2 },
      { className: "img3", identifier: 3 },
      { className: "img4", identifier: 4 },
      { className: "img5", identifier: 5 }
    ]);

    const isModalOpen = ref(false);
    const selectedIndex = ref(0);
    const swiperRef = ref<SwiperClass | null>(null);

    const openModal = (index: number) => {
      selectedIndex.value = index;
      isModalOpen.value = true;
    };

    const closeModal = () => {
      isModalOpen.value = false;
    };

    return {
      photo,
      isModalOpen,
      selectedIndex,
      openModal,
      closeModal,
      swiperRef
    };
  }
});
