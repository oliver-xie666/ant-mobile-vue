# Space 间距

设置组件之间的间距。

## 何时使用

避免组件紧贴在一起，拉开统一的空间。

- 适合行内元素的水平间距。
- 可以设置各种水平对齐方式。

## 示例

<CodeDemo title="基础用法" src="./space/demos/demo1.vue" />

## Space

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| align | 交叉轴对齐方式 | `'start' \| 'end' \| 'center' \| 'baseline'` | - |
| block | 是否渲染为块级元素 | `boolean` | `false` |
| direction | 间距方向 | `'horizontal' \| 'vertical'` | `'horizontal'` |
| justify | 主轴对齐方式 | `'start' \| 'end' \| 'center' \| 'between' \| 'around' \| 'evenly' \| 'stretch'` | - |
| wrap | 是否自动换行，仅在 `horizontal` 时有效 | `boolean` | `false` |

### 事件

| 事件名 | 说明 | 类型 |
| --- | --- | --- |
| click | 点击事件 | `(event: MouseEvent) => void` |

### CSS 变量

| 属性 | 说明 | 默认值 |
| --- | --- | --- |
| --gap | 间距大小，同时影响水平和垂直间距 | `8px` |
| --gap-horizontal | 水平间距大小，覆盖 --gap 设置 | `var(--gap)` |
| --gap-vertical | 垂直间距大小，覆盖 --gap 设置 | `var(--gap)` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider](/zh/components/config-provider) 组件。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| --gap | 统一间距大小 | `8px` |
| --gap-horizontal | 水平方向间距 | `var(--gap)` |
| --gap-vertical | 垂直方向间距 | `var(--gap)` |