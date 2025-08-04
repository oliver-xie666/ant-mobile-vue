# Dialog 对话框

用于重要信息的确认或通知用户。

## 何时使用

- 需要用户确认某个操作时
- 需要用户输入信息时  
- 需要展示重要信息时

## 代码演示

<CodeDemo title="基础用法" src="dialog/demos/demo1.vue" />

<CodeDemo title="内容区域" src="dialog/demos/demo2.vue" />

<CodeDemo title="关闭所有对话框" src="dialog/demos/demo3.vue" debug />

## API

### Dialog Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 是否显示对话框 | `boolean` | `false` |
| title | 标题 | `VNode \| string` | - |
| content | 内容 | `VNode \| string` | - |
| image | 头部图片地址 | `string` | - |
| header | 自定义头部内容 | `VNode \| string` | - |
| actions | 操作按钮列表 | `(Action \| Action[])[]` | `[]` |
| closeOnAction | 点击操作按钮后是否关闭 | `boolean` | `false` |
| closeOnMaskClick | 点击蒙层是否关闭 | `boolean` | `false` |
| destroyOnClose | 关闭时销毁内部元素 | `boolean` | `false` |
| forceRender | 强制渲染内容 | `boolean` | `false` |
| disableBodyScroll | 是否禁用 body 滚动 | `boolean` | `true` |
| afterShow | 完全展示后触发 | `() => void` | - |
| afterClose | 完全关闭后触发 | `() => void` | - |
| getContainer | 指定挂载的节点 | `GetContainer` | `() => document.body` |
| maskClassName | 蒙层类名 | `string` | - |
| maskStyle | 蒙层样式 | `CSSProperties` | - |
| bodyClassName | 内容区域类名 | `string` | - |
| bodyStyle | 内容区域样式 | `CSSProperties` | - |
| stopPropagation | 阻止某些事件的冒泡 | `PropagationEvent[]` | `['click']` |

### Action

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 唯一标识 | `string \| number` | - |
| text | 按钮文本 | `VNode \| string` | - |
| bold | 是否加粗 | `boolean` | `false` |
| danger | 是否为危险按钮 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
| onClick | 点击事件 | `() => void \| Promise<void>` | - |

### Dialog Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| close | 关闭事件 | - |
| action | 操作按钮点击事件 | `(action: Action, index: number)` |

## 指令式

### Dialog.show

显示对话框，返回一个带有 `close` 方法的对象。

```typescript
const handler = Dialog.show(props)
handler.close()
```

### Dialog.alert

显示警告对话框，返回 Promise。

```typescript
await Dialog.alert({
  title: '提示',
  content: '这是一条提示信息',
  confirmText: '我知道了'
})
```

### Dialog.confirm

显示确认对话框，返回 Promise，resolved 值为 `true` 表示确认，`false` 表示取消。

```typescript
const result = await Dialog.confirm({
  title: '确认',
  content: '是否确认执行此操作？',
  confirmText: '确认',
  cancelText: '取消'
})
```

### Dialog.clear

关闭所有显示中的对话框。

```typescript
Dialog.clear()
```

## CSS 变量

| 属性 | 说明 | 默认值 |
| --- | --- | --- |
| --adm-dialog-z-index | 层级 | `1000` |

## Ref

| 属性 | 说明 | 类型 |
| --- | --- | --- |
| close | 关闭对话框 | `() => void` |

## 主题定制

参考 [主题定制](/zh/guide/theme) 文档。