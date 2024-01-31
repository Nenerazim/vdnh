<script setup lang="ts">
import {Swiper, SwiperSlide} from 'swiper/vue';
import {FreeMode, Navigation} from 'swiper/modules';
import {Calendar} from './CalendarClass';

const active = ref();
const today = new Date();

const calendar = [
  Calendar.generateCalendarArray(today.getMonth(), today.getFullYear()),
  Calendar.generateCalendarArray(today.getMonth() + 1, today.getFullYear())
];
</script>

<template>
  <div class="calendar-slider">
    <div class="slider-action prev slider-action-prev">
      <svg>
        <use href="/sprites/icons.svg#angle" />
      </svg>
    </div>
    <div class="slider-container">
      <Swiper
        slides-per-view="auto"
        :space-between="22"
        :modules="[FreeMode, Navigation]"
        free-mode
        :navigation="{
          prevEl: '.slider-action-prev',
          nextEl: '.slider-action-next'
        }"
      >
        <SwiperSlide v-for="month in calendar" :key="month">
          <div class="month-slide">
            <div class="name">{{ month.month }}</div>
            <div class="dates">
              <div v-for="day in month.days" :key="day.date" class="day" :class="{active: active === day.date}" @click="active = day.date">
                {{ day.dayOfWeek }}
                <span>{{ day.dayOfMonth }}</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="slider-action next slider-action-next">
      <svg>
        <use href="/sprites/icons.svg#angle" />
      </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@ui/assets/sass/variables/colors';
@import '@ui/assets/sass/variables/mixins';

.calendar-slider {
  display: flex;
  gap: 7px;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  .slider-container {
    min-width: 0;
    width: 100%;
    overflow: hidden;
    position: relative;
  }
  .slider-action {
    width: 59px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px 22px;
    svg {
      width: 12px;
      height: 23px;
    }
    &.next {
      rotate: 180deg;
    }
  }
}

.swiper-slide {
  width: auto !important;
}

.month-slide {
  display: flex;
  flex-direction: column;
  gap: 9px;
  .name {
    @include font16(400);
    color: #85889e;
  }
  .dates {
    display: flex;
    gap: 10px;
    .day {
      border-radius: 16px;
      background: $lightGrey3;
      width: 66px;
      height: 80px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      line-height: 24px;
      color: rgba(5, 5, 5, 0.45);
      font-size: 10px;
      font-weight: 500;
      cursor: pointer;
      span {
        @include font18(500);
        color: #000;
      }
      &.active {
        color: $white;
        background: $red;
        span {
          color: $white;
        }
      }
    }
  }
}
</style>
