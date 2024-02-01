<script setup lang="ts">
import {mockFooter} from '@ui/components/Footer/mock.js';
</script>

<template>
  <footer>
    <div class="content-block b-r-16">
      <div class="footer-grid">
        <div v-for="footerEl in mockFooter" :key="footerEl.heading" class="footer-el">
          <div class="heading">{{ footerEl.heading }}</div>
          <ul>
            <li v-for="link in footerEl.items" :key="link.name">
              <a :href="link.link">{{ link.name }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-info">
        <div class="social">
          <a href="" class="phone">+7 (495) 544-34-00 </a>
          <a href="" class="email">info@vdnh.ru</a>
          <div class="socials">
            <a href="">
              <svg width="32" height="32">
                <use href="/sprites/icons.svg#vk" />
              </svg>
            </a>
            <a href="">
              <svg width="32" height="32">
                <use href="/sprites/icons.svg#ok" />
              </svg>
            </a>
            <a href="">
              <svg width="32" height="32">
                <use href="/sprites/icons.svg#yt" />
              </svg>
            </a>
            <a href="">
              <svg width="32" height="32">
                <use href="/sprites/icons.svg#zen" />
              </svg>
            </a>
          </div>
        </div>
        <div class="partners">
          <p>Партнеры</p>
          <div class="partner-img">
            <svg width="88" height="39">
              <use href="/sprites/icons.svg#mirCard" />
            </svg>
            <svg width="88" height="33">
              <use href="/sprites/icons.svg#tele2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-footer">
      <p>
        1939 – 2023<br />
        Москва<br />
        <span>VDNH CREW</span>
      </p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import '@ui/assets/sass/variables/colors';
@import '@ui/assets/sass/variables/mixins';

footer {
  margin-top: 32px;
  margin-bottom: 69px;
}
.bottom-footer {
  padding: 32px 0 15px;
  text-align: center;
  p {
    font-weight: 500;
    color: $darkGrey;
    font-size: 12px;
    span {
      font-size: 14px;
    }
  }
}
.footer-info {
  margin-top: 25px;
  max-width: 651px;
  gap: 95px;
  display: flex;
  align-items: flex-start;
  .partners {
    p {
      font-size: 11px;
      margin-bottom: 16px;
      font-family: 'Lebedev', sans-serif;
    }
    .partner-img {
      display: flex;
      align-items: flex-start;
      gap: 28px;
    }
  }
  .social {
    display: flex;
    flex-direction: column;
    a {
      text-decoration: none;
      color: $black;
    }
    .phone {
      font-family: 'Lebedev', sans-serif;
      font-size: 32px;
      margin-bottom: 16px;
      font-weight: 700;
      letter-spacing: -2px;
    }
    .email {
      @include font18();
    }
    .socials {
      display: flex;
      align-items: center;
      gap: 24px;
      margin-top: 40px;
    }
  }
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 25px;
  justify-content: space-between;
  @include font18(500);
  .heading {
    margin-bottom: 11px;
  }
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 11px;
    a {
      text-decoration: none;
      color: $red;
    }
  }
}
</style>
