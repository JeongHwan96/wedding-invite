import { Component, Vue } from "vue-property-decorator";

// TimeRemaining 인터페이스
interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

type DayHeader = {
  name: string;
  style: string | undefined;
};

type CalendarCell = {
  date: number | undefined;
  style: string | undefined;
  id?: string | undefined;
};

@Component
export default class Calendar extends Vue {
  // 템플릿에서 접근할 수 있도록 public으로 선언
  public remainingTime: TimeRemaining = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false
  };
  private timerInterval: number | undefined;
  // 목표 날짜 및 시간 설정 (2026년 6월 13일 오후 4시 50분)
  private targetDate: Date = new Date("June 13, 2026 16:50:00");

  private calculateTimeRemaining(): TimeRemaining {
    const now = new Date().getTime();
    const gap = this.targetDate.getTime() - now;

    const absGap = Math.abs(gap);
    return {
      days: Math.floor(absGap / (1000 * 60 * 60 * 24)),
      hours: Math.floor((absGap / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((absGap / (1000 * 60)) % 60),
      seconds: Math.floor((absGap / 1000) % 60),
      isPast: gap < 0
    };
  }

  mounted() {
    this.updateTimer(); // 초기 1회 실행
    // 1초마다 업데이트
    this.timerInterval = setInterval(this.updateTimer, 1000);
  }

  beforeDestroy() {
    // 컴포넌트 종료 시 타이머 제거
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  // 템플릿에서 사용할 헬퍼 함수: 시/분/초를 두 자리수로 포맷팅
  public pad(num: number): string {
    return num.toString().padStart(2, "0");
  }

  private updateTimer() {
    this.remainingTime = this.calculateTimeRemaining();
  }

  // 템플릿 하단 메시지 출력을 위한 computed 속성
  get countdownMessage(): string {
    const { days, isPast } = this.remainingTime;
    if (isPast) {
      return `${days}일 지났습니다.`;
    } else {
      return `${days}일 남았습니다.`;
    }
  }

  // (기존 days, week1~week5 데이터는 그대로 유지)
  days: DayHeader[] = [
    { name: "Sun", style: "sun" },
    { name: "Mon", style: undefined },
    { name: "Tue", style: undefined },
    { name: "Wed", style: undefined },
    { name: "Thu", style: undefined },
    { name: "Fri", style: undefined },
    { name: "Sat", style: undefined }
  ];

  week1: CalendarCell[] = [
    { date: 31, style: undefined, id: undefined },
    { date: 1, style: undefined, id: undefined },
    { date: 2, style: undefined, id: undefined },
    { date: 3, style: undefined, id: undefined },
    { date: 4, style: undefined, id: undefined },
    { date: 5, style: undefined, id: undefined },
    { date: 6, style: "holiday", id: undefined }
  ];

  week2: CalendarCell[] = [
    { date: 7, style: "sun" },
    { date: 8, style: undefined },
    { date: 9, style: undefined },
    { date: 10, style: undefined },
    { date: 11, style: undefined },
    { date: 12, style: undefined },
    { date: 13, style: "num13" }
  ];

  week3: CalendarCell[] = [
    { date: 14, style: "sun" },
    { date: 15, style: undefined },
    { date: 16, style: undefined },
    { date: 17, style: undefined },
    { date: 18, style: undefined },
    { date: 19, style: undefined },
    { date: 20, style: undefined }
  ];

  week4: CalendarCell[] = [
    { date: 21, style: "sun" },
    { date: 22, style: undefined },
    { date: 23, style: undefined },
    { date: 24, style: undefined },
    { date: 25, style: undefined },
    { date: 26, style: undefined },
    { date: 27, style: undefined }
  ];

  week5: CalendarCell[] = [
    { date: 28, style: "sun" },
    { date: 29, style: undefined },
    { date: 30, style: undefined },
    { date: undefined, style: undefined },
    { date: undefined, style: undefined },
    { date: undefined, style: undefined },
    { date: undefined, style: undefined }
  ];
}
