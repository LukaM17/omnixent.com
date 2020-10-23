import Vue from 'vue'
import { Button, Dropdown, Input, Config } from '@oruga-ui/oruga'

Vue.use(Button)
Vue.use(Dropdown)
Vue.use(Input)
Vue.use(Config, {
  input: {
    override: true
  }
})
