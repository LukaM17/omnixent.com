<template>
  <div>
    <div class="selector" :style="closedDimension" @click="toggleOptions">
      {{ selectedOption.icon ? selectedOption.icon : selectedOption.text }}
      <div v-if="optionsVisibility" class="options-container">
        <div v-for="(item, index) in optionsList" :key="index" :style="openedDimension" :class="item.text === selectedOption.text ? 'option selected' : 'option'" @click="changeOption(index)">
          <p v-if="item.icon" class="icon">
            {{ item.icon }}
          </p>
          {{ item.text }}
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
    widthClose: {
      type: [Number, String],
      required: true
    },
    widthOpen: {
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
      closedDimension: {
        width: `${this.widthClose}vw`,
        height: `${this.height}px`
      },
      openedDimension: {
        width: `${this.widthOpen}vw`,
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
  padding: 0 50px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 20px;
  background-color: $background-dark;
  font-size: 25px;
  font-weight: 600;
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
    z-index: 100;

    .option {
      font-size: 20;
      font-weight: 600;
      transition: all 100ms ease-in;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #FFFFFF;
      &:hover {
        background-color: #FFFFFF30;
      }

      .icon {
        margin: 0 10px 0 0;
      }

    }

    .selected {
      color: #FFFFFF;
      background-color: #FFFFFF10;
    }

  }

}
</style>
