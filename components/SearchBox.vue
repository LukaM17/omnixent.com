<template>
  <div class="searchbox">
    <div class="row row-center">
      <div class="col-xs-12 col-lg-8">
        <BaseInputWithButton @submit="startSearch" placeholder="Search">
          <BaseIcon width="41" height="21" view-box="0 0 41 21">
            <RightArrow />
          </BaseIcon>
        </BaseInputWithButton>
      </div>
      <div class="col-xs-12 col-lg-4">
        <div class="row row-center list-selectors-wrapper">
          <div class="col-xs-6 col-lg-6">
            <div class="box">
              <BaseListSelector v-model="selectedCountry" :options-list="supportedCountries" />
              <p class="searchbox__label">
                {{ $t('country') }}
              </p>
            </div>
          </div>
          <div class="col-xs-6 col-lg-6">
            <div class="box">
              <BaseListSelector v-model="selectedLanguage" :options-list="supportedLanguages" />
              <p class="searchbox__label">
                {{ $t('language') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row tab-selector-wrapper">
      <div class="col-xs-12 col-lg-5">
        <BaseTabSelector v-model="selectedService" :tab-items="availableServices" :background="false" />
      </div>
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
      // data
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
      if (query !== '') {
        // emit the search status
        this.$emit('searchStatus', this.$omnixentClient.search(query, this.selectedService, this.selectedLanguage, this.selectedCountry))
      }
    }
  }

})
</script>

<style lang="scss" scoped>
.tab-selector-wrapper {
  padding-top: 2rem;
}
.list-selectors-wrapper {
  @media screen and (min-width: $desktop-breakpoint) {
    margin-left: 2rem;
  }
  @media screen and (max-width: $desktop-breakpoint) {
    margin-top: 2rem;
  }
}
.searchbox {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto auto;
  width: 100%;

  &__label {
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
</style>
