import { mount } from '@vue/test-utils'
import InputWithButton from '@/components/base/InputWithButton.vue'

describe('InputWithButton', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(InputWithButton)
    expect(wrapper.vm).toBeTruthy()
  })
  test('should detect empty strings', () => {
    const wrapper = mount(InputWithButton)
    const componentInstance: any = wrapper.vm
    expect(componentInstance.isValueEmpty).toBeTruthy()
    wrapper.setData({ value: 'asd' })
    expect(componentInstance.isValueEmpty).toBeFalsy()
    wrapper.setData({ value: '      ' })
    expect(componentInstance.isValueEmpty).toBeTruthy()
  })
  test('should emit "submit" event only with non-empty value', async () => {
    const wrapper = mount(InputWithButton)
    const componentInstance: any = wrapper.vm
    wrapper.setData({ value: '' })
    componentInstance.submit()
    await componentInstance.$nextTick()
    expect(wrapper.emitted('submit')).toBeFalsy()
    wrapper.setData({ value: 'asd' })
    componentInstance.submit()
    await componentInstance.$nextTick()
    expect(wrapper.emitted('submit')).toHaveLength(1)
  })
})
