import { describe, it, expect } from 'vitest'
import AutoCenter from '../AutoCenter.vue'
import { createMount } from '../../../utils/test-utils'

const mountAutoCenter = createMount(AutoCenter)

describe('AutoCenter', () => {
  it('should render correctly', () => {
    const wrapper = mountAutoCenter({
      slots: {
        default: 'Test content'
      }
    })
    expect(wrapper.find('.adm-auto-center').exists()).toBe(true)
    expect(wrapper.find('.adm-auto-center-content').exists()).toBe(true)
    expect(wrapper.text()).toBe('Test content')
  })

  it('should render with different content types', () => {
    const wrapper = mountAutoCenter({
      slots: {
        default: '<span>HTML content</span>'
      }
    })
    expect(wrapper.find('.adm-auto-center-content').html()).toContain('<span>HTML content</span>')
  })

  it('should support empty content', () => {
    const wrapper = mountAutoCenter()
    expect(wrapper.find('.adm-auto-center').exists()).toBe(true)
    expect(wrapper.find('.adm-auto-center-content').exists()).toBe(true)
    expect(wrapper.find('.adm-auto-center-content').text()).toBe('')
  })

  it('should have correct CSS classes', () => {
    const wrapper = mountAutoCenter({
      slots: {
        default: 'Test'
      }
    })

    const container = wrapper.find('.adm-auto-center')
    const content = wrapper.find('.adm-auto-center-content')

    expect(container.exists()).toBe(true)
    expect(content.exists()).toBe(true)
    expect(container.classes()).toContain('adm-auto-center')
    expect(content.classes()).toContain('adm-auto-center-content')
  })

  it('should support native props', () => {
    const wrapper = mountAutoCenter({
      props: {
        id: 'test-auto-center',
        'data-testid': 'auto-center',
        class: 'custom-class'
      },
      slots: {
        default: 'Test'
      }
    })

    const container = wrapper.find('.adm-auto-center')
    expect(container.attributes('id')).toBe('test-auto-center')
    expect(container.attributes('data-testid')).toBe('auto-center')
    expect(container.classes()).toContain('custom-class')
  })

  it('should handle long content correctly', () => {
    const longContent = 'This is a very long text content that should be handled properly by the AutoCenter component'
    const wrapper = mountAutoCenter({
      slots: {
        default: longContent
      }
    })

    expect(wrapper.text()).toBe(longContent)
    expect(wrapper.find('.adm-auto-center-content').text()).toBe(longContent)
  })

  it('should handle multiple child elements', () => {
    const wrapper = mountAutoCenter({
      slots: {
        default: '<span>First</span><span>Second</span>'
      }
    })

    expect(wrapper.find('.adm-auto-center-content').html()).toContain('<span>First</span>')
    expect(wrapper.find('.adm-auto-center-content').html()).toContain('<span>Second</span>')
  })
})
