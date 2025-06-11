<template>
  <div>
    <div class="modal-wrap" v-if="isClicked">
      <div class="modal-box">
        <div class="modal-content">
          <div class="modal-context-m" v-if="!acc_w">
            <ul>
              <li>신랑혼주 계좌</li>
              <div class="divide"></div>
              <div class="account-row">
                <div class="account-row-column-text">
                  <li>농협 12345678</li>
                  <li>예금주: 김태경</li>
                </div>
                <button class="btn-copy" @click="copyInfo" id="groom-father">복사하기</button>
              </div>
              <div class="padding"></div>
              <div class="account-row">
                <div class="account-row-column-text">
                  <li>농협 1234567</li>
                  <li>예금주: 이희경</li>
                </div>
                <button class="btn-copy" @click="copyInfo" id="groom-mother">복사하기</button>
              </div>

              <li class="padding">신랑 계좌</li>
              <div class="divide"></div>
              <div class="account-row">
                <div class="account-row-column-text">
                  <li>신한 110439592371</li>
                  <li>예금주: 김정환</li>
                </div>
                <button class="btn-copy" @click="copyInfo" id="groom">복사하기</button>
              </div>
            </ul>
          </div>

          <div class="modal-context-w" v-if="acc_w">
            <ul>
              <li>신부혼주 계좌</li>
              <div class="divide"></div>
              <div class="account-row">
                <div class="account-row-column-text">
                  <li>농협 1234567</li>
                  <li>예금주: 박권서</li>
                </div>
                <button class="btn-copy" @click="copyInfo" id="bride-father">복사하기</button>
              </div>
              <div class="padding"></div>
              <div class="account-row">
                <div class="account-row-column-text">
                  <li>농협 1234567</li>
                  <li>예금주: 이채민</li>
                </div>
                <button class="btn-copy" @click="copyInfo" id="bride-mother">복사하기</button>
              </div>

              <li class="padding">신부 계좌</li>
              <div class="divide"></div>
              <div class="account-row">
                <div class="account-row-column-text">
                  <li>카카오뱅크 3333133977466</li>
                  <li>예금주: 박소연</li>
                </div>
                <button class="btn-copy" @click="copyInfo" id="bride">복사하기</button>
              </div>
            </ul>
          </div>
        </div>
        <div class="modal-button">
          <button class="btn-confirm" @click="handleModal">확인</button>
        </div>
      </div>
    </div>
    <div class="account-info">
      <p>마음 전하실 곳</p>
      <p>"신랑&신부에게 축하의 마음을 전해주세요"</p>
      <button class="acc-btn1" @click="handleModal" id="acc_m">신랑측 계좌번호 보기</button>
      <button class="acc-btn2" @click="handleModal" id="acc_w">신부측 계좌번호 보기</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      acc_w: false,
      isClicked: false,
      groom: "110439592371",
      bride: "3333133977466",
      groom_m: "86501117977",
      groom_w: "82108656096936",
      bride_w: "13004256015272"
    };
  },
  methods: {
    handleModal(event) {
      this.isClicked = !this.isClicked;
      const id = event.target.id;
      if (id == "acc_w") {
        this.acc_w = true;
      } else this.acc_w = false;
    },
    copyInfo(event) {
      const buttonId = event.target.id;

      const t = document.createElement("textarea");
      document.body.appendChild(t);

      if (buttonId == "groom-m") {
        t.value = this.groom_m;
        t.select();
        document.execCommand("copy");
      } else if (buttonId == "groom-w") {
        t.value = this.groom_w;
        t.select();
        document.execCommand("copy");
      } else if (buttonId == "groom") {
        t.value = this.groom;
        t.select();
        document.execCommand("copy");
      } else if (buttonId == "bride-w") {
        t.value = this.bride_w;
        t.select();
        document.execCommand("copy");
      } else {
        // this.$copyText(this.bride);
        t.value = this.bride;
        t.select();
        document.execCommand("copy");
      }
      alert("복사되었습니다.");
      document.body.removeChild(t);
      this.handleModal();
    }
  }
};
</script>

<style scoped src="../assets/css/BankAccount.css"></style>
