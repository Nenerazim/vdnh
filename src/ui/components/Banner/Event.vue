<script setup lang="ts">
import Button from '@ui/widgets/Button';
</script>

<template>
  <div class="banner-event">
    <img src="/images/banner-event.png" alt="Баннер" loading="lazy" />
    <div class="banner-event-content">
      <div class="title">Постоянная экспозиция Музея городского хозяйства Москвы</div>
      <Button label="Подробнее" additional-class="full-width" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@ui/assets/sass/variables/colors';
@import '@ui/assets/sass/variables/mixins';

.banner-event {
  height: 100%;
  padding: 8px 12px 9px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  &-content {
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: relative;
    z-index: 4;
    .title {
      color: $white;
      @include font18(700);
    }
  }
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
    z-index: 2;
  }
  &::after {
    content: '';
    position: absolute;
    z-index: 3;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(98deg, rgba(0, 0, 0, 0.2) 24.08%, rgba(0, 0, 0, 0) 129.87%);
  }
}
</style>
