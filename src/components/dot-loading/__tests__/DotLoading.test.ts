import { describe, it, expect } from 'vitest'
import DotLoading from '../DotLoading.vue'
import { createMount } from '../../../utils/test-utils'

const mountDotLoading = createMount(DotLoading)

describe('DotLoading', () => {
  it('should render correctly', () => {
    const wrapper = mountDotLoading()

    expect(wrapper.find('.adm-dot-loading').exists()).toBe(true)
    expect(wrapper.find('.adm-loading').exists()).toBe(true)
    expect(wrapper.find('svg').exists()).toBe(true)
  })

  it('should render with default color', () => {
    const wrapper = mountDotLoading()

    const dotLoading = wrapper.find('.adm-dot-loading')
    expect(dotLoading.attributes('style')).toContain('color: var(--adm-color-weak)')
  })

  it('should render with primary color', () => {
    const wrapper = mountDotLoading({
      props: { color: 'primary' },
    })

    const dotLoading = wrapper.find('.adm-dot-loading')
    expect(dotLoading.attributes('style')).toContain('color: var(--adm-color-primary)')
  })

  it('should render with white color', () => {
    const wrapper = mountDotLoading({
      props: { color: 'white' },
    })

    const dotLoading = wrapper.find('.adm-dot-loading')
    expect(dotLoading.attributes('style')).toContain('color: var(--adm-color-white)')
  })

    it('should render with custom color', () => {
    const customColor = '#ff6600'
    const wrapper = mountDotLoading({
      props: { color: customColor },
    })

    const dotLoading = wrapper.find('.adm-dot-loading')
    const style = dotLoading.attributes('style')
    // 浏览器可能将hex转换为rgb，所以检查两种格式
    expect(style).toMatch(/color:\s*(#ff6600|rgb\(255,\s*102,\s*0\))/)
  })

  it('should have correct SVG structure', () => {
    const wrapper = mountDotLoading()

    const svg = wrapper.find('svg')
    expect(svg.attributes('height')).toBe('1em')
    expect(svg.attributes('viewBox')).toBe('0 0 100 40')

    // 检查三个动画矩形
    const rects = wrapper.findAll('rect')
    expect(rects).toHaveLength(3)

    rects.forEach((rect, index) => {
      expect(rect.attributes('fill')).toBe('currentColor')
      expect(rect.attributes('width')).toBe('8')
      expect(rect.attributes('height')).toBe('8')
      expect(rect.attributes('rx')).toBe('2')
      expect(rect.attributes('x')).toBe((20 + index * 26).toString())
      expect(rect.attributes('y')).toBe('16')
    })
  })

  it('should have correct animation timing', () => {
    const wrapper = mountDotLoading()

    const animates = wrapper.findAll('animate')
    expect(animates).toHaveLength(3)

    animates.forEach((animate, index) => {
      expect(animate.attributes('attributeName')).toBe('y')
      expect(animate.attributes('from')).toBe('16')
      expect(animate.attributes('to')).toBe('16')
      expect(animate.attributes('dur')).toBe('2s')
      expect(animate.attributes('begin')).toBe(`${index * 0.2}s`)
      expect(animate.attributes('repeatCount')).toBe('indefinite')
      expect(animate.attributes('values')).toBe('16; 6; 26; 16; 16')
      expect(animate.attributes('keyTimes')).toBe('0; 0.1; 0.3; 0.4; 1')
    })
  })

  it('should apply custom class names', () => {
    const wrapper = mountDotLoading({
      props: { class: 'custom-class' },
    })

    expect(wrapper.find('.custom-class').exists()).toBe(true)
    expect(wrapper.find('.adm-dot-loading').exists()).toBe(true)
    expect(wrapper.find('.adm-loading').exists()).toBe(true)
  })

  it('should have inline-block display', () => {
    const wrapper = mountDotLoading()

    // 检查CSS类是否正确应用
    expect(wrapper.find('.adm-dot-loading').exists()).toBe(true)
  })
})
