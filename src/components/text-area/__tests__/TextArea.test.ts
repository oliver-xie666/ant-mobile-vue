/* eslint-disable @typescript-eslint/no-explicit-any */
import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { nextTick } from 'vue'
import TextArea from '../TextArea.vue'

describe('TextArea', () => {
  it('should render correctly', () => {
    const wrapper = mount(TextArea, {
      props: {
        placeholder: '请输入内容'
      } as any
    })

    expect(wrapper.find('textarea').exists()).toBe(true)
    expect(wrapper.find('textarea').attributes('placeholder')).toBe('请输入内容')
  })

  it('should support v-model', async () => {
    const wrapper = mount(TextArea, {
      props: {
        value: 'initial value',
        onChange: (value: string) => {
          wrapper.setProps({ value } as any)
        }
      } as any
    })

    expect(wrapper.find('textarea').element.value).toBe('initial value')

    // 更新输入值
    await wrapper.find('textarea').setValue('new value')
    await nextTick()

    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['new value'])
    expect(wrapper.emitted('change')?.[0]).toEqual(['new value'])
  })

  it('should support disabled state', () => {
    const wrapper = mount(TextArea, {
      props: {
        disabled: true
      } as any
    })

    expect(wrapper.find('textarea').attributes('disabled')).toBeDefined()
  })

  it('should support readonly state', () => {
    const wrapper = mount(TextArea, {
      props: {
        readOnly: true
      } as any
    })

    expect(wrapper.find('textarea').attributes('readonly')).toBeDefined()
  })

  it('should support rows prop', () => {
    const wrapper = mount(TextArea, {
      props: {
        rows: 5
      } as any
    })

    expect(wrapper.find('textarea').attributes('rows')).toBe('5')
  })

  it('should support maxLength prop', async () => {
    const wrapper = mount(TextArea, {
      props: {
        maxLength: 10,
        value: 'test',
        onChange: (value: string) => {
          wrapper.setProps({ value } as any)
        }
      } as any
    })

    // 输入超过最大长度的内容
    await wrapper.find('textarea').setValue('this is a very long text')
    await nextTick()

    // 应该被截断到最大长度
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['this is a '])
  })

  it('should support showCount prop', () => {
    const wrapper = mount(TextArea, {
      props: {
        showCount: true,
        value: 'test content'
      } as any
    })

    expect(wrapper.find('.adm-text-area-count').exists()).toBe(true)
    expect(wrapper.find('.adm-text-area-count').text()).toBe('12')
  })

  it('should support showCount with maxLength', () => {
    const wrapper = mount(TextArea, {
      props: {
        showCount: true,
        maxLength: 20,
        value: 'test content'
      } as any
    })

    expect(wrapper.find('.adm-text-area-count').text()).toBe('12/20')
  })

  it('should support custom showCount function', () => {
    const customShowCount = vi.fn((length: number, maxLength?: number) => ({
      template: `<div>Custom: ${length}/${maxLength || '∞'}</div>`
    }))

    mount(TextArea, {
      props: {
        showCount: customShowCount,
        value: 'test',
        maxLength: 10
      } as any
    })

    expect(customShowCount).toHaveBeenCalledWith(4, 10)
  })

  it('should support autoSize prop', () => {
    const wrapper = mount(TextArea, {
      props: {
        autoSize: true
      } as any
    })

    expect(wrapper.find('textarea').exists()).toBe(true)
  })

  it('should support autoSize with minRows and maxRows', () => {
    const wrapper = mount(TextArea, {
      props: {
        autoSize: { minRows: 3, maxRows: 6 }
      } as any
    })

    expect(wrapper.find('textarea').exists()).toBe(true)
  })

  it('should emit focus event', async () => {
    const wrapper = mount(TextArea)

    await wrapper.find('textarea').trigger('focus')

    expect(wrapper.emitted('focus')).toBeTruthy()
  })

  it('should emit blur event', async () => {
    const wrapper = mount(TextArea)

    await wrapper.find('textarea').trigger('blur')

    expect(wrapper.emitted('blur')).toBeTruthy()
  })

  it('should emit click event', async () => {
    const wrapper = mount(TextArea)

    await wrapper.find('textarea').trigger('click')

    expect(wrapper.emitted('click')).toBeTruthy()
  })

  it('should emit keydown event', async () => {
    const wrapper = mount(TextArea)

    await wrapper.find('textarea').trigger('keydown')

    expect(wrapper.emitted('keydown')).toBeTruthy()
  })

  it('should emit enterPress event on Enter key', async () => {
    const wrapper = mount(TextArea, {
      props: {
        onEnterPress: vi.fn()
      } as any
    })

    await wrapper.find('textarea').trigger('keydown', { key: 'Enter' })

    expect(wrapper.emitted('enterPress')).toBeTruthy()
  })

  it('should support composition events', async () => {
    const wrapper = mount(TextArea)

    await wrapper.find('textarea').trigger('compositionstart')
    await wrapper.find('textarea').trigger('compositionend')

    expect(wrapper.emitted('compositionstart')).toBeTruthy()
    expect(wrapper.emitted('compositionend')).toBeTruthy()
  })

  it('should support ref methods', () => {
    const wrapper = mount(TextArea)
    const textArea = wrapper.vm as any

    expect(typeof textArea.clear).toBe('function')
    expect(typeof textArea.focus).toBe('function')
    expect(typeof textArea.blur).toBe('function')
    expect(textArea.nativeElement).toBeInstanceOf(HTMLTextAreaElement)
  })

  it('should support native props', () => {
    const wrapper = mount(TextArea, {
      props: {
        id: 'test-id',
        name: 'test-name',
        placeholder: 'test placeholder'
      } as any
    })

    const textarea = wrapper.find('textarea')
    expect(textarea.attributes('id')).toBe('test-id')
    expect(textarea.attributes('name')).toBe('test-name')
    expect(textarea.attributes('placeholder')).toBe('test placeholder')
  })
})

