import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { nextTick } from 'vue'
import Toast from '../index'

// Mock timers
vi.useFakeTimers()

describe('Toast', () => {
  beforeEach(() => {
    // Clear any existing toasts
    Toast.clear()
  })

  afterEach(() => {
    // Clean up after each test
    Toast.clear()
    vi.clearAllTimers()
  })

  it('should show basic toast', async () => {
    Toast.show('Hello World')
    await nextTick()

    // Check if toast content is rendered
    expect(document.body.textContent).toContain('Hello World')
  })

  it('should show toast with object props', async () => {
    Toast.show({
      content: 'Test content',
      duration: 3000,
    })
    await nextTick()

    expect(document.body.textContent).toContain('Test content')
  })

  it('should show success toast', async () => {
    Toast.success('Success message')
    await nextTick()

    expect(document.body.textContent).toContain('Success message')
    // Should have success icon class
    expect(document.querySelector('.adm-toast-main-icon')).toBeTruthy()
  })

  it('should show fail toast', async () => {
    Toast.fail('Error message')
    await nextTick()

    expect(document.body.textContent).toContain('Error message')
    expect(document.querySelector('.adm-toast-main-icon')).toBeTruthy()
  })

  it('should show loading toast', async () => {
    Toast.loading('Loading...')
    await nextTick()

    expect(document.body.textContent).toContain('Loading...')
    expect(document.querySelector('.adm-toast-main-icon')).toBeTruthy()
    expect(document.querySelector('.adm-spin-loading')).toBeTruthy()
  })

  it('should show info toast', async () => {
    Toast.info('Info message')
    await nextTick()

    expect(document.body.textContent).toContain('Info message')
  })

  it('should auto close after duration', async () => {
    Toast.show({
      content: 'Auto close',
      duration: 1000,
    })
    await nextTick()

    expect(document.body.textContent).toContain('Auto close')

    // Fast forward time
    vi.advanceTimersByTime(1000)
    await nextTick()

    expect(document.body.textContent).not.toContain('Auto close')
  })

  it('should not auto close when duration is 0', async () => {
    Toast.show({
      content: 'No auto close',
      duration: 0,
    })
    await nextTick()

    expect(document.body.textContent).toContain('No auto close')

    // Fast forward time
    vi.advanceTimersByTime(5000)
    await nextTick()

    // Should still be visible
    expect(document.body.textContent).toContain('No auto close')
  })

  it('should close manually', async () => {
    const handler = Toast.show('Manual close test')
    await nextTick()

    expect(document.body.textContent).toContain('Manual close test')

    handler.close()
    await nextTick()

    expect(document.body.textContent).not.toContain('Manual close test')
  })

  it('should clear all toasts', async () => {
    Toast.show('First toast')
    await nextTick()

    expect(document.body.textContent).toContain('First toast')

    Toast.clear()
    await nextTick()

    expect(document.body.textContent).not.toContain('First toast')
  })

  it('should replace existing toast', async () => {
    Toast.show('First toast')
    await nextTick()

    expect(document.body.textContent).toContain('First toast')

    Toast.show('Second toast')
    await nextTick()

    expect(document.body.textContent).not.toContain('First toast')
    expect(document.body.textContent).toContain('Second toast')
  })

  it('should handle different positions', async () => {
    Toast.show({
      content: 'Top toast',
      position: 'top',
    })
    await nextTick()

    const toastMain = document.querySelector('.adm-toast-main') as HTMLElement
    expect(toastMain?.style.top).toBe('20%')

    Toast.show({
      content: 'Bottom toast',
      position: 'bottom',
    })
    await nextTick()

    const toastMainBottom = document.querySelector('.adm-toast-main') as HTMLElement
    expect(toastMainBottom?.style.top).toBe('80%')
  })

  it('should call afterClose callback', async () => {
    const afterClose = vi.fn()

    const handler = Toast.show({
      content: 'Callback test',
      afterClose,
    })
    await nextTick()

    handler.close()
    await nextTick()

    expect(afterClose).toHaveBeenCalled()
  })

  it('should handle global config', async () => {
    Toast.config({
      duration: 500,
      position: 'top',
    })

    Toast.show('Config test')
    await nextTick()

    const toastMain = document.querySelector('.adm-toast-main') as HTMLElement
    expect(toastMain?.style.top).toBe('20%')

    // Should auto close with configured duration
    vi.advanceTimersByTime(500)
    await nextTick()

    expect(document.body.textContent).not.toContain('Config test')

    // Reset config
    Toast.config({
      duration: 2000,
      position: 'center',
    })
  })

  it('should handle custom mask styles', async () => {
    Toast.show({
      content: 'Custom mask',
      maskStyle: { backgroundColor: 'red' },
      maskClassName: 'custom-mask',
    })
    await nextTick()

    const mask = document.querySelector('.adm-toast-mask')
    expect(mask?.classList.contains('custom-mask')).toBe(true)
  })
})
