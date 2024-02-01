<script setup lang="ts">
import {Swiper, SwiperSlide} from 'swiper/vue';
import Button from '@ui/widgets/Button';
import {data} from './mock';
import 'swiper/css';
</script>

<template>
  <section v-if="data" id="popular">
    <h1>Популярное сейчас</h1>
    <div class="popular-slider">
      <Swiper slides-per-view="auto" :space-between="20">
        <SwiperSlide v-for="slide in data" :key="slide.id">
          <div class="popular-slide" :class="{big: slide.type === 1}">
            <img :src="slide.img" :alt="slide.title" />
            <div class="title">{{ slide.title }}</div>
            <div v-if="slide.type === 1" class="actions">
              <Button label="Купить билет" />
              <div class="badge">от {{ slide.price }} ₽</div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@ui/assets/sass/variables/colors';
@import '@ui/assets/sass/variables/mixins';

h1 {
  margin-bottom: 26px;
  color: $darkGrey;
}

.swiper-slide {
  width: auto !important;
}

.popular-slide {
  height: 195px;
  width: 320px;
  overflow: hidden;
  border-radius: 12px;
  padding: 9px 12px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  &.big {
    width: 417px;
    gap: 8px;
  }
  .actions {
    gap: 14px;
    display: flex;
    align-items: center;
    z-index: 4;
    :deep(.button) {
      flex: 1;
    }
    .badge {
      padding: 8px 12px;
      border-radius: 12px;
      border: 1px solid rgba(180, 184, 204, 0.36);
      color: $white;
      @include font14(500);
      width: 116px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 38px;
    }
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 2;
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
    background: rgba(0, 0, 0, 0.2);
  }
  .title {
    @include font18(700);
    color: $white;
    z-index: 4;
  }
}
</style>
