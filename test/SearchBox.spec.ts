import { mount } from '@vue/test-utils'
import SearchBox from '@/components/SearchBox.vue'
import InputWithButton from '@/components/base/InputWithButton.vue'

const $t = () => {}
const mockSearch = jest.fn()
const $omnixentClient = {
  search: mockSearch
}

describe('SearchBox', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(SearchBox, {
      mocks: { $t }
    })
    expect(wrapper.vm).toBeTruthy()
  })
  test('should not start search if text input is empty', () => {
    const wrapper = mount(SearchBox, {
      mocks: {
        $t,
        $omnixentClient
      }
    })
    const submitComponent = wrapper.findComponent(InputWithButton)
    submitComponent.vm.$emit('submit', '')
    expect(wrapper.emitted('searchStatus')).toBeFalsy()
  })
  test('should start search on text input', () => {
    const wrapper = mount(SearchBox, {
      mocks: {
        $t,
        $omnixentClient
      }
    })
    const submitComponent = wrapper.findComponent(InputWithButton)
    submitComponent.vm.$emit('submit', 'Java')
    expect(wrapper.emitted('searchStatus')).toHaveLength(1)
    expect(mockSearch.mock.calls[0]).toEqual(['Java', 'google', 'en', 'us'])
  })
})
