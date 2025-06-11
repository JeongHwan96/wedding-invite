import { Vue, Component } from "vue-property-decorator";
import Intro from "./components/MainIntro.vue";
import MainInfo from "./components/Main_Info.vue";
import Calendar from "./components/Calendar.vue";
import WeddingGallery from "./components/Wedding_Gallery.vue";
import Map from "./components/Map.vue";
import BankAccount from "./components/BankAccount.vue";
import guestbook from "./components/guestbook.vue";
@Component({
  components: {
    Intro,
    MainInfo,
    Calendar,
    WeddingGallery,
    Map,
    BankAccount,
    guestbook
  }
})
export default class App extends Vue {}
