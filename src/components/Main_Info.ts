import { Vue, Component } from "vue-property-decorator";

@Component
export default class MainInfo extends Vue {
  mounted() {
    window.addEventListener("scroll", this.checkPosition);
  }
  beforeDestory() {
    window.removeEventListener("scroll", this.checkPosition);
  }
  checkPosition() {
    const element = document.querySelector(".container");

    if (element) {
      console.log("현재위치:", window.scrollY);

      if (window.scrollY >= 250 && !element.classList.contains("active")) {
        console.log("Add class");
        element.classList.add("active");
      } else if (window.scrollY < 150 && element.classList.contains("active")) {
        element.classList.remove("active");
      }
    }
  }
}
