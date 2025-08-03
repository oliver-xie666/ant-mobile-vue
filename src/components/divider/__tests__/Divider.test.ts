import { describe, it, expect } from 'vitest'
import Divider from '../Divider.vue'
import { createMount } from '../../../utils/test-utils'

const mountDivider = createMount(Divider)

describe('Divider', () => {
  it('should render correctly', () => {
    const wrapper = mountDivider()

    expect(wrapper.find('.adm-divider').exists()).toBe(true)
    expect(wrapper.find('.adm-divider-horizontal').exists()).toBe(true)
    expect(wrapper.find('.adm-divider-center').exists()).toBe(true)
  })

  it('should render with default horizontal direction', () => {
    const wrapper = mountDivider()

    expect(wrapper.find('.adm-divider-horizontal').exists()).toBe(true)
  })

  it('should render with vertical direction', () => {
    const wrapper = mountDivider({
      props: { direction: 'vertical' },
    })

    expect(wrapper.find('.adm-divider-vertical').exists()).toBe(true)
  })

  it('should render with different content positions', () => {
    const positions = ['left', 'center', 'right'] as const

    positions.forEach(position => {
      const wrapper = mountDivider({
        props: { contentPosition: position },
        slots: { default: 'Divider Content' },
      })

      expect(wrapper.find(`.adm-divider-${position}`).exists()).toBe(true)
    })
  })

  it('should render with content', () => {
    const wrapper = mountDivider({
      slots: { default: 'Custom Content' },
    })

    expect(wrapper.find('.adm-divider-content').exists()).toBe(true)
    expect(wrapper.text()).toBe('Custom Content')
  })

  it('should not render content wrapper when no content provided', () => {
    const wrapper = mountDivider()

    expect(wrapper.find('.adm-divider-content').exists()).toBe(false)
  })

  it('should render content in left position', () => {
    const wrapper = mountDivider({
      props: { contentPosition: 'left' },
      slots: { default: 'Left Content' },
    })

    expect(wrapper.find('.adm-divider-left').exists()).toBe(true)
    expect(wrapper.find('.adm-divider-content').exists()).toBe(true)
    expect(wrapper.text()).toBe('Left Content')
  })

  it('should render content in right position', () => {
    const wrapper = mountDivider({
      props: { contentPosition: 'right' },
      slots: { default: 'Right Content' },
    })

    expect(wrapper.find('.adm-divider-right').exists()).toBe(true)
    expect(wrapper.find('.adm-divider-content').exists()).toBe(true)
    expect(wrapper.text()).toBe('Right Content')
  })

  it('should render content in center position by default', () => {
    const wrapper = mountDivider({
      slots: { default: 'Center Content' },
    })

    expect(wrapper.find('.adm-divider-center').exists()).toBe(true)
    expect(wrapper.find('.adm-divider-content').exists()).toBe(true)
    expect(wrapper.text()).toBe('Center Content')
  })

  it('should handle vertical divider without content', () => {
    const wrapper = mountDivider({
      props: { direction: 'vertical' },
    })

    expect(wrapper.find('.adm-divider-vertical').exists()).toBe(true)
    expect(wrapper.find('.adm-divider-content').exists()).toBe(false)
  })

  it('should apply custom class names', () => {
    const wrapper = mountDivider({
      props: { class: 'custom-divider' },
    })

    expect(wrapper.find('.custom-divider').exists()).toBe(true)
    expect(wrapper.find('.adm-divider').exists()).toBe(true)
  })

  it('should render with HTML content', () => {
    const wrapper = mountDivider({
      slots: {
        default: '<span style="color: red;">Styled Content</span>'
      },
    })

    expect(wrapper.find('.adm-divider-content').exists()).toBe(true)
    expect(wrapper.html()).toContain('<span style="color: red;">Styled Content</span>')
  })

  it('should maintain proper CSS classes combination', () => {
    const wrapper = mountDivider({
      props: {
        direction: 'horizontal',
        contentPosition: 'left',
      },
      slots: { default: 'Test' },
    })

    const dividerElement = wrapper.find('.adm-divider')
    expect(dividerElement.classes()).toContain('adm-divider')
    expect(dividerElement.classes()).toContain('adm-divider-horizontal')
    expect(dividerElement.classes()).toContain('adm-divider-left')
  })

  it('should support custom styling', () => {
    const wrapper = mountDivider({
      props: {
        style: {
          borderColor: 'red',
          margin: '20px 0',
        }
      },
      slots: { default: 'Styled Divider' },
    })

    const style = wrapper.find('.adm-divider').attributes('style')
    expect(style).toContain('border-color: red')
    expect(style).toContain('margin: 20px 0px')
  })
})
