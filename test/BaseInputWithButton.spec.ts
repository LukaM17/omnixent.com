import { mount } from '@vue/test-utils'
import BaseInputWithButton from '@/components/base/BaseInputWithButton.vue'

describe('BaseInputWithButton', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(BaseInputWithButton)
    expect(wrapper.vm).toBeTruthy()
  })
  test('should detect empty strings', () => {
    const wrapper = mount(BaseInputWithButton)
    const componentInstance: any = wrapper.vm
    expect(componentInstance.isValueEmpty).toBeTruthy()
    wrapper.setData({ value: 'asd' })
    expect(componentInstance.isValueEmpty).toBeFalsy()
    wrapper.setData({ value: '      ' })
    expect(componentInstance.isValueEmpty).toBeTruthy()
  })
  test('should emit "submit" event only with non-empty value', async () => {
    const wrapper = mount(BaseInputWithButton)
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
