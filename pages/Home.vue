<template>
  <SearchBox width="75" @searchStatus="searchResult" />
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

<style lang="scss" scoped>
.selectors {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
