# Toast 轻提示

对操作结果的轻量级反馈，无需用户操作即可自行消失。

## 何时使用

适用于页面内容的变化不能直接反应操作结果时使用。

## 代码演示

<code src="./toast/demos/demo1.vue"></code>

## API

### 指令式 API

`Toast` 只支持指令式调用。

### Toast.show

`show` 方法支持传入一个 `props` 对象，它包含了以下这些属性：

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| afterClose | `Toast` 完全关闭后的回调 | `() => void` | - |
| content | `Toast` 文本内容 | `string` | - |
| duration | 提示持续时间，若为 `0` 则不会自动关闭 | `number` | `2000` |
| getContainer | 自定义轻提示的父容器 | `HTMLElement \| (() => HTMLElement) \| null` | `null` |
| icon | `Toast` 图标 | `'success' \| 'fail' \| 'loading' \| Component` | - |
| maskClassName | `Toast` 遮罩类名 | `string` | - |
| maskClickable | 是否允许背景点击 | `boolean` | `true` |
| maskStyle | `Toast` 遮罩样式 | `CSSProperties` | - |
| position | 垂直方向显示位置 | `'top' \| 'bottom' \| 'center'` | `'center'` |
| stopPropagation | 阻止某些事件的冒泡 | `PropagationEvent[]` | `['click']` |

> 同一时间只允许弹出一个轻提示，新出现的 `Toast` 会将之前正在显示中的 `Toast` 挤掉。

你也可以直接传入一个字符串，`Toast.show` 会自动把它作为 `content`。

`show` 方法的返回值为一个组件控制器，包含以下属性：

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| close | 关闭当前 `Toast` | `() => void` | - |

### Toast.success

显示成功状态的轻提示。

```ts
Toast.success(content: string, duration?: number)
```

### Toast.fail

显示失败状态的轻提示。

```ts
Toast.fail(content: string, duration?: number)
```

### Toast.loading

显示加载状态的轻提示，默认不会自动关闭。

```ts
Toast.loading(content: string, duration?: number)
```

### Toast.info

显示信息状态的轻提示（无图标）。

```ts
Toast.info(content: string, duration?: number)
```

### Toast.clear

关闭所有显示中的 `Toast`。

### Toast.config

全局配置，支持配置 `duration`、`position` 和 `maskClickable`。配置方法如下：

```ts
Toast.config({ 
  duration: 1000, 
  position: 'top',
  maskClickable: false 
})
```

## 设计理念

Toast 组件作为轻量级反馈组件，具有以下特点：

- **非阻塞式交互**：不会阻止用户继续操作
- **自动消失**：可配置的自动关闭时间
- **指令式调用**：简洁的 API，易于在逻辑中调用
- **状态区分**：success/fail/loading/info 不同状态
- **位置灵活**：支持 top/center/bottom 三个位置
- **队列管理**：同时只显示一个，避免堆叠

## 使用场景

- **操作反馈**：保存成功、删除完成等操作结果提示
- **状态提醒**：加载中、网络错误等状态提醒
- **轻量提示**：不需要用户确认的简单信息提示
- **临时通知**：短暂显示的通知信息

## 注意事项

- Toast 使用指令式 API，不能在模板中直接使用
- 同一时间只会显示一个 Toast，新的会替换旧的
- loading 类型的 Toast 默认不会自动关闭，需要手动调用 `clear()` 或返回的 `close()` 方法
- 建议在组件销毁时调用 `Toast.clear()` 避免内存泄漏