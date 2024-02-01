<script setup lang="ts">
import {mockRoutes} from './mock';
</script>

<template>
  <section id="routes">
    <div class="content-block b-r-16">
      <h2>Маршруты</h2>
      <div class="section-description">
        Всю ВДНХ за один день не обойти. Но мы составили для вас тематические маршруты для любой компании и под любое настроение. Выберите один и
        успейте посмотреть самое важное. А затем возвращайтесь, чтобы увидеть что-то новое.
      </div>
      <div class="routes-grid">
        <div v-for="route in mockRoutes" :key="route.id" class="route">
          <div class="title">
            {{ route.title }}
          </div>
          <div class="image">
            <img :src="route.img" :alt="route.title" />
          </div>
          <div class="hours">{{ route.hours }} час</div>
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
.routes-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  .route {
    background: $lightGrey3;
    padding: 16px 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    border-radius: 16px;
    .title {
      font-size: 26px;
      font-weight: 500;
    }
    .image {
      height: 195px;
    }
    .hours {
      font-size: 11px;
      text-transform: uppercase;
      text-align: center;
      color: $red;
      font-family: 'Lebedev', sans-serif;
      font-weight: 700;
    }
  }
}
</style>
