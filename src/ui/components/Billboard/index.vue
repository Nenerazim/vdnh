<script setup lang="ts">
import Calendar from './Calendar';
import Categories from './Categories';
import EventList from './EventsList';
</script>

<template>
  <section id="billboard">
    <div class="content-block b-r-16">
      <h2>Афиша событий на <span> 23 – 26 мая</span></h2>
      <Calendar />
      <Categories />
      <EventList />
    </div>
  </section>
</template>

<style lang="scss">
@import '@ui/assets/sass/variables/colors';
@import '@ui/assets/sass/variables/mixins';

.content-block {
  padding: 35px 56px;
}

h2 {
  color: $darkGrey;
  font-size: 35px;
  margin-bottom: 25px;
  span {
    color: $red;
  }
}
</style>
