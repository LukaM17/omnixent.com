<template>
  <SearchBox width="75" @searchStarted="search" />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    search (query: string, service: string, language: string, country: string) {
      console.log('query: ' + query)
      console.log('service: ' + service)
      console.log('language: ' + language)
      console.log('country : ' + country)
    }
  }
})
</script>

<style lang="scss" scoped>
.selectors {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
