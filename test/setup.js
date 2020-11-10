import Vue from 'vue'
import Icon from '@/components/base/Icon.vue'
import InputWithButton from '@/components/base/InputWithButton.vue'
import ListSelector from '@/components/base/ListSelector.vue'
import TabSelector from '@/components/base/TabSelector.vue'
import OmnixentClient from '@/client/client'
import { Button, Dropdown, Input, Config } from '@oruga-ui/oruga'

Vue.component('Icon', Icon)
Vue.component('InputWithButton', InputWithButton)
Vue.component('ListSelector', ListSelector)
Vue.component('TabSelector', TabSelector)

Vue.prototype.$omnixentClient = new OmnixentClient()

Vue.use(Button)
Vue.use(Dropdown)
Vue.use(Input)
Vue.use(Config, {
  input: {
    override: true
  }
})
