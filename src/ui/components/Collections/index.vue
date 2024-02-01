<script setup lang="ts">
import {mockCollections} from './mock.js';
</script>

<template>
  <section id="collections">
    <div class="content-block b-r-16">
      <h2>Подборки</h2>
      <div class="section-description">
        Всю ВДНХ за один день не обойти. Но мы составили для вас тематические маршруты для любой компании и под любое настроение. Выберите один и
        успейте посмотреть самое важное. А затем возвращайтесь, чтобы увидеть что-то новое.
      </div>
      <div class="collections-grid">
        <div v-for="event in mockCollections" :key="event.id" class="collection-item" :class="{big: event.type === 1}">
          <img :src="event.img" :alt="event.name" />
          <div class="title">{{ event.name }}</div>
          <div class="item-content">
            <div class="events">{{ event.events }} событие</div>
            •
            <div class="places">{{ event.places }} мест</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@ui/assets/sass/variables/colors';
@import '@ui/assets/sass/variables/mixins';

h2 {
  margin-bottom: 15px;
}
.section-description {
  @include font18(400);
  margin-bottom: 25px;
  max-width: 589px;
}

.collections-grid {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 15px 11px;
  .collection-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 231px;
    padding: 14px 16px 12px;
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    grid-column: auto / span 3;
    &.big {
      grid-column: auto / span 4;
    }
    .title {
      font-size: 36px;
      color: $white;
      font-weight: 500;
      z-index: 3;
    }
    .item-content {
      color: $white;
      @include font14();
      z-index: 3;
      display: flex;
      gap: 7px;
    }
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 1;
    }
    &:after {
      content: '';
      position: absolute;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%);
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
    }
  }
}
</style>
