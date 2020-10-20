<template>
  <div class="searchbox" :style="dimension">
    <div class="row">
      <BaseInputWithButton width="50" height="100" @submit="startSearch">
        <BaseIcon width="41" height="21" view-box="0 0 41 21">
          <RightArrow />
        </BaseIcon>
      </BaseInputWithButton>
      <div class="row">
        <div class="paese">
          <BaseListSelector width-close="5" width-open="13" height="60" :options-list="supportedCountries" @optionChange="changeCountry" />
          <p class="label">
            paese
          </p>
        </div>
        <div class="lingua">
          <BaseListSelector width-close="10" width-open="10" height="60" :options-list="supportedLanguages" @optionChange="changeLanguage" />
          <p class="label">
            lingua
          </p>
        </div>
      </div>
    </div>
    <div class="row">
      <BaseTabSelector width="30" :tab-items="availableServices" @tabChange="changeService" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import RightArrow from '@/assets/icons/RightArrow.vue'
import { TranslateResult } from 'vue-i18n'

export default Vue.extend({
  components: { RightArrow },
  props: {
    width: {
      type: [Number, String],
      default: 100
    }
  },
  data () {
    return {
      // style
      dimension: {
        width: `${this.width}%`
      },
      // data
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

<style lang="scss" scoped>
.searchbox {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto auto;

  .row {
    margin: 1% 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .paese {
      margin: 0 20px 0 0;
    }

    .paese,
    .lingua {
      margin-top: 20px;
    }

    .label {
      height: 20px;
      margin: 5px 0 0 0;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-size: 15px;
      font-weight: 600;
    }

  }

}
</style>
