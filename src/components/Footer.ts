import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Footer extends Vue {
  Nowyear: number = new Date().getFullYear();

  mounted() {
    console.log(this.Nowyear);
  }
}
