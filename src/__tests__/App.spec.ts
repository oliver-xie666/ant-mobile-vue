import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../App.vue'

describe('App', () => {
  it('renders the main title correctly', () => {
    const wrapper = mount(App)
    expect(wrapper.text()).toContain('Ant Mobile Vue - Button Component Demo')
  })

  it('renders all component sections', () => {
    const wrapper = mount(App)

    // 检查各个组件演示部分
    expect(wrapper.text()).toContain('基础按钮')
    expect(wrapper.text()).toContain('Loading 组件')
    expect(wrapper.text()).toContain('Divider 分割线')
    expect(wrapper.text()).toContain('Space 间距')
    expect(wrapper.text()).toContain('Tag 标签')
  })

  it('renders button components', () => {
    const wrapper = mount(App)

    // 检查是否有Button组件
    expect(wrapper.findAll('.adm-button').length).toBeGreaterThan(0)
  })

  it('renders tag components', () => {
    const wrapper = mount(App)

    // 检查是否有Tag组件
    expect(wrapper.findAll('.adm-tag').length).toBeGreaterThan(0)
  })

  it('renders space components', () => {
    const wrapper = mount(App)

    // 检查是否有Space组件
    expect(wrapper.findAll('.adm-space').length).toBeGreaterThan(0)
  })
})
