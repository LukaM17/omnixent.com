<template>
  <div :style="dimension" class="tab-selector">
    <o-button
      v-for="(item, index) in tabItems"
      :key="index"
      size="large"
      class="tab-selector__btn"
      :inverted="whichSelected !== index"
      invertedClass="tab-selector__btn--inverted"
      @click="changeTab(index)"
    >
      {{ item.text }}
    </o-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface Item {
  value: string,
  icon: string,
  text: string
}

export default Vue.extend({
  props: {
    value: {
      type: [String],
      required: true
    },
    width: {
      type: [Number, String],
      required: true
    },
    tabItems: {
      type: Array as () => Array<Item>,
      required: true
    },
    background: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      // style
      dimension: {
        width: `${this.width}vw`,
        backgroundColor: this.background ? '$background-dark' : 'transparent'
      },
      // data
      selectedTab: 0
    }
  },
  computed: {
    whichSelected (): Number {
      return this.selectedTab
    },
    buttonColor  (): string {
      return this.background ? 'background' : 'background-dark'
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
  padding: 15px;
  box-sizing: content-box;
  border-radius: 25px;

  &__btn {
    background: $secondary;
    color: $background-dark;
    &--inverted {
      background-color: $background-dark;
      color: white;
    }
  }
}

</style>
