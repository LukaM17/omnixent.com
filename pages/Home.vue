<template>
  <div class="">
    <div class="main-container">
      <div class="title-container">
        <h1>{{ $t('title') }}</h1>
        <h2>{{ $t('subtitle') }}</h2>
      </div>
      <SearchBox @searchStatus="searchResult" />
    </div>
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
  font-size: 5.5vw;
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
