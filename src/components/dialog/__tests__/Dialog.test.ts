import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Dialog from '../Dialog.vue'

describe('Dialog', () => {
  it('should render correctly', () => {
    const wrapper = mount(Dialog, {
      props: {
        visible: true,
        title: 'Test Title',
        content: 'Test Content'
      }
    })

    expect(wrapper.find('.adm-dialog-title').text()).toBe('Test Title')
    expect(wrapper.find('.adm-dialog-content').text()).toBe('Test Content')
  })

  it('should render with image', () => {
    const wrapper = mount(Dialog, {
      props: {
        visible: true,
        image: 'test-image.png',
        title: 'Test Title'
      }
    })

    expect(wrapper.find('.adm-dialog-image-container img').attributes('src')).toBe('test-image.png')
    expect(wrapper.find('.adm-dialog-body').classes()).toContain('adm-dialog-with-image')
  })

  it('should render actions correctly', () => {
    const actions = [
      { key: 'cancel', text: 'Cancel' },
      { key: 'confirm', text: 'Confirm', bold: true }
    ]

    const wrapper = mount(Dialog, {
      props: {
        visible: true,
        actions: [actions]
      }
    })

    const buttons = wrapper.findAll('.adm-dialog-button')
    expect(buttons).toHaveLength(2)
    expect(buttons[0].text()).toBe('Cancel')
    expect(buttons[1].text()).toBe('Confirm')
    expect(buttons[1].classes()).toContain('adm-dialog-button-bold')
  })

  it('should emit close event', async () => {
    const wrapper = mount(Dialog, {
      props: {
        visible: true,
        actions: [
          { key: 'close', text: 'Close' }
        ]
      }
    })

    // 通过点击按钮触发关闭
    const button = wrapper.find('.adm-dialog-button')
    await button.trigger('click')

    expect(wrapper.emitted('close')).toBeTruthy()
  })

  it('should handle action clicks', async () => {
    const onAction = vi.fn()
    const onClick = vi.fn()

    const actions = [
      { key: 'test', text: 'Test', onClick }
    ]

    const wrapper = mount(Dialog, {
      props: {
        visible: true,
        actions: [actions],
        onAction
      }
    })

    const button = wrapper.find('.adm-dialog-button')
    await button.trigger('click')

    expect(onClick).toHaveBeenCalled()
    expect(onAction).toHaveBeenCalledWith(actions[0], 0)
    expect(wrapper.emitted('action')).toBeTruthy()
  })

  it('should close on action when closeOnAction is true', async () => {
    const onClose = vi.fn()
    const wrapper = mount(Dialog, {
      props: {
        visible: true,
        closeOnAction: true,
        onClose,
        actions: [
          { key: 'test', text: 'Test' }
        ]
      }
    })

    const button = wrapper.find('.adm-dialog-button')
    await button.trigger('click')

    expect(onClose).toHaveBeenCalled()
  })

  it('should handle close event properly', async () => {
    const wrapper = mount(Dialog, {
      props: {
        visible: true,
        closeOnMaskClick: true
      }
    })

    // 通过CenterPopup的close事件触发Dialog的close
    const centerPopup = wrapper.findComponent({ name: 'CenterPopup' })
    await centerPopup.vm.$emit('close')
    expect(wrapper.emitted('close')).toBeTruthy()
  })
})
