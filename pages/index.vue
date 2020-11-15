<template>
  <Home />
</template>

<script lang="ts">
import Home from '@/pages/Home.vue'
import { TranslateResult } from 'vue-i18n'

import Vue from 'vue'
export default Vue.extend({
  components: { Home },

  head () : any {
    const i18nSeo = this.$nuxtI18nSeo()
    return {
      htmlAttrs: {
        ...i18nSeo.htmlAttrs
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('subtitle') as TranslateResult
        },
        ...i18nSeo.meta!
      ],
      link: [

        ...i18nSeo.link!
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
  /* local styles */
</style>
