# Modal 弹窗

用于重要信息的告知或操作的反馈，并附带少量的选项供用户进行操作。

## 何时使用

需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。

## 代码演示

<CodeDemo title="基础用法" src="modal/demos/demo1.vue" />

<CodeDemo title="内容区域" src="modal/demos/demo2.vue" />

<CodeDemo title="关闭所有弹窗" src="modal/demos/demo3.vue" debug />

## API

### Modal

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| actions | 操作按钮列表 | `Action[]` | `[]` |
| afterClose | `Modal` 完全关闭后的回调 | `() => void` | - |
| afterShow | 完全展示后触发 | `() => void` | - |
| bodyClassName | `Modal` 内容类名 | `string` | - |
| bodyStyle | `Modal` 内容样式 | `CSSProperties` | - |
| closeOnAction | 点击操作按钮后是否关闭 | `boolean` | `false` |
| closeOnMaskClick | 是否支持点击遮罩关闭弹窗 | `boolean` | `false` |
| content | 弹窗内容 | `VNode \| string` | - |
| destroyOnClose | 不可见时是否销毁 `DOM` 结构 | `boolean` | `false` |
| disableBodyScroll | 背景蒙层是否禁用 `body` 滚动 | `boolean` | `true` |
| forceRender | 被隐藏时是否渲染 `DOM` 结构 | `boolean` | `false` |
| getContainer | 自定义弹窗的父容器 | `GetContainer` | - |
| header | 顶部区域 | `VNode \| string` | - |
| image | 图片 `url` | `string` | - |
| maskClassName | `Modal` 遮罩类名 | `string` | - |
| maskStyle | `Modal` 遮罩样式 | `CSSProperties` | - |
| onAction | 点击操作按钮时触发 | `(action: Action, index: number) => void \| Promise<void>` | - |
| onClose | 关闭时触发 | `() => void` | - |
| showCloseButton | 是否在右上角显示关闭图标按钮 | `boolean` | `false` |
| stopPropagation | 阻止某些事件的冒泡 | `PropagationEvent[]` | `['click']` |
| title | 弹窗标题 | `VNode \| string` | - |
| visible | 显示隐藏 | `boolean` | `false` |

### Action

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 唯一标记 | `string \| number` | - |
| text | 标题 | `VNode \| string` | - |
| disabled | 是否为禁用状态 | `boolean` | `false` |
| danger | 是否为危险状态 | `boolean` | `false` |
| primary | 是否为主要状态 | `boolean` | `false` |
| onClick | 点击时触发 | `() => void \| Promise<void>` | - |

## 指令式

可以通过指令式的方式使用 `Modal`：

### Modal.show

```ts
const handler = Modal.show(props)
```

可以通过调用 `Modal` 上的 `show` 方法直接打开弹窗，其中 `props` 参数的类型同上表，但不支持传入 `visible` 属性。

当弹窗被关闭后，组件实例会自动销毁。

`show` 方法的返回值为一个组件控制器，包含以下属性：

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| close | 关闭弹窗 | `() => void` | - |

`show` 只是一个很基础的方法，在实际业务中，更为常用的是下面的 `alert` 和 `confirm` 方法：

### Modal.alert

`alert` 接受的参数同 `show`，但不支持 `closeOnAction` `actions` 属性，它的返回值不是一个控制器对象，而是 `Promise<void>`。

此外，它还额外支持以下属性：

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| confirmText | 确认按钮的内容 | `VNode \| string` | `'我知道了'` |
| onConfirm | 点击确认按钮时触发 | `() => void \| Promise<void>` | - |

### Modal.confirm

`confirm` 接受的参数同 `alert`，但它的返回值是 `Promise<boolean>`，你可以通过这个 boolean 来判断用户是点击的确认还是取消。

此外，它还额外支持以下属性：

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| confirmText | 确认按钮的内容 | `VNode \| string` | `'确认'` |
| cancelText | 取消按钮的内容 | `VNode \| string` | `'取消'` |
| onConfirm | 点击确认按钮时触发 | `() => void \| Promise<void>` | - |
| onCancel | 点击取消按钮时触发 | `() => void \| Promise<void>` | - |

### Modal.clear

可以通过调用 `Modal.clear()` 关闭所有打开的弹窗，通常用于路由监听中，处理路由前进、后退不能关闭弹窗的问题。

```ts
Modal.clear()
```