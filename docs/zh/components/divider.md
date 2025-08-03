# Divider 分割线

区隔内容的分割线。

## 何时使用

- 对不同章节的文本段落进行分割。
- 对行内文字/链接进行分割，例如表格的操作列。

## 示例

<CodeDemo title="基础用法" src="./divider/demos/demo1.vue" />

## Divider

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content-position | 内容位置，仅在 `direction` 为 `horizontal` 时有效 | `'left' \| 'center' \| 'right'` | `'center'` |
| direction | 水平还是垂直类型 | `'horizontal' \| 'vertical'` | `'horizontal'` |

### CSS 变量

| 属性 | 说明 | 默认值 |
| --- | --- | --- |
| --border-color | 边框颜色 | `var(--adm-border-color)` |
| --border-style | 边框样式 | `solid` |
| --border-width | 边框宽度 | `1px` |
| --text-color | 文字颜色 | `var(--adm-color-weak)` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider](/zh/components/config-provider) 组件。

| 名称 | 默认值 |
| --- | --- |
| --adm-divider-border-color | `var(--adm-border-color)` |
| --adm-divider-text-color | `var(--adm-color-weak)` |