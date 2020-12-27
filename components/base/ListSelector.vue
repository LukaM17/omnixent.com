<template>
  <o-dropdown
    v-model="selectedOption"
    :scrollable="true"
    aria-role="list"
    class="listselector"
    :disabled="disabled"
    disabled-class="listselector--disabled"
    expanded
    @change="onChange"
  >
    <o-button slot="trigger" type="button" root-class="listselector__btn">
      <template>
        <span>{{ selectedOption.icon ? selectedOption.icon : selectedOption.text }}</span>
      </template>
    </o-button>
    <o-dropdown-item v-for="(menu, index) in optionsList" :key="index" :value="menu" aria-role="listitem" class="listselector__menuitem">
      <span v-if="menu.icon" class="listselector__menuitem__icon">
        {{ menu.icon }}
      </span>
      <span class="listselector__menuitem__text">{{ menu.text }}</span>
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
    },
    disabled: {
      type: Boolean,
      default: false
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

  ::v-deep .o-dropdown-menu {
    min-width: 13rem !important;
    left: unset !important;
    top: unset !important;
  }

  &--disabled {
    cursor: not-allowed;
  }

  &__btn {
    background-color: $background-dark;
    width: 100%;
  }
  &__menuitem {
    &__icon {
      margin: 0 10px 0 0;
    }
  }
}

</style>
