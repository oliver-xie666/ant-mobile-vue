import { mount } from '@vue/test-utils'
import type { ComponentMountingOptions } from '@vue/test-utils'
import type { Component } from 'vue'

/**
 * 测试工具函数集合
 */

/**
 * 等待异步操作完成
 */
export const sleep = (ms: number = 0): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * 触发DOM事件
 */
export const trigger = async (element: Element, event: string, eventInit?: EventInit) => {
  const e = new Event(event, eventInit)
  element.dispatchEvent(e)
  await sleep()
}

/**
 * 创建测试挂载器
 */
export const createMount = <T extends Component>(component: T) => {
  return (options?: ComponentMountingOptions<T>) => {
    return mount(component, {
      global: {
        config: {
          warnHandler: () => {}, // 忽略测试中的警告
        },
      },
      ...options,
    })
  }
}

/**
 * 等待Vue的下一个tick
 */
export const nextTick = async () => {
  await sleep(0)
}

/**
 * 模拟点击事件
 */
export const mockClick = async (element: HTMLElement) => {
  await trigger(element, 'click')
}

/**
 * 检查元素是否包含指定类名
 */
export const hasClass = (element: Element, className: string): boolean => {
  return element.classList.contains(className)
}

/**
 * 获取元素的计算样式
 */
export const getStyle = (element: Element, property: string): string => {
  return window.getComputedStyle(element).getPropertyValue(property)
}

/**
 * 创建测试用的异步函数
 */
export const createAsyncFunction = async (delay: number = 100, shouldReject: boolean = false) => {
  const { vi } = await import('vitest')
  return vi.fn().mockImplementation(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldReject) {
          reject(new Error('Test error'))
        } else {
          resolve('success')
        }
      }, delay)
    })
  })
}
