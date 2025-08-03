// Vue event stop propagation utilities

export type PropagationEvent = 'click' | 'touchstart'

const eventToPropRecord: Record<PropagationEvent, string> = {
  'click': 'onClick',
  'touchstart': 'onTouchstart'
}

export function withStopPropagation(
  events: PropagationEvent[],
  originalHandler?: (e: Event) => void
) {
  const handlers: Record<string, (e: Event) => void> = {}

  for (const event of events) {
    const propName = eventToPropRecord[event]
    handlers[propName] = (e: Event) => {
      e.stopPropagation()
      originalHandler?.(e)
    }
  }

  return handlers
}

// Vue组合式API版本，返回事件处理器对象
export function useStopPropagation(
  events: PropagationEvent[],
  originalHandlers?: Record<string, ((e: Event) => void) | undefined>
) {
  const handlers: Record<string, (e: Event) => void> = {}

  for (const event of events) {
    const propName = eventToPropRecord[event]
    const originalHandler = originalHandlers?.[propName]

    handlers[propName] = (e: Event) => {
      e.stopPropagation()
      originalHandler?.(e)
    }
  }

  return handlers
}

// 创建阻止事件冒泡的处理器
export function createStopPropagationHandler(
  originalHandler?: (e: Event) => void
) {
  return (e: Event) => {
    e.stopPropagation()
    originalHandler?.(e)
  }
}
