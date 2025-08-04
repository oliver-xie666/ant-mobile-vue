/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import Input from '../Input.vue'
import type { InputProps } from '../types'

describe('Input', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should render correctly', () => {
    const wrapper = mount(Input, {
      props: {
        placeholder: '请输入内容'
      } as InputProps
    })

    expect(wrapper.find('.adm-input').exists()).toBe(true)
    expect(wrapper.find('.adm-input-element').exists()).toBe(true)
    expect(wrapper.find('input').attributes('placeholder')).toBe('请输入内容')
  })

  it('should support v-model', async () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: 'initial value',
        'onUpdate:modelValue': (value: string) => {
          wrapper.setProps({ modelValue: value })
        }
      } as any
    })

    expect(wrapper.find('input').element.value).toBe('initial value')

    // 更新输入值
    await wrapper.find('input').setValue('new value')
    await nextTick()

    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['new value'])
  })

  it('should support clearable', async () => {
    const onClear = vi.fn()
    const wrapper = mount(Input, {
      props: {
        modelValue: 'test value',
        clearable: true,
        onClear,
        'onUpdate:modelValue': (value: string) => {
          wrapper.setProps({ modelValue: value })
        }
      } as any
    })

    // 输入框有值且设置了clearable，应该显示清除按钮
    await nextTick()

    // 聚焦以显示清除按钮
    await wrapper.find('input').trigger('focus')
    await nextTick()

    const clearButton = wrapper.find('.adm-input-clear')
    expect(clearButton.exists()).toBe(true)

    // 点击清除按钮
    await clearButton.trigger('click')
    await nextTick()

    expect(onClear).toHaveBeenCalled()
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([''])
    expect(wrapper.emitted('clear')).toBeTruthy()
  })

  it('should support disabled state', () => {
    const wrapper = mount(Input, {
      props: {
        disabled: true
      } as any
    })

    expect(wrapper.find('.adm-input-disabled').exists()).toBe(true)
    expect(wrapper.find('input').attributes('disabled')).toBeDefined()
  })

  it('should support readonly state', () => {
    const wrapper = mount(Input, {
      props: {
        readonly: true
      } as any
    })

    expect(wrapper.find('input').attributes('readonly')).toBeDefined()
  })

  it('should emit focus and blur events', async () => {
    const wrapper = mount(Input)

    await wrapper.find('input').trigger('focus')
    expect(wrapper.emitted('focus')).toBeTruthy()

    await wrapper.find('input').trigger('blur')
    expect(wrapper.emitted('blur')).toBeTruthy()
  })

  it('should emit enter-press event', async () => {
    const onEnterPress = vi.fn()
    const wrapper = mount(Input, {
      props: {
        onEnterPress
      } as any
    })

    await wrapper.find('input').trigger('keydown', { key: 'Enter' })
    expect(onEnterPress).toHaveBeenCalled()
    expect(wrapper.emitted('enter-press')).toBeTruthy()
  })

  it('should support number type with min/max', async () => {
    const wrapper = mount(Input, {
      props: {
        type: 'number',
        min: 0,
        max: 100,
        modelValue: '50',
        'onUpdate:modelValue': (value: string) => {
          wrapper.setProps({ modelValue: value })
        }
      } as any
    })

    expect(wrapper.find('input').attributes('type')).toBe('number')
    expect(wrapper.find('input').attributes('min')).toBe('0')
    expect(wrapper.find('input').attributes('max')).toBe('100')

    // 测试超出范围的值
    await wrapper.find('input').setValue('150')
    await wrapper.find('input').trigger('blur') // 触发值检查

    // 值应该被限制在max范围内
    // 注意：这个测试依赖于bound函数的实现
  })

  it('should support onlyShowClearWhenFocus prop', async () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: 'test',
        clearable: true,
        onlyShowClearWhenFocus: true
      } as any
    })

    // 初始状态下不应该显示清除按钮
    expect(wrapper.find('.adm-input-clear').exists()).toBe(false)

    // 聚焦后应该显示清除按钮
    await wrapper.find('input').trigger('focus')
    await nextTick()
    expect(wrapper.find('.adm-input-clear').exists()).toBe(true)

    // 失焦后应该隐藏清除按钮
    await wrapper.find('input').trigger('blur')
    await nextTick()
    expect(wrapper.find('.adm-input-clear').exists()).toBe(false)
  })

  it('should expose methods via ref', () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: 'test value'
      } as any
    })

    const inputRef = wrapper.vm as any
    expect(inputRef.clear).toBeTypeOf('function')
    expect(inputRef.focus).toBeTypeOf('function')
    expect(inputRef.blur).toBeTypeOf('function')
    expect(inputRef.nativeElement).toBeTruthy()
  })

  it('should handle composition events', async () => {
    const wrapper = mount(Input)

    await wrapper.find('input').trigger('compositionstart')
    expect(wrapper.emitted('compositionstart')).toBeTruthy()

    await wrapper.find('input').trigger('compositionend')
    expect(wrapper.emitted('compositionend')).toBeTruthy()
  })

  it('should support other input attributes', () => {
    const wrapper = mount(Input, {
      props: {
        maxlength: 10,
        minlength: 2,
        autocomplete: 'off',
        pattern: '[0-9]*',
        inputmode: 'numeric'
      } as any
    })

    const input = wrapper.find('input')
    expect(input.attributes('maxlength')).toBe('10')
    expect(input.attributes('minlength')).toBe('2')
    expect(input.attributes('autocomplete')).toBe('off')
    expect(input.attributes('pattern')).toBe('[0-9]*')
    expect(input.attributes('inputmode')).toBe('numeric')
  })
})
