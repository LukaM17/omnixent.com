<template>
  <div class="inputwithbtn">
    <o-input
      v-model="value"
      inputClass="inputwithbtn__input"
      ref="inputTerm"
      type="text"
      :placeholder="placeholder"
      @keyup.native.enter="submit"></o-input>
    <o-button :disabled="isDisabled" class="inputwithbtn__btn" @click="submit" @mouseover.self="onButtonHover()" @mouseleave.self="onButtonLeave()">
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
      value: ''
    }
  },
  computed: {
    isDisabled (): boolean {
      return this.value === ''
    }
  },
  methods: {
    onButtonLeave (): void {
      ((this.$refs.inputTerm as Vue).$refs.input as HTMLElement).classList.remove('inputwithbtn__input--highlight')
    },
    onButtonHover (): void {
      ((this.$refs.inputTerm as Vue).$refs.input as HTMLElement).classList.add('inputwithbtn__input--highlight')
    },
    submit (): void {
      if (!this.isDisabled) {
        this.$emit('submit', this.value)
      }
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
    background-color: $background;
    font-size: 40px;
    color: #FFFFFF;
    transition: all 200ms linear;
    z-index: 2;
    &::placeholder {
      color: #FFFFFF50;
    }
    &:focus-within {
      outline: none;
    }

    @media screen and (max-width: $mobile-breakpoint) {
      border: none;
      border-bottom: 4px solid $primary;
      padding: 0.4rem;
    }
    @media screen and (min-width: $mobile-breakpoint) {
      padding: 1.2rem;
      border: 4px solid $primary;
      border-radius: 20px;
      &--highlight {
        padding: 1.2rem;
        border-radius: 20px;
        border: 4px solid $primary-dark;
      }
    }
  }

  ::v-deep &__btn {
    border: none;
    background-color: $primary;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 200ms linear;
    z-index: 1;
    font-size: 2.5rem;
    font-weight: 100;
    &:hover {
      background-color: $primary-dark;
    }
    @media screen and (max-width: $mobile-breakpoint) {
      width: 100%;
      margin-top: 2rem;
      min-height: 4rem;
    }
    @media screen and (min-width: $mobile-breakpoint) {
      position: absolute;
      right: 0px;
      top: 0px;
      bottom: 0px;
      width: 13%;
      min-width: 120px;
      border-radius: 0 20px 20px 0;
    }
  }

}
</style>
