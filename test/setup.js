import Vue from 'vue'
import BaseIcon from '@/components/base/BaseIcon.vue'
import BaseInputWithButton from '@/components/base/BaseInputWithButton.vue'
import BaseListSelector from '@/components/base/BaseListSelector.vue'
import BaseTabSelector from '@/components/base/BaseTabSelector.vue'
import OmnixentClient from '@/client/client'
import { Button, Dropdown, Input, Config } from '@oruga-ui/oruga'

Vue.component('BaseIcon', BaseIcon)
Vue.component('BaseInputWithButton', BaseInputWithButton)
Vue.component('BaseListSelector', BaseListSelector)
Vue.component('BaseTabSelector', BaseTabSelector)

Vue.prototype.$omnixentClient = new OmnixentClient()

Vue.use(Button)
Vue.use(Dropdown)
Vue.use(Input)
Vue.use(Config, {
  input: {
    override: true
  }
})
