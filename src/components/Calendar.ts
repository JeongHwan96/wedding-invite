import { Component, Vue } from "vue-property-decorator";

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
  // ✅ D-Day 계산용 computed 대체
  get getDate(): string {
    const now = new Date().getTime();
    const dday = new Date("June 13, 2026 00:00:00").getTime();
    const gap = dday - now;

    if (gap < 0) {
      return Math.abs(Math.ceil(gap / (1000 * 60 * 60 * 24))) + "일 지났습니다.";
    }
    return Math.ceil(gap / (1000 * 60 * 60 * 24)) + "일 남았습니다.";
  }

  // ✅ 타입 명시
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
    { date: 13, style: "sun" },
    { date: 14, style: undefined },
    { date: 15, style: undefined },
    { date: 16, style: undefined },
    { date: 17, style: undefined },
    { date: 18, style: undefined },
    { date: 19, style: undefined }
  ];

  week4: CalendarCell[] = [
    { date: 20, style: "sun" },
    { date: 21, style: undefined },
    { date: 22, style: undefined },
    { date: 23, style: undefined },
    { date: 24, style: undefined },
    { date: 25, style: undefined },
    { date: 26, style: undefined }
  ];

  week5: CalendarCell[] = [
    { date: 27, style: "sun" },
    { date: 28, style: undefined },
    { date: undefined, style: undefined },
    { date: undefined, style: undefined },
    { date: undefined, style: undefined },
    { date: undefined, style: undefined },
    { date: undefined, style: undefined }
  ];
}
