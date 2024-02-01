<template>
  <div class="top-header">
    <div class="logo">
      <NuxtLink to="/">
        <svg width="142" height="80">
          <use href="/sprites/icons.svg#logo" />
        </svg>
      </NuxtLink>
    </div>
    <div class="right-side">
      <form class="search">
        <svg width="33" height="33">
          <use href="/sprites/icons.svg#icon-search" />
        </svg>
        <div class="border"></div>
        <input type="text" placeholder="поиск по местам, событиям, новостям, правилам" />
      </form>
      <div class="links">
        <a href="/" class="cart">
          <svg width="24" height="24">
            <use href="/sprites/icons.svg#cart" />
          </svg>
        </a>
        <a href="/" class="cart">
          <svg width="24" height="24">
            <use href="/sprites/icons.svg#lang" />
          </svg>
        </a>
        <a href="/"> Войти </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped>
@import '@ui/assets/sass/variables/colors';
@import '@ui/assets/sass/variables/mixins';

.top-header {
  margin-top: 15px;
  padding-inline: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  .right-side {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
    .search {
      display: flex;
      align-items: center;
      max-width: 642px;
      width: 100%;
      .border {
        margin-inline: 3px 10px;
        width: 1px;
        background: $red;
        height: 26px;
      }
      input {
        background: transparent;
        border: transparent;
        @include font18();
        font-family: 'Intl', sans-serif;
        width: 100%;
        &:focus {
          outline: none;
        }
        &::placeholder {
          color: $lightGrey5;
          @include font18();
          font-family: 'Intl', sans-serif;
        }
      }
    }
    .links {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    a {
      display: inline-flex;
      color: $red;
      text-decoration: none;
      font-size: 15px;
      font-weight: 500;
      min-width: 80px;
    }
  }
}
</style>
