import { mount } from '@vue/test-utils'
import SearchBox from '@/components/SearchBox.vue'
import BaseInputWithButton from '@/components/base/BaseInputWithButton.vue'

const $t = () => {}
export const mockSearch = jest.fn();
const $omnixentClient =  {
  search: mockSearch
};

describe('SearchBox', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(SearchBox, {
      mocks: { $t }
    })
    expect(wrapper.vm).toBeTruthy()
  }),
  test('start search on text input', async () => {
    const wrapper = mount(SearchBox, {
      mocks: {
        $t,
        $omnixentClient
      }
    })
    const submitComponent = wrapper.findComponent(BaseInputWithButton)
    submitComponent.vm.$emit('submit', 'Java')
    expect(wrapper.emitted('searchStatus')).toHaveLength(1)
    expect(mockSearch.mock.calls[0]).toEqual(["Java", "google", "it", "italy"]);
  })
})
