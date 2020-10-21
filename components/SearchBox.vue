<template>
  <div class="searchbox" :style="dimension">
    <div class="row">
      <BaseInputWithButton width="50" height="100" @submit="startSearch">
        <BaseIcon width="41" height="21" view-box="0 0 41 21">
          <RightArrow />
        </BaseIcon>
      </BaseInputWithButton>
      <div class="row">
        <div class="country">
          <BaseListSelector v-model="selectedCountry" width-close="5" width-open="13" height="60" :options-list="supportedCountries" />
          <p class="label">
            {{ $t('country') }}
          </p>
        </div>
        <div class="language">
          <BaseListSelector v-model="selectedLanguage" width-close="10" width-open="10" height="60" :options-list="supportedLanguages" />
          <p class="label">
            {{ $t('language') }}
          </p>
        </div>
          <o-select placeholder="Select a name">
            <option value="flint">Flint</option>
            <option value="silver">Silver</option>
          </o-select>
      </div>
    </div>
    <div class="row">
      <BaseTabSelector v-model="selectedService" width="30" :tab-items="availableServices" :background="false" />
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
.searchbox {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto auto;

  .row {
    margin: 10px 0 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .country {
      margin: 0 20px 0 0;
    }

    .country,
    .language {
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
