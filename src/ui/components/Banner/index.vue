<script setup lang="ts">
import Slider from './Slider.vue';
import Event from './Event.vue';
</script>

<template>
  <div class="content-block">
    <div class="content-block-grid">
      <Slider />
      <Event />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content-block {
  padding: 16px 16px 19px;
  &-grid {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 26px;
    height: 423px;
  }
}
</style>
