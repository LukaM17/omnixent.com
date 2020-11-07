<template>
  <div style="margin-top: 10rem;">
    <SearchBox @searchStatus="searchResult" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    searchResult (status: Promise<any>): void {
      status
        .then(res => console.log(res.data.result))
        .catch(err => console.log(err))
    }
  }
})
</script>
