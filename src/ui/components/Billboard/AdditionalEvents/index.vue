<script setup lang="ts">
import {Swiper, SwiperSlide} from 'swiper/vue';
import {FreeMode} from 'swiper/modules';
import {mockAdditionalEvents} from './mock';
import 'swiper/css';
</script>

<template>
  <div class="additional-events">
    <Swiper :slides-per-view="'auto'" :space-between="27" :modules="[FreeMode]" free-mode>
      <SwiperSlide v-for="event in mockAdditionalEvents" :key="event.id">
        <div class="additional-event">
          <img :src="event.img" :alt="event.title" />
          <div class="title">{{ event.title }}</div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style lang="scss" scoped>
@import '@ui/assets/sass/variables/colors';

.swiper-slide {
  width: auto !important;
}

.additional-event {
  position: relative;
  border-radius: 18px;
  overflow: hidden;
  img {
    height: 329px;
  }
  &:after {
    content: '';
    background: rgba(0, 0, 0, 0.2);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .title {
    width: 60%;
    position: absolute;
    left: 39px;
    bottom: 28px;
    color: $white;
    font-size: 25px;
    font-weight: 700;
    line-height: 120%;
    z-index: 2;
  }
}
</style>
