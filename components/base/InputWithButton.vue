<template>
  <div class="inputwithbtn">
    <o-input
      ref="inputTerm"
      v-model="value"
      input-class="inputwithbtn__input"
      type="text"
      :class="{'inputwithbtn__input--highlight': isReadyToSend && !this.isValueEmpty }"
      :placeholder="placeholder"
      :disabled="disabled"
      @keyup.native.enter="submit"
    />
    <o-button
      :disabled="isValueEmpty || disabled"
      disabled-class="inputwithbtn__btn--disabled"
      class="inputwithbtn__btn"
      :class="{'inputwithbtn__btn--highlight': isReadyToSend && !this.isValueEmpty}"
      @click="submit"
      @mouseover.self="isReadyToSend = true"
      @mouseleave.self="isReadyToSend = false"
    >
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
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isReadyToSend: false,
      value: ''
    }
  },
  computed: {
    isValueEmpty (): boolean {
      return this.value.length === 0 || !this.value.trim()
    }
  },
  methods: {
    submit (): void {
      if (!this.isValueEmpty) {
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
      color: $placeholder-color;
    }
    &:focus-within {
      outline: none;
    }
    &:disabled {
      cursor: not-allowed;
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
      &--highlight > input {
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
