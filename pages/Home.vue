<template>
  <SearchBox width="75" @searchStarted="search" />
</template>

<script lang="ts">
import Vue from 'vue'
import OmnixentClient from '@/client/client'

export default Vue.extend({
  methods: {
    search (query: string, service: string, language: string, country: string) {
      OmnixentClient.startSearch(query, service, language, country)
        .then(res => console.log(res.data.result))
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
