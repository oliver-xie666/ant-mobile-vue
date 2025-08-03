import { describe, it, expect } from 'vitest'
import Tag from '../Tag.vue'
import { createMount } from '../../../utils/test-utils'

const mountTag = createMount(Tag)

describe('Tag', () => {
  it('should render correctly', () => {
    const wrapper = mountTag({
      slots: { default: 'Test Tag' },
    })

    expect(wrapper.find('.adm-tag').exists()).toBe(true)
    expect(wrapper.text()).toBe('Test Tag')
  })

  it('should render with default color and fill', () => {
    const wrapper = mountTag({
      slots: { default: 'Default Tag' },
    })

    const tag = wrapper.find('.adm-tag')
    const style = tag.attributes('style')

    expect(style).toContain('--border-color: var(--adm-color-text-secondary, #666666)')
    expect(style).toContain('--text-color: #fff')
    expect(style).toContain('--background-color: var(--adm-color-text-secondary, #666666)')
  })

  it('should render with different colors', () => {
    const colors = [
      { color: 'primary', value: 'var(--adm-color-primary, #1677ff)' },
      { color: 'success', value: 'var(--adm-color-success, #00b578)' },
      { color: 'warning', value: 'var(--adm-color-warning, #ff8f1f)' },
      { color: 'danger', value: 'var(--adm-color-danger, #ff3141)' },
    ] as const

    colors.forEach(({ color, value }) => {
      const wrapper = mountTag({
        props: { color },
        slots: { default: `${color} Tag` },
      })

      const style = wrapper.find('.adm-tag').attributes('style')
      expect(style).toContain(`--border-color: ${value}`)
      expect(style).toContain('--text-color: #fff')
      expect(style).toContain(`--background-color: ${value}`)
    })
  })

  it('should render with custom color', () => {
    const customColor = '#ff6600'
    const wrapper = mountTag({
      props: { color: customColor },
      slots: { default: 'Custom Color Tag' },
    })

    const style = wrapper.find('.adm-tag').attributes('style')
    expect(style).toContain(`--border-color: ${customColor}`)
    expect(style).toContain('--text-color: #fff')
    expect(style).toContain(`--background-color: ${customColor}`)
  })

  it('should render with outline fill', () => {
    const wrapper = mountTag({
      props: {
        color: 'primary',
        fill: 'outline',
      },
      slots: { default: 'Outline Tag' },
    })

    const style = wrapper.find('.adm-tag').attributes('style')
    expect(style).toContain('--border-color: var(--adm-color-primary, #1677ff)')
    expect(style).toContain('--text-color: var(--adm-color-primary, #1677ff)')
    expect(style).toContain('--background-color: transparent')
  })

  it('should render with solid fill', () => {
    const wrapper = mountTag({
      props: {
        color: 'success',
        fill: 'solid',
      },
      slots: { default: 'Solid Tag' },
    })

    const style = wrapper.find('.adm-tag').attributes('style')
    expect(style).toContain('--border-color: var(--adm-color-success, #00b578)')
    expect(style).toContain('--text-color: #fff')
    expect(style).toContain('--background-color: var(--adm-color-success, #00b578)')
  })

  it('should render with round corners', () => {
    const wrapper = mountTag({
      props: { round: true },
      slots: { default: 'Round Tag' },
    })

    expect(wrapper.find('.adm-tag-round').exists()).toBe(true)
  })

  it('should not have round class by default', () => {
    const wrapper = mountTag({
      slots: { default: 'Regular Tag' },
    })

    expect(wrapper.find('.adm-tag-round').exists()).toBe(false)
  })

    it('should emit click event', async () => {
    const wrapper = mountTag({
      slots: { default: 'Clickable Tag' },
    })

    await wrapper.find('.adm-tag').trigger('click')
    expect(wrapper.emitted('click')).toHaveLength(1)
    expect(wrapper.emitted('click')![0][0]).toBeInstanceOf(MouseEvent)
  })

  it('should emit Vue click event', async () => {
    const wrapper = mountTag({
      slots: { default: 'Clickable Tag' },
    })

    await wrapper.find('.adm-tag').trigger('click')
    expect(wrapper.emitted('click')).toHaveLength(1)
    expect(wrapper.emitted('click')![0]).toHaveLength(1)
    expect(wrapper.emitted('click')![0][0]).toBeInstanceOf(MouseEvent)
  })

  it('should apply custom class names', () => {
    const wrapper = mountTag({
      props: { class: 'custom-tag-class' },
      slots: { default: 'Custom Class Tag' },
    })

    expect(wrapper.find('.custom-tag-class').exists()).toBe(true)
    expect(wrapper.find('.adm-tag').exists()).toBe(true)
  })

  it('should merge custom styles with component styles', () => {
    const wrapper = mountTag({
      props: {
        color: 'primary',
        style: { fontSize: '14px', padding: '4px 8px' }
      },
      slots: { default: 'Styled Tag' },
    })

    const style = wrapper.find('.adm-tag').attributes('style')
    expect(style).toContain('--border-color: var(--adm-color-primary, #1677ff)')
    expect(style).toContain('font-size: 14px')
    expect(style).toContain('padding: 4px 8px')
  })

  it('should handle all color and fill combinations', () => {
    const colors = ['default', 'primary', 'success', 'warning', 'danger'] as const
    const fills = ['solid', 'outline'] as const

    colors.forEach(color => {
      fills.forEach(fill => {
        const wrapper = mountTag({
          props: { color, fill },
          slots: { default: `${color}-${fill} Tag` },
        })

        expect(wrapper.find('.adm-tag').exists()).toBe(true)

        const style = wrapper.find('.adm-tag').attributes('style')
        if (fill === 'outline') {
          expect(style).toContain('--text-color:')
          expect(style).toContain('--background-color: transparent')
        } else {
          expect(style).toContain('--text-color: #fff')
          expect(style).not.toContain('--background-color: transparent')
        }
      })
    })
  })

  it('should render complex content', () => {
    const wrapper = mountTag({
      slots: {
        default: '<span>Complex <strong>Content</strong></span>'
      },
    })

    expect(wrapper.html()).toContain('<span>Complex <strong>Content</strong></span>')
  })

  it('should maintain semantic structure', () => {
    const wrapper = mountTag({
      slots: { default: 'Semantic Tag' },
    })

    const tagElement = wrapper.find('span.adm-tag')
    expect(tagElement.exists()).toBe(true)
    expect(tagElement.element.tagName.toLowerCase()).toBe('span')
  })
})
