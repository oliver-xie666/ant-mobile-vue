# Button

To trigger an operation.

## When to Use

A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.

## Demos

<CodeDemo title="Fill Mode" src="./button/demos/demo1.vue" />

<CodeDemo title="Button Size" src="./button/demos/demo2.vue" />

## Button

### Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| block | 是否是块级元素 | `boolean` | `false` |
| color | 按钮的颜色 | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger'` | `'default'` |
| disabled | 是否禁用 | `boolean` | `false` |
| fill | 填充模式 | `'solid' \| 'outline' \| 'none'` | `'solid'` |
| loading | 是否处于加载状态，`'auto'` 模式会监听 `onClick` 的 `Promise` 状态自动更新 `loading` | `boolean \| 'auto'` | `false` |
| loadingIcon | 加载状态下的 `icon` 图标 | `Component` | `<DotLoading color='currentColor' />` |
| loadingText | 加载状态下额外展示的文字 | `string` | - |
| onClick | 点击事件 | `(event: MouseEvent) => void \| Promise<void>` | - |
| shape | 按钮的形状 | `'default' \| 'rounded' \| 'rectangular'` | `'default'` |
| size | 大小 | `'mini' \| 'small' \| 'middle' \| 'large'` | `'middle'` |
| type | 原生 `button` 元素的 `type` 属性 | `'submit' \| 'reset' \| 'button'` | `'button'` |

此外，还支持原生 `button` 元素的以下属性：`onMouseDown` `onMouseUp` `onTouchStart` `onTouchEnd` `form`。

### CSS 变量

| 属性 | 说明 | 默认值 | 全局变量 |
| --- | --- | --- | --- |
| --background-color | 背景颜色 | `var(--adm-color-background)` | `--adm-button-background-color` |
| --border-color | 边框颜色 | `var(--adm-color-border)` | `--adm-button-border-color` |
| --border-radius | 圆角大小 | `4px` | `--adm-button-border-radius` |
| --border-style | 边框样式 | `solid` | `--adm-button-border-style` |
| --border-width | 边框宽度 | `1px` | `--adm-button-border-width` |
| --text-color | 文字颜色 | `var(--adm-color-text)` | `--adm-button-text-color` |

### Ref

| 属性          | 说明             | 类型                          |
| ------------- | ---------------- | ----------------------------- |
| nativeElement | 原始 button 元素 | `HtmlButtonElement` \| `null` |