import { Vue, Component } from "vue-property-decorator";
import Intro from "./components/MainIntro.vue";
import MainInfo from "./components/Main_Info.vue";
import Calendar from "./components/Calendar.vue";
import WeddingGallery from "./components/Wedding_Gallery.vue";

@Component({
  components: {
    Intro,
    MainInfo,
    Calendar,
    WeddingGallery
  }
})
export default class App extends Vue {}
