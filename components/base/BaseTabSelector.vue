<template>
  <div :style="dimension" class="tab-selector" :class="{ background: background }">
    <BaseButton
      v-for="(item, index) in tabItems"
      :key="index"
      width="9"
      height="60"
      :color="whichSelected === index ? 'secondary' : buttonColor"
      @click="changeTab(index)"
    >
      {{ item.text }}
    </BaseButton>
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
      this.$emit('tabChange', this.tabItems[index].value)
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
}

.background {
  background-color: $background-dark;
}
</style>
