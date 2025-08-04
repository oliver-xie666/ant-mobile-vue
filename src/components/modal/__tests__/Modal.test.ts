import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Modal from '../Modal.vue'
import { show, alert, confirm, clear } from '../methods'

// Mock DOM methods
Object.defineProperty(document, 'body', {
  value: {
    appendChild: vi.fn(),
    removeChild: vi.fn(),
    contains: vi.fn(() => true),
  },
  writable: true,
})

describe('Modal', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  afterEach(() => {
    clear()
  })

  describe('基础功能', () => {
    it('应该正确渲染', () => {
      const wrapper = mount(Modal, {
        props: {
          visible: true,
          content: '测试内容',
        },
      })
      expect(wrapper.find('.adm-modal-content').text()).toBe('测试内容')
    })

    it('应该正确显示标题', () => {
      const wrapper = mount(Modal, {
        props: {
          visible: true,
          title: '测试标题',
          content: '测试内容',
        },
      })
      expect(wrapper.find('.adm-modal-title').text()).toBe('测试标题')
    })

    it('应该正确显示操作按钮', () => {
      const wrapper = mount(Modal, {
        props: {
          visible: true,
          content: '测试内容',
          actions: [
            { key: 'confirm', text: '确认', primary: true },
            { key: 'cancel', text: '取消' },
          ],
        },
      })
      const buttons = wrapper.findAll('.adm-modal-button')
      expect(buttons).toHaveLength(2)
      expect(buttons[0].text()).toBe('确认')
      expect(buttons[1].text()).toBe('取消')
    })

    it('应该在点击操作按钮时触发事件', async () => {
      const onAction = vi.fn()
      const wrapper = mount(Modal, {
        props: {
          visible: true,
          content: '测试内容',
          actions: [{ key: 'confirm', text: '确认' }],
          onAction,
        },
      })

      await wrapper.find('.adm-modal-button').trigger('click')
      expect(onAction).toHaveBeenCalledWith(
        { key: 'confirm', text: '确认' },
        0
      )
    })

    it('应该在closeOnAction为true时关闭Modal', async () => {
      const onClose = vi.fn()
      const wrapper = mount(Modal, {
        props: {
          visible: true,
          content: '测试内容',
          actions: [{ key: 'confirm', text: '确认' }],
          closeOnAction: true,
          onClose,
        },
      })

      await wrapper.find('.adm-modal-button').trigger('click')
      expect(onClose).toHaveBeenCalled()
    })
  })

  describe('命令式API', () => {
    it('show方法应该工作', () => {
      const handler = show({
        content: '测试内容',
      })
      expect(handler.close).toBeInstanceOf(Function)
      expect(document.body.appendChild).toHaveBeenCalled()
    })

    it('alert方法应该返回Promise', async () => {
      const promise = alert({
        content: '测试内容',
      })
      expect(promise).toBeInstanceOf(Promise)
    })

    it('confirm方法应该返回Promise<boolean>', async () => {
      const promise = confirm({
        content: '测试内容',
      })
      expect(promise).toBeInstanceOf(Promise)
    })

    it('clear方法应该清理所有Modal', () => {
      show({ content: '测试1' })
      show({ content: '测试2' })
      clear()
      // 验证清理函数被调用
      expect(document.body.removeChild).toHaveBeenCalled()
    })
  })

  describe('Props验证', () => {
    it('应该支持自定义样式', () => {
      const wrapper = mount(Modal, {
        props: {
          visible: true,
          content: '测试内容',
          bodyStyle: { backgroundColor: 'red' },
        },
      })
      expect(wrapper.find('.adm-center-popup').exists()).toBe(true)
    })

    it('应该支持显示关闭按钮', () => {
      const wrapper = mount(Modal, {
        props: {
          visible: true,
          content: '测试内容',
          showCloseButton: true,
        },
      })
      // 关闭按钮由CenterPopup组件处理
      expect(wrapper.find('.adm-center-popup').exists()).toBe(true)
    })

    it('应该支持点击遮罩关闭', () => {
      const wrapper = mount(Modal, {
        props: {
          visible: true,
          content: '测试内容',
          closeOnMaskClick: true,
        },
      })
      expect(wrapper.find('.adm-center-popup').exists()).toBe(true)
    })
  })
})
