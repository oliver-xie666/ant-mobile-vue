import { describe, it, expect } from 'vitest'
import SpinLoading from '../SpinLoading.vue'
import { createMount } from '../../../utils/test-utils'

const mountSpinLoading = createMount(SpinLoading)

describe('SpinLoading', () => {
  it('should render correctly', () => {
    const wrapper = mountSpinLoading()
    expect(wrapper.find('.adm-spin-loading').exists()).toBe(true)
    expect(wrapper.find('.adm-spin-loading-svg').exists()).toBe(true)
    expect(wrapper.find('.adm-spin-loading-fill').exists()).toBe(true)
  })

  it('should apply color correctly', () => {
    const customColor = '#ff6600'
    const wrapper = mountSpinLoading({
      props: { color: customColor },
    })
    const spinLoading = wrapper.find('.adm-spin-loading')
    const style = spinLoading.attributes('style')
    expect(style).toMatch(/--color:\s*(#ff6600|rgb\(255,\s*102,\s*0\))/)
  })

  it('should apply preset colors', () => {
    const colors = ['default', 'primary', 'white'] as const

    colors.forEach(color => {
      const wrapper = mountSpinLoading({
        props: { color },
      })
      const spinLoading = wrapper.find('.adm-spin-loading')
      expect(spinLoading.exists()).toBe(true)
    })
  })

  it('should apply custom size through CSS variables', () => {
    const wrapper = mountSpinLoading({
      props: {
        style: { '--size': '48px' }
      },
    })
    const spinLoading = wrapper.find('.adm-spin-loading')
    const style = spinLoading.attributes('style')
    expect(style).toContain('--size: 48px')
  })

  it('should have correct SVG structure', () => {
    const wrapper = mountSpinLoading()
    const svg = wrapper.find('.adm-spin-loading-svg')
    const circle = wrapper.find('.adm-spin-loading-fill')

    expect(svg.attributes('viewBox')).toBe('0 0 32 32')
    expect(circle.attributes('r')).toBe('15')
    expect(circle.attributes('cx')).toBe('16')
    expect(circle.attributes('cy')).toBe('16')
    expect(circle.attributes('fill')).toBe('transparent')
    expect(circle.attributes('stroke-width')).toBe('2')
    expect(circle.attributes('stroke-linecap')).toBe('square')
  })

  it('should calculate stroke-dasharray correctly', () => {
    const wrapper = mountSpinLoading()
    const circle = wrapper.find('.adm-spin-loading-fill')
    const expectedCircumference = 15 * 3.14159265358979 * 2

    expect(circle.attributes('stroke-dasharray')).toBe(expectedCircumference.toString())
  })

  it('should support native props', () => {
    const wrapper = mountSpinLoading({
      props: {
        id: 'test-spin-loading',
        'data-testid': 'spin-loading',
      },
    })
    const spinLoading = wrapper.find('.adm-spin-loading')
    expect(spinLoading.attributes('id')).toBe('test-spin-loading')
    expect(spinLoading.attributes('data-testid')).toBe('spin-loading')
  })
})
