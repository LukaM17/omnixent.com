<template>
  <div class="">
    <div class="main-container">
      <div class="title-container">
        <h1>{{ $t('title') }}</h1>
        <h2>{{ $t('subtitle') }}</h2>
      </div>
      <SearchBox @searchStatus="searchResult" />
      <h3 v-if="inProgress">Searching...</h3>
      <h3 v-if="error">Error fetching Omnixent API, please retry!</h3>
      <ResultsBox v-if="searchResults" :results="searchResults"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex'

export default Vue.extend({
  data () {
    return {
      inProgress: false,
      error: false,
      searchResults: null
    }
  },
  methods: {
    ...mapMutations({
      saveResults: 'addResult'
    }),
    searchResult (status: Promise<any>): void {
      this.searchResults = null
      this.inProgress = true
      this.error = false
      status
        .then((res) => {
          this.saveResults(res.data.result)
        })
        .catch((err) => {
          console.error(err)
          this.error = true
        })
        .finally(() => { this.inProgress = false })
    }
  }
})
</script>

<style lang="scss" scoped>
h1 {
  color: $secondary;
  font-weight: 700;
  font-size: 4rem;
  @media screen and (min-width: $desktop-breakpoint) {
    font-size: 6rem;
    &::before {
      content: "''";
      position: absolute;
      margin-left: -4rem;
      font-style: oblique;
    }
  }
}
h2 {
  color: white;
  font-weight: 700;
  font-size: 5vw;
}
h3 {
  color: white;
}
.main-container {
  margin: 0 auto;
  min-height: 100vh;
  max-width: 1080px;
  @media screen and (max-width: $tablet-breakpoint) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
}
.title-container {
  margin-bottom: 2rem;
}
</style>
