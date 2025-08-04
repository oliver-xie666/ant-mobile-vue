import { createApp } from 'vue'
import type { Component, App } from 'vue'
import { canUseDom } from './can-use-dom'

export type GetContainer = HTMLElement | (() => HTMLElement) | null

function resolveContainer(getContainer: GetContainer): HTMLElement {
  if (!getContainer) return document.body
  if (typeof getContainer === 'function') {
    return getContainer()
  }
  return getContainer
}

export function renderToContainer(
  getContainer: GetContainer,
  component: Component,
  props?: Record<string, unknown>
): App | null {
  if (!canUseDom || !getContainer) return null

  const container = resolveContainer(getContainer)
  const app = createApp(component, props)

  // 创建一个临时的mount容器
  const mountElement = document.createElement('div')
  container.appendChild(mountElement)

  app.mount(mountElement)

  return app
}

// Vue版本的简化渲染函数，主要用于Portal类似的功能
export function createPortalRenderer() {
  const portals = new Map<string, App>()

  const render = (
    id: string,
    getContainer: GetContainer,
    component: Component,
    props?: Record<string, unknown>
  ) => {
    // 清理已存在的Portal
    if (portals.has(id)) {
      const existingApp = portals.get(id)
      if (existingApp) {
        existingApp.unmount()
        portals.delete(id)
      }
    }

    const app = renderToContainer(getContainer, component, props)
    if (app) {
      portals.set(id, app)
    }
    return app
  }

  const destroy = (id: string) => {
    const app = portals.get(id)
    if (app) {
      app.unmount()
      portals.delete(id)
    }
  }

  const destroyAll = () => {
    portals.forEach(app => app.unmount())
    portals.clear()
  }

  return { render, destroy, destroyAll }
}
