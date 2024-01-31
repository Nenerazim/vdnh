<template>
  <div class="main-header">
    <ul>
      <li>
        <a href="" class="default">Все</a>
      </li>
      <li>
        <a href="" class="active">Звездные войны</a>
      </li>
      <li>
        <a href="">Детям</a>
      </li>
      <li>
        <a href="">Образовательное</a>
      </li>
      <li>
        <a href="">Гастрономия</a>
      </li>
      <li>
        <a href="">Концерты</a>
      </li>
      <li>
        <a href="">Космос</a>
      </li>
      <li>
        <a href="">Магазин</a>
      </li>
      <li>
        <a href="">Еще...</a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import '@ui/assets/sass/variables/colors';
@import '@ui/assets/sass/variables/mixins';

.main-header {
  width: 100%;
  display: flex;
  background: $white;
  border-radius: 18px;
  padding: 22px 55px;
  margin-block: 32px;
  ul {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 45px;
    a {
      @include font18(500);
      color: $red;
      text-decoration: none;
      white-space: nowrap;
      &.active {
        border-radius: 16px;
        color: $white;
        background: $black;
        @include font16(400);
        padding: 9px 12px;
      }
      &.default {
        color: $black;
        font-weight: 700;
      }
    }
  }
}
</style>
