import { Component, Vue } from "vue-property-decorator";

@Component
export default class BankAccount extends Vue {
  acc_w: boolean = false;
  isClicked: Boolean = false;
  groom: number = 12345678;
  bride: number = 12345678;
  groom_father: number = 12345678;
  groom_mother: number = 12345678;
  bride_father: number = 12345678;
  bride_mother: number = 12345678;
}
