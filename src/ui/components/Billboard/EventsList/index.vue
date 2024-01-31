<script setup lang="ts">
import {EventsService} from '@app/services/Events';

const data = await EventsService.getList();
</script>

<template>
  <div class="events-list">
    <div class="events-grid">
      <div v-for="(event, i) in data" :key="event.id" class="event" :class="{big: i === 0}">
        <img :src="event.img" :alt="event.title" />
        <div class="event-content">
          <span>{{ event.type }}</span>
          <div class="title">{{ event.title }}</div>
          <div v-if="i === 0" class="description">{{ event?.description }}</div>
          <div class="date">{{ event.date }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@ui/assets/sass/variables/colors';
@import '@ui/assets/sass/variables/mixins';

.events-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  .event {
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    border-radius: 12px;
    img {
      height: 195px;
      width: 100%;
      object-fit: cover;
      border-radius: 18px;
    }
    .event-content {
      span {
        color: $blue;
        font-size: 11px;
        line-height: 18px;
        margin-bottom: 4px;
        text-transform: uppercase;
        font-family: 'Lebedev', sans-serif;
      }
      .title {
        @include font16(700);
        line-height: 24px;
        color: $black;
        margin-bottom: 16px;
      }
      .date {
        font-size: 11px;
        color: #8c8c8c;
      }
    }
    &.big {
      grid-row: 1/3;
      grid-column: 1/3;
      background: $lightGrey3;
      img {
        height: 376px;
      }
      .event-content {
        .title {
          font-size: 25px;
          line-height: 120%;
        }
        .description {
          @include font16(400);
          line-height: 24px;
          color: $black;
          margin-bottom: 16px;
        }
      }
    }
  }
}
</style>
