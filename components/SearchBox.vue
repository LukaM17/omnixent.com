<template>
  <div class="searchbox">
    <div class="row row-center">
      <div class="col-xs-12 col-lg-8">
        <InputWithButton :placeholder="$t('searchExample')" @submit="startSearch">
          <i class="fas fa-angle-right hide-on-mobile" />
          <p class="show-on-mobile">{{ $t('search') }}</p>
        </InputWithButton>
      </div>
      <div class="col-xs-12 col-lg-4">
        <div class="row row-center list-selectors-wrapper">
          <div class="col-xs-6 col-lg-6">
            <div class="box">
              <ListSelector v-model="selectedCountry" :options-list="supportedCountries" />
              <p class="searchbox__label">
                {{ $t('country') }}
              </p>
            </div>
          </div>
          <div class="col-xs-6 col-lg-6">
            <div class="box">
              <ListSelector v-model="selectedLanguage" :options-list="supportedLanguages" />
              <p class="searchbox__label">
                {{ $t('language') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row tab-selector-wrapper">
      <div class="col-xs-12 col-lg-6">
        <TabSelector v-model="selectedService" :tab-items="availableServices" :background="false" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { TranslateResult } from 'vue-i18n'

export default Vue.extend({
  components: {},
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
          text: this.$t('Google') as TranslateResult,
          iconFamily: 'fab',
          icon: 'fa-google'
        },
        {
          value: 'youtube',
          text: this.$t('YouTube') as TranslateResult,
          iconFamily: 'fab',
          icon: 'fa-youtube'
        },
        {
          value: 'amazon',
          text: this.$t('Amazon') as TranslateResult,
          iconFamily: 'fab',
          icon: 'fa-amazon'
        }
      ],
      selectedService: 'google',
      supportedLanguages: [
        {
          value: 'en',
          text: this.$t('English') as TranslateResult
        },
        {
          value: 'it',
          text: this.$t('Italian') as TranslateResult
        },
        {
          value: 'fr',
          text: this.$t('French') as TranslateResult
        },
        {
          value: 'de',
          text: this.$t('German') as TranslateResult
        }
      ],
      selectedLanguage: 'en',
      supportedCountries: [
        {
          value: 'us',
          icon: '🇺🇸',
          text: this.$t('United States') as TranslateResult
        },
        {
          value: 'uk',
          icon: '🇬🇧',
          text: this.$t('United Kingdom') as TranslateResult
        },
        {
          value: 'it',
          icon: '🇮🇹',
          text: this.$t('Italy') as TranslateResult
        },
        {
          value: 'de',
          icon: '🇩🇪',
          text: this.$t('Germany') as TranslateResult
        },
        {
          value: 'fr',
          icon: '🇫🇷',
          text: this.$t('France') as TranslateResult
        },
        {
          value: 'at',
          icon: '🇦🇹',
          text: this.$t('Austria') as TranslateResult
        }
      ],
      selectedCountry: 'us'
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
  margin-bottom: 3rem;

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
