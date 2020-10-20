<template>
  <div>
    <BaseInputWithButton width="50" height="100" @submit="startSearch">
      <BaseIcon width="41" height="21" view-box="0 0 41 21">
        <RightArrow />
      </BaseIcon>
    </BaseInputWithButton>
    <br>
    <BaseTabSelector width="30" :tab-items="availableServices" @tabChange="changeService" />
    <br>
    <div class="selectors">
      <BaseListSelector width="10" height="50" :options-list="supportedLanguages" @optionChange="changeLanguage" />
      <BaseListSelector width="20" height="50" :options-list="supportedCountries" @optionChange="changeCountry" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import RightArrow from '@/assets/icons/RightArrow.vue'
import { TranslateResult } from 'vue-i18n'

export default Vue.extend({
  components: { RightArrow },
  data () {
    return {
      query: '',
      availableServices: [
        {
          value: 'google',
          text: this.$t('Google') as TranslateResult
        },
        {
          value: 'youtube',
          text: this.$t('YouTube') as TranslateResult
        },
        {
          value: 'amazon',
          text: this.$t('Amazon') as TranslateResult
        }
      ],
      selectedService: 'google',
      supportedLanguages: [
        {
          value: 'it',
          text: this.$t('Italian') as TranslateResult
        },
        {
          value: 'en',
          text: this.$t('English') as TranslateResult
        }
      ],
      selectedLanguage: 'it',
      supportedCountries: [
        {
          value: 'italy',
          icon: '🇮🇹',
          text: this.$t('Italy') as TranslateResult
        },
        {
          value: 'netherlands',
          icon: '🇳🇱',
          text: this.$t('Netherlands') as TranslateResult
        },
        {
          value: 'cuba',
          icon: '🇨🇺',
          text: this.$t('Cuba') as TranslateResult
        },
        {
          value: 'germany',
          icon: '🇩🇪',
          text: this.$t('Germany') as TranslateResult
        },
        {
          value: 'france',
          icon: '🇫🇷',
          text: this.$t('France') as TranslateResult
        }
      ],
      selectedCountry: 'italy',
      languageOptions: [
        {
          value: 'en',
          text: this.$t('English') as TranslateResult
        },
        {
          value: 'it',
          text: this.$t('Italian') as TranslateResult
        }
      ]
    }
  },
  methods: {
    startSearch (query: string): void {
      this.query = query
      this.$emit('searchStarted', this.query, this.selectedService, this.selectedLanguage, this.selectedCountry)
    },
    changeService (newService: string): void {
      this.selectedService = newService
    },
    changeLanguage (newLang: string): void {
      this.selectedLanguage = newLang
    },
    changeCountry (newCountry: string): void {
      this.selectedCountry = newCountry
    }
  }

})
</script>
