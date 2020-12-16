<template>
  <div class="resultsbox">
    <div class="row">
      <div class="col-xs-12 col-lg-12">
        <TabSelector v-model="selectedTermIndex" :tab-items="results" :background="false" />
      </div>
    </div>
    <div class="row row-center">
      <div class="resultsbox__filtered-terms col-xs-12 col-lg-12">
        <div v-for="result in resultAtIndex(selectedTermIndex)" :key="result.id" class="resultsbox__filtered-term">
          <span v-html="result"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      selectedTermIndex: Number
    }
  },
  methods: {
    resultAtIndex (index) {
      return this.$store.state.result[index] ? this.$store.state.result[index].result.map((result) => {
        return result
          .replace(
            this.$store.state.result[index].term, `<span class="resultsbox__highlighted-term">${this.$store.state.result[index].term}</span>`
          )
          .replace(
            this.$store.state.term, `<span class="resultsbox__highlighted-serchedterm">${this.$store.state.term}</span>`
          )
      }) : []
    }
  },
  computed: {
    results () {
      return this.$store.state.result.map((result, index) => {
        return {
          value: `${index}`,
          text: result.term.replace(this.$store.state.term, '*')
        }
      })
    }
  }
})
</script>

<style lang="scss">
.resultsbox {
  color: white;

  &__highlighted-serchedterm {
    color: $secondary;
    font-weight: bold;
  }

  &__highlighted-term {
    color: $primary;
    font-weight: bold;
  }

  &__filtered-terms {
    text-align: center;
    padding: 2rem;
  }

  &__filtered-term {
    line-height: 2rem;
  }

  a {
    color: $primary;
  }
}
</style>
