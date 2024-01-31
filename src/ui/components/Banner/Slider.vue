<script setup lang="ts">
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Navigation} from 'swiper/modules';
import Button from '@ui/widgets/Button';
import 'swiper/css';
</script>

<template>
  <div class="banner-slider">
    <div class="slider-container">
      <Swiper
        :slides-per-view="1"
        :space-between="0"
        loop
        :modules="[Navigation]"
        :navigation="{
          prevEl: '.slider-banner-action-prev',
          nextEl: '.slider-banner-action-next'
        }"
      >
        <SwiperSlide>
          <div class="banner-slide">
            <div class="information">
              <div class="title">Выставка «Найти Бэнкси»</div>
              <div class="description">Текстовый заголовок на баннере Текстовый заголовок на баннере Текстовый заголовок</div>
            </div>
            <div class="actions">
              <p>Начало в 19:00</p>
              <div class="action-block">
                <Button label="Найти бенкси" additional-class="full-width" />
                <div class="badge">
                  <svg width="24" height="24">
                    <use href="/sprites/icons.svg#ticket" />
                  </svg>
                  от 759 ₽
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="banner-slide">
            <div class="information">
              <div class="title">Выставка «Найти Бэнкси»</div>
              <div class="description">Текстовый заголовок на баннере Текстовый заголовок на баннере Текстовый заголовок</div>
            </div>
            <div class="actions">
              <p>Начало в 19:00</p>
              <div class="action-block">
                <Button label="Найти бенкси" additional-class="full-width" />
                <div class="badge">
                  <svg width="24" height="24">
                    <use href="/sprites/icons.svg#ticket" />
                  </svg>
                  от 759 ₽
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="slider-action prev slider-banner-action-prev">
      <svg width="24" height="24">
        <use href="/sprites/icons.svg#arrow" />
      </svg>
    </div>
    <div class="slider-action next slider-banner-action-next">
      <svg width="24" height="24">
        <use href="/sprites/icons.svg#arrow" />
      </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@ui/assets/sass/variables/colors';
@import '@ui/assets/sass/variables/mixins';

.swiper {
  height: 100%;
  width: 100%;
}
.banner-slider {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  min-width: 0;
  .slider-container {
    overflow: hidden;
    height: 100%;
  }
  .slider-action {
    width: 40px;
    height: 40px;
    background: $white;
    padding: 8px;
    box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    position: absolute;
    z-index: 9;
    svg {
      pointer-events: none;
    }
    &.prev {
      left: -20px;
    }
    &.next {
      right: -20px;
      rotate: 180deg;
    }
  }
  .banner-slide {
    padding: 38px 51px 28px 40px;
    position: relative;
    background:
      linear-gradient(90deg, rgba(0, 0, 0, 0.3) 32.31%, rgba(0, 0, 0, 0) 100.55%),
      url(/images/slide.png) center / cover no-repeat,
      lightgray 50% / cover no-repeat;
    border-radius: 16px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: $white;
    user-select: none;
    .information {
      max-width: 578px;
      width: 100%;
      .title {
        font-size: 35px;
        font-weight: 700;
        margin-bottom: 15px;
      }
      .description {
        font-size: 25px;
        font-style: normal;
        font-weight: 400;
        line-height: 35px;
      }
    }
    .actions {
      display: flex;
      flex-direction: column;
      gap: 16px;
      p {
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 19px;
      }
      .action-block {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 16px;
        :deep(.button) {
          flex: 1;
          max-width: 374px;
        }
        .badge {
          color: $white;
          background: $blue;
          border-radius: 12px;
          height: 39px;
          display: inline-flex;
          align-items: center;
          padding-inline: 23px;
          gap: 11px;
          @include font16(500);
        }
      }
    }
  }
}
</style>
