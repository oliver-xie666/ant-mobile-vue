import { describe, it, expect } from 'vitest'
import { h } from 'vue'
import Space from '../Space.vue'
import Button from '../../button/Button.vue'
import { createMount } from '../../../utils/test-utils'

const mountSpace = createMount(Space)

describe('Space', () => {
  it('should render correctly', () => {
    const wrapper = mountSpace({
      slots: {
        default: '<div>Item 1</div><div>Item 2</div>',
      },
    })

    expect(wrapper.find('.adm-space').exists()).toBe(true)
    expect(wrapper.findAll('.adm-space-item')).toHaveLength(2)
  })

  it('should render with horizontal direction by default', () => {
    const wrapper = mountSpace({
      slots: {
        default: '<div>Item 1</div><div>Item 2</div>',
      },
    })

    expect(wrapper.find('.adm-space-horizontal').exists()).toBe(true)
  })

  it('should render with vertical direction', () => {
    const wrapper = mountSpace({
      props: { direction: 'vertical' },
      slots: {
        default: '<div>Item 1</div><div>Item 2</div>',
      },
    })

    expect(wrapper.find('.adm-space-vertical').exists()).toBe(true)
  })

  it('should render as block element', () => {
    const wrapper = mountSpace({
      props: { block: true },
      slots: {
        default: '<div>Item 1</div><div>Item 2</div>',
      },
    })

    expect(wrapper.find('.adm-space-block').exists()).toBe(true)
  })

  it('should enable wrap mode', () => {
    const wrapper = mountSpace({
      props: { wrap: true },
      slots: {
        default: '<div>Item 1</div><div>Item 2</div>',
      },
    })

    expect(wrapper.find('.adm-space-wrap').exists()).toBe(true)
  })

  it('should apply align classes', () => {
    const aligns = ['start', 'end', 'center', 'baseline'] as const

    aligns.forEach(align => {
      const wrapper = mountSpace({
        props: { align },
        slots: {
          default: '<div>Item 1</div><div>Item 2</div>',
        },
      })

      expect(wrapper.find(`.adm-space-align-${align}`).exists()).toBe(true)
    })
  })

  it('should apply justify classes', () => {
    const justifies = ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch'] as const

    justifies.forEach(justify => {
      const wrapper = mountSpace({
        props: { justify },
        slots: {
          default: '<div>Item 1</div><div>Item 2</div>',
        },
      })

      expect(wrapper.find(`.adm-space-justify-${justify}`).exists()).toBe(true)
    })
  })

    it('should emit click event', async () => {
    const wrapper = mountSpace({
      slots: {
        default: '<div>Item 1</div><div>Item 2</div>',
      },
    })

    await wrapper.find('.adm-space').trigger('click')
    expect(wrapper.emitted('click')).toHaveLength(1)
  })

  it('should filter out null and undefined children', () => {
    const wrapper = mountSpace({
      slots: {
        default: () => [
          'Valid text',
          null,
          undefined,
          '<div>Valid element</div>',
        ],
      },
    })

    // 只有有效的子元素应该被渲染
    const items = wrapper.findAll('.adm-space-item')
    expect(items.length).toBeGreaterThan(0)
  })

  it('should render with components as children', () => {
    const wrapper = mountSpace({
      slots: {
        default: () => [
          h(Button, { color: 'primary' }, () => 'Button 1'),
          h(Button, { color: 'success' }, () => 'Button 2'),
        ],
      },
    })

    expect(wrapper.findAll('.adm-space-item')).toHaveLength(2)
    expect(wrapper.findAll('.adm-button')).toHaveLength(2)
  })

  it('should apply custom CSS variables', () => {
    const wrapper = mountSpace({
      props: {
        style: {
          '--gap': '16px',
          '--gap-horizontal': '20px',
          '--gap-vertical': '12px',
        }
      },
      slots: {
        default: '<div>Item 1</div><div>Item 2</div>',
      },
    })

    const spaceElement = wrapper.find('.adm-space')
    const style = spaceElement.attributes('style')
    expect(style).toContain('--gap: 16px')
    expect(style).toContain('--gap-horizontal: 20px')
    expect(style).toContain('--gap-vertical: 12px')
  })

  it('should apply custom class names', () => {
    const wrapper = mountSpace({
      props: { class: 'custom-space-class' },
      slots: {
        default: '<div>Item 1</div><div>Item 2</div>',
      },
    })

    expect(wrapper.find('.custom-space-class').exists()).toBe(true)
    expect(wrapper.find('.adm-space').exists()).toBe(true)
  })

  it('should handle empty slots gracefully', () => {
    const wrapper = mountSpace()

    expect(wrapper.find('.adm-space').exists()).toBe(true)
    expect(wrapper.findAll('.adm-space-item')).toHaveLength(0)
  })

  it('should maintain flex layout properties', () => {
    const wrapper = mountSpace({
      props: {
        direction: 'horizontal',
        align: 'center',
        justify: 'between',
      },
      slots: {
        default: '<div>Item 1</div><div>Item 2</div>',
      },
    })

    const spaceElement = wrapper.find('.adm-space')
    expect(spaceElement.classes()).toContain('adm-space-horizontal')
    expect(spaceElement.classes()).toContain('adm-space-align-center')
    expect(spaceElement.classes()).toContain('adm-space-justify-space-between')
  })
})
