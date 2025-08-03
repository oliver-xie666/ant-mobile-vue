# Mask 背景蒙层

深色背景层。

## 何时使用

常用于模态窗口的背景层，使视觉焦点突出在模态窗口本身。

## 代码演示

<code src="./mask/demos/demo1.vue"></code>

## API

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| afterClose | 完全关闭后触发 | `() => void` | - |
| afterShow | 完全展示后触发 | `() => void` | - |
| color | 背景蒙层的颜色 | `'black' \| 'white' \| string` | `'black'` |
| destroyOnClose | 不可见时是否销毁 `DOM` 结构 | `boolean` | `false` |
| disableBodyScroll | 是否禁用 `body` 滚动 | `boolean` | `true` |
| forceRender | 强制渲染内容 | `boolean` | `false` |
| getContainer | 指定挂载的 `HTML` 节点，如果为 `null` 的话，会渲染到当前节点 | `HTMLElement \| () => HTMLElement \| null` | `null` |
| onMaskClick | 点击蒙层自身触发 | `(event: MouseEvent) => void` | - |
| opacity | 透明度 | `'default' \| 'thin' \| 'thick' \| number` | `'default'` |
| stopPropagation | 阻止某些事件的冒泡 | `PropagationEvent[]` | `['click']` |
| visible | 是否可见 | `boolean` | `true` |

### 事件

| 事件名 | 说明 | 类型 |
| --- | --- | --- |
| maskClick | 点击蒙层时触发 | `(event: MouseEvent) => void` |

### CSS 变量

| 属性 | 说明 | 默认值 | 全局变量 |
| --- | --- | --- | --- |
| --z-index | 元素的 `z-index` | `1000` | `--adm-mask-z-index` |

## 设计理念

Mask 组件作为遮罩层的基础组件，具有以下特点：

- **层级管理**：通过 z-index 控制显示层级
- **动画支持**：内置淡入淡出过渡动画
- **交互控制**：支持点击关闭和事件冒泡控制
- **无障碍支持**：提供 ARIA 标签支持屏幕阅读器
- **滚动锁定**：可选的 body 滚动锁定功能

## 使用场景

- **模态窗口背景**：作为对话框、弹窗的遮罩层
- **图片查看器**：全屏图片预览时的背景
- **侧边栏遮罩**：抽屉导航打开时的背景
- **加载状态**：全屏加载时的遮罩

## 注意事项

- Mask 组件使用 Vue 的 Teleport 功能，可以指定渲染容器
- 当 `disableBodyScroll` 为 `true` 时，会锁定页面滚动
- 通过 `destroyOnClose` 可以控制组件销毁时机，避免内存泄漏
- 支持自定义颜色和透明度，可以实现各种视觉效果