<template>
  <div class="container">
    <div class="title">
      <p>/2026.6.13/</p>
      <div class="desc">토요일 오후 4시 50분</div>
    </div>
    <div class="divide-line"></div>

    <div class="day-row">
      <div v-for="day in days" :key="day.name" :class="day.style">
        {{ day.name }}
      </div>
    </div>

    <div class="date-column">
      <div class="week1">
        <div
          v-for="(week, index) in week1"
          :key="week.date ?? index"
          :class="week.date === 31 ? 'lastDay' : week.style"
          :id="week.id"
        >
          {{ week.date }}
          <div v-if="week.date == 6">
            <div id="bar">현충일</div>
          </div>
        </div>
      </div>

      <div class="week2">
        <div
          v-for="(week, index) in week2"
          :key="week.date ?? index"
          :class="week.style"
          :id="week.id"
        >
          {{ week.date }}
          <div v-if="week.date == 13">
            <div id="Dday"></div>
          </div>
        </div>
      </div>

      <div class="week3">
        <div
          v-for="(week, index) in week3"
          :key="week.date ?? index"
          :class="week.style"
          :id="week.id"
        >
          {{ week.date }}
        </div>
      </div>

      <div class="week4">
        <div
          v-for="(week, index) in week4"
          :key="week.date ?? index"
          :class="week.style"
          :id="week.id"
        >
          {{ week.date }}
        </div>
      </div>

      <div class="week5">
        <div
          v-for="(week, index) in week5"
          :key="week.date ?? index"
          :class="week.date === 31 ? 'lastDay' : week.style"
          :id="week.id"
        >
          {{ week.date }}
        </div>
      </div>
    </div>

    <div class="divide-line"></div>
    <div class="DateTotalWrap">
      <!-- ✅ 바인딩된 DAYS -->
      <div class="DayWrap">
        <div class="DAYSNum">{{ remainingTime.days }}</div>
        <div class="DAYSString">DAYS</div>
      </div>
      <!-- ✅ 바인딩 및 포맷팅된 HOURS -->
      <div class="HOURSWrap">
        <div class="HOURSNum">{{ pad(remainingTime.hours) }}</div>
        <div class="HOURSString">HOURS</div>
      </div>
      <!-- ✅ 바인딩 및 포맷팅된 MINUTES -->
      <div class="MinWrap">
        <div class="MinNum">{{ pad(remainingTime.minutes) }}</div>
        <div class="MinString">MINUTES</div>
      </div>
      <!-- ✅ 바인딩 및 포맷팅된 SECONDS -->
      <div class="SecWrap">
        <div class="SecSNum">{{ pad(remainingTime.seconds) }}</div>
        <div class="SecString">SECONDS</div>
      </div>
    </div>
    <div class="counting">
      <!-- ✅ 바인딩된 메시지 -->
      정환<span>♥</span>소연의 결혼식이 {{ countdownMessage }}
    </div>

    <div class="divide-line"></div>
  </div>
</template>

<script lang="ts" src="./Calendar.ts"></script>

<style scoped src="../assets/css/Calendar.css"></style>
