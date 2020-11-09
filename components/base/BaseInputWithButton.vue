<template>
  <div class="inputwithbtn">
    <o-input
      v-model="value"
      inputClass="inputwithbtn__input"
      ref="inputTerm"
      type="text"
      :placeholder="placeholder"
      @keyup.native.enter="submit"></o-input>
    <o-button
      :disabled="isEmpty"
      disabledClass="inputwithbtn__btn--disabled"
      class="inputwithbtn__btn"
      @click="submit"
      @mouseover.self="onButtonHover"
      @mouseleave.self="onButtonLeave">
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
    isEmpty (): boolean {
      return this.value === ''
    }
  },
  methods: {
    onButtonLeave (e: Event): void {
      ((this.$refs.inputTerm as Vue).$refs.input as HTMLElement).classList.remove('inputwithbtn__input--highlight')
      return (e.target as HTMLElement).classList.remove('inputwithbtn__btn--highlight')
    },
    onButtonHover (e: Event): void {
      if (this.isEmpty) {
        return
      }
      // e.target.classList.add('inputwithbtn__btn--highlight')
      ((this.$refs.inputTerm as Vue).$refs.input as HTMLElement).classList.add('inputwithbtn__input--highlight')
      return (e.target as HTMLElement).classList.add('inputwithbtn__btn--highlight')
    },
    submit (): void {
      if (!this.isEmpty) {
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
      padding-right: 120px;
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
    &--highlight {
      background-color: $primary-dark;
    }
    &--disabled {
      color: $disabled-color;
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
      min-width: 120px;
      border-radius: 0 20px 20px 0;
    }
  }

}
</style>
