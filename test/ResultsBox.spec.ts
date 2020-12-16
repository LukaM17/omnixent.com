import { mount, createLocalVue } from '@vue/test-utils'
import ResultsBox from '@/components/ResultsBox.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('ResultsBox', () => {
  let store: any
  beforeEach(() => {
    store = new Vuex.Store(
      {
        state: {
          country: null,
          language: null,
          result: [],
          service: null,
          term: null,
          uuid: null
        }
      }
    )
  })
  test('is a Vue instance', () => {
    const wrapper = mount(ResultsBox, { store, localVue })
    expect(wrapper.vm).toBeTruthy()
  })
})
