<script setup lang="ts">
import Button from '@ui/widgets/Button';
import {data} from './mock';
</script>

<template>
  <section id="special">
    <div class="content-block b-r-16">
      <h2>Специальные предложения</h2>
      <p>Скидки, привилегии, комбо-программы</p>
      <div class="special-events-grid">
        <div v-for="event in data" :key="event.id" class="special-event">
          <img :src="event.img" :alt="event.title" />
          <div class="title">{{ event.title }}</div>
          <div v-if="event.type === 1" class="actions">
            <Button label="Купить билет" />
            <div class="badge">от {{ event?.price }} ₽</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@ui/assets/sass/variables/colors';
@import '@ui/assets/sass/variables/mixins';

.content-block {
  padding: 35px 56px;
  background: $lightRed;
  position: relative;
  overflow: hidden;
  &:before {
    content: url('/images/bubbles.png');
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
h2 {
  font-size: 35px;
  color: $white;
  margin-bottom: 15px;
}
p {
  @include font18();
  color: $white;
  margin-bottom: 25px;
}
.special-events-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  .special-event {
    height: 195px;
    width: 100%;
    overflow: hidden;
    border-radius: 12px;
    padding: 9px 12px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    gap: 8px;
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
}
</style>
