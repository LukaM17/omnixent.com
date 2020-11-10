<template>
  <div class="page">
    <div class="top-menu">
      <div class="top-menu__wrapper">
        <div class="top-menu__item">
          <img class="top-menu__logo" src="/img/omnixent-logo.svg" />
        </div>
        <div class="top-menu__item">
          <div class="top-menu__buttons-wrapper">
            <span class="hide-on-mobile">{{$t('support_us')}}</span>
            <o-button
              class="top-menu__cta top-menu__cta--github"
              @click="goToGithub()">
              <i class="fab fa-github"></i> GitHub
            </o-button>
            <span class="hide-on-mobile ">
              <o-button class="top-menu__cta top-menu__cta--new">
                {{$t('new_label')}} 🎉
              </o-button>
            </span>
          </div>
        </div>
      </div>
    </div>
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    goToGithub () {
      window.open('https://github.com/omnixent')
    }
  }
})
</script>

<style lang="scss">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

body {
  background: $background;
}

.top-menu {
  margin-bottom: 3rem;
  max-height: 10vw;
  &__cta {
    width: 9rem;
    &--github {
      background: none;
      border: 2px solid white;
      margin: 0.5rem;
    }
    &--new {
      background: $secondary;
      color: $background;
      margin: 1rem;
      transform: rotate(-4deg);
      &:hover {
        transform: rotate(0deg);
      }
    }
  }
  &__buttons-wrapper{
    display: flex;
    align-items: center;
  }
  &__logo {
    max-height: 7vw;
    min-height: 80px;
  }
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: calc(1080px + 8rem);
    margin: 0 auto;
  }
  &__item {
    color: white;
  }
}
</style>
