import { mount } from '@vue/test-utils'
import ResultsBox from '@/components/ResultsBox.vue'

describe('ResultsBox', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ResultsBox)
    expect(wrapper.vm).toBeTruthy()
  })
})
