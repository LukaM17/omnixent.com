<template>
  <div class="inputwithbtn">
    <o-input inputClass="inputwithbtn__input" ref="inputTerm" type="text" :placeholder="placeholder"></o-input>
    <o-button class="inputwithbtn__btn" @click="submit">
      <slot />
    </o-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    placeholder: {
      type: String,
      default: 'placeholder'
    }
  },
  data () {
    return {

    }
  },
  methods: {
    submit (): void {
      this.$emit('submit', (this.$refs.inputTerm as HTMLInputElement).value)
    }
  }
})
</script>

<style lang="scss" scoped>
.inputwithbtn {
  position: relative;

  ::v-deep &__input {
    width: 100%;
    height: 100%;
    border: 4px solid $primary;
    border-radius: 20px;
    background-color: $background;
    font-size: 40px;
    padding: 0 0 0 4%;
    color: #FFFFFF;
    z-index: 2;
    &::placeholder {
      color: #FFFFFF50;
    }
    &:focus-within {
      outline: none;
    }
  }

  ::v-deep &__btn {
    position: absolute;
    right: 0px;
    top: 0px;
    bottom: 0px;
    width: 13%;
    min-width: 120px;
    border-radius: 0 20px 20px 0;
    border: none;
    background-color: $primary;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 200ms linear;
    z-index: 1;
    &:hover {
      background-color: $primary-dark;
    }
  }

}
</style>
