import { Component, Vue } from "vue-property-decorator";

@Component
export default class BankAccount extends Vue {
  public acc_w = false;
  public isClicked = false;

  public groom = "110-439-592371";
  public bride = "3333-13-3977466";
  public groom_father = "115-266802-12004";
  public groom_mother = "113-12-822921";
  public bride_father = "432-02-056303";
  public bride_mother = "425-02-360598";

  public handleModal(event?: MouseEvent): void {
    this.isClicked = !this.isClicked;

    if (event && event.target) {
      const target = event.target as HTMLElement;
      if (target.id === "acc_w") {
        this.acc_w = true;
      } else if (target.id === "acc_m") {
        this.acc_w = false;
      }
    }
  }

  public copyInfo(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const buttonId = target.id;
    let textToCopy = "";

    switch (buttonId) {
      case "groom-father":
        textToCopy = this.groom_father;
        break;
      case "groom-mother":
        textToCopy = this.groom_mother;
        break;
      case "groom":
        textToCopy = this.groom;
        break;
      case "bride-father":
        textToCopy = this.bride_father;
        break;
      case "bride-mother":
        textToCopy = this.bride_mother;
        break;
      case "bride":
        textToCopy = this.bride;
        break;
    }

    if (textToCopy) {
      const cleanText = textToCopy.replace(/-/g, "");

      this.executeCopy(cleanText);
      alert("복사되었습니다.");
    }

    this.isClicked = false;
  }

  private executeCopy(text: string): void {
    const t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = text;
    t.select();
    document.execCommand("copy");
    document.body.removeChild(t);
  }
}
