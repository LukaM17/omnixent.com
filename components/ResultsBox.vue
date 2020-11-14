<template>
  <div>a</div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({})
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
