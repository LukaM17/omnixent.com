<template>
  <div class="tab-selector">
    <o-button
      v-for="(item, index) in tabItems"
      :key="index"
      size="large"
      class="tab-selector__btn"
      :inverted="selectedTab !== index"
      invertedClass="tab-selector__btn--inverted"
      @click="changeTab(index)"
    >
      <span><i :class="[item.iconFamily, item.icon]" class="tab-selector__icon-label"></i><span class="hide-on-mobile">{{ item.text }}</span></span>
    </o-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface Item {
  value: string,
  icon: string,
  iconFamily: string,
  text: string
}

export default Vue.extend({
  props: {
    value: {
      type: [String],
      required: true
    },
    tabItems: {
      type: Array as () => Array<Item>,
      required: true
    }
  },
  data () {
    return {
      selectedTab: 0
    }
  },
  methods: {
    changeTab (index: number): void {
      this.selectedTab = index
      // event emission when change the selected tab
      this.$emit('input', this.tabItems[index].value)
    }
  }
})
</script>

<style lang="scss" scoped>
.tab-selector {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: transparent;
  box-sizing: content-box;
  border-radius: 25px;

  @media screen and (max-width: $desktop-breakpoint) {
    justify-content: space-evenly;
  }

  &__btn {
    background: $secondary;
    color: $background-dark;
    padding: var(--oruga-button-padding,calc(.375em - 1px) .75em);
    @media screen and (min-width: $mobile-breakpoint) {
      width: 8rem;
    }
    &--inverted {
      background-color: $background-dark;
      color: white;
    }
  }

  &__icon-label {
    margin-right: 0.5rem;
    @media screen and (max-width: $mobile-breakpoint) {
      margin-left: 0.5rem;
    }
  }
}

</style>
