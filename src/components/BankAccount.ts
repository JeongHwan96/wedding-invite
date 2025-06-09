import { Component, Vue } from "vue-property-decorator";

@Component
export default class BankAccount extends Vue {
  acc_w = false;
  isClicked = false;
  groom = 12345678;
  bride = 12345678;
  groom_father = 12345678;
  groom_mother = 12345678;
  bride_father = 12345678;
  bride_mother = 12345678;
}
