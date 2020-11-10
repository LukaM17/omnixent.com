<template>
  <o-dropdown
    :scrollable="true"
    @change="onChange"
    v-model="selectedOption"
    aria-role="list"
    class="listselector"
    expanded>
    <o-button type="button" slot="trigger" rootClass="listselector__btn">
      <template>
        <span>{{ selectedOption.icon ? selectedOption.icon : selectedOption.text }}</span>
      </template>
    </o-button>
    <o-dropdown-item v-for="(menu, index) in optionsList" :key="index" :value="menu" aria-role="listitem" class="listselector__menuitem">
      <span v-if="menu.icon" class="listselector__menuitem__icon">
        {{ menu.icon }}
      </span>
      <span class="listselector__menuitem__text">{{menu.text}}</span>
    </o-dropdown-item>
  </o-dropdown>
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
      selectedOption: this.optionsList[0]
    }
  },
  methods: {
    onChange (selectedElement: Item) {
      this.$emit('input', selectedElement.value)
    }
  }
})
</script>

<style lang="scss" scoped>

.listselector {
  &__btn {
    background-color: $background-dark;
    width: 100%;
  }
  &__menuitem {
    &__icon {
      margin: 0 10px 0 0;
    }
    &__text {

    }
  }
}

</style>
