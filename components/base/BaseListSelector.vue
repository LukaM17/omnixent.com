<template>
  <div>
    <div class="selector" :style="dimension" @click="toggleOptions">
      {{ selectedOption.icon ? selectedOption.icon + selectedOption.text : selectedOption.text }}
      <div v-if="optionsVisibility" class="options-container">
        <div v-for="(item, index) in optionsList" :key="index" :style="dimension" class="option" @click="changeOption(index)">
          {{ item.icon ? item.icon + item.text : item.text }}
        </div>
      </div>
    </div>
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
    height: {
      type: [Number, String],
      required: true
    },
    optionsList: {
      type: Array as () => Array<Item>,
      required: true
    }
  },
  data () {
    return {
      dimension: {
        width: `${this.width}vw`,
        height: `${this.height}px`
      },
      selectedOption: this.optionsList[0],
      optionsVisibility: false
    }
  },
  methods: {
    toggleOptions (): void {
      this.optionsVisibility = !this.optionsVisibility
    },
    changeOption (index: number): void {
      this.selectedOption = this.optionsList[index]
      // new option emission
      this.$emit('optionChange', this.selectedOption.value)
    }
  }
})
</script>

<style lang="scss" scoped>
.selector {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 15px;
  background-color: $background-dark;
  font-size: 18px;
  color: white;
  appearance: none;
  cursor: pointer;
  &:focus-within {
    outline: none
  }

  .options-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
    position: absolute;
    background-color: $background-dark;
    border-radius: 15px;

    .option {
      transition: all 100ms ease-in;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
        background-color: #FFFFFF30;
      }
    }

  }

}
</style>
