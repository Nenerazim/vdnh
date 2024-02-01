<script setup lang="ts">
import Header from '@ui/components/Header';
import Footer from '@ui/components/Footer';
</script>

<template>
  <div class="application">
    <div class="content">
      <div class="wrap">
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
</style>
