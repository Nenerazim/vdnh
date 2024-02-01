<script setup lang="ts">
import {mockCategories} from '@ui/components/Billboard/Categories/mock.js';

const showAll = ref(false);
const activeCategory = ref(mockCategories[0].id);
const categories = computed(() => (showAll.value ? mockCategories : mockCategories.slice(0, 5)));
</script>

<template>
  <div class="categories-list">
    <div
      v-for="category in categories"
      :key="category.id"
      class="category"
      :class="{active: category.id === activeCategory}"
      @click="activeCategory = category.id"
    >
      <img :src="category.img" :alt="category.name" />
      {{ category.name }}
    </div>
    <div class="show-more" :class="{active: showAll}" @click="showAll = !showAll">
      <svg width="12" height="12">
        <use href="/sprites/icons.svg#arrow-short" />
      </svg>
      {{ showAll ? 'Скрыть' : 'Еще' }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@ui/assets/sass/variables/colors';
@import '@ui/assets/sass/variables/mixins';

.categories-list {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin: 25px 0;
  .show-more {
    @include font16();
    color: #000;
    display: flex;
    align-items: center;
    padding: 9px 12px;
    gap: 8px;
    height: 38px;
    svg {
      transition: 0.3s;
      rotate: 180deg;
    }
    &.active svg {
      rotate: 0deg;
    }
  }
  .category {
    border-radius: 16px;
    border: 1px solid rgba(211, 17, 43, 0.4);
    @include font16();
    color: #000;
    display: flex;
    align-items: center;
    padding: 9px 12px;
    gap: 8px;
    transition: 0.3s;
    &.active {
      color: $white;
      background: $black;
    }
    img {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      object-fit: cover;
    }
  }
}
</style>
