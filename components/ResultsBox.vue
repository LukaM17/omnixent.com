<template>
  <div class="resultsbox">
    <h3 v-if="results">⚠️ You're looking for <span class="resultsbox__highlighted-term">"{{results.term}}"</span>, but this is a WIP component, more info <a href="https://github.com/omnixent/omnixent-front/issues/2">here</a>. To see complete API results please open the console.</h3>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    results: null
  }
})
</script>

<style lang="scss" scoped>
.resultsbox {
  color: white;
  display: flex;
  flex-basis: content;

  &__highlighted-term {
    color: $secondary;
  }

  a {
    color: $primary;
  }
}
</style>
