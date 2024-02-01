<script setup lang="ts">
import Header from '@ui/components/Header';
import Footer from '@ui/components/Footer';
</script>

<template>
  <div class="application">
    <div class="content">
      <div class="wrap">
        <img src="/images/bubbles_top.png" alt="Bubbles" class="bubbles-bg">
        <Header />
        <div class="page">
          <slot />
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  max-width: 1366px;
  margin: 0 auto;
  padding-inline: 15px;
}
.bubbles-bg {
  z-index: -1;
  position: absolute;
  top: 50px;
  left: 0;
  object-fit: contain;
  width: 100%;
  height: 670px;
}
</style>
