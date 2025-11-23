import { Vue, Component } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  setInitialVh() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  mounted() {
    this.setInitialVh();
  }
}
