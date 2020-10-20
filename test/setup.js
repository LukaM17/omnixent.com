import Vue from 'vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseIcon from '@/components/base/BaseIcon.vue'
import BaseInputWithButton from '@/components/base/BaseInputWithButton.vue'
import BaseListSelector from '@/components/base/BaseListSelector.vue'
import BaseTabSelector from '@/components/base/BaseTabSelector.vue'

Vue.component('BaseButton', BaseButton)
Vue.component('BaseIcon', BaseIcon)
Vue.component('BaseInputWithButton', BaseInputWithButton)
Vue.component('BaseListSelector', BaseListSelector)
Vue.component('BaseTabSelector', BaseTabSelector)

import OmnixentClient from '@/client/client'

Vue.prototype.$omnixentClient = new OmnixentClient()
