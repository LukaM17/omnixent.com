<template>
  <client-only>
    <o-dropdown
      :scrollable="false"
      aria-role="list"
      class="languageswitch">
      <o-button type="button" slot="trigger" rootClass="languageswitch__btn">
        <template>
          <span>{{ currentLocale.icon }}</span>
        </template>
      </o-button>
      <o-dropdown-item v-for="locale in availableLocales" :key="locale.code" aria-role="listitem" class="languageswitch__menuitem">
        <nuxt-link
          class="languageswitch__menuitem__icon"
          :to="switchLocalePath(locale.code)">{{ locale.icon }}</nuxt-link>
      </o-dropdown-item>
    </o-dropdown>
  </client-only>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    availableLocales () {
      return this.$i18n.locales?.filter((i: any) => i.code !== this.$i18n.locale)
    },
    currentLocale () {
      return this.$i18n.locales?.filter((i: any) => i.code === this.$i18n.locale)[0]
    }
  }
})
</script>

<style lang="scss" scoped>

.languageswitch {
  text-align: center;
  width: 5rem;
  height: 4rem;
  @media screen and (max-width: $tablet-breakpoint) {
    margin-right: 1rem;
  }
  &__btn {
    background-color: $background-dark;
    width: 100%;
  }
  &__menuitem {
    width: 5rem;
    height: 4rem;
    a {
      text-decoration: none;
      width: 100%;
      text-align: center;
    }
  }
}

</style>
