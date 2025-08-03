# Tag 标签

进行标记和分类的小标签。

## 何时使用

- 用于标记事物的属性和维度。
- 进行分类。

## 示例

<CodeDemo title="基础用法" src="./tag/demos/demo1.vue" />

## Tag

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| closable | 是否可关闭 | `boolean` | `false` |
| color | 语义化颜色 | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger'` | `'default'` |
| fill | 填充模式 | `'solid' \| 'outline'` | `'solid'` |
| round | 是否圆角 | `boolean` | `false` |

### 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| close | 关闭时的回调 | `() => void` |

### CSS 变量

| 属性 | 说明 | 默认值 |
| --- | --- | --- |
| --background-color | 背景色 | `var(--adm-color-fill-content)` |
| --border-color | 边框颜色 | `transparent` |
| --border-radius | 圆角大小 | `2px` |
| --font-size | 字号 | `12px` |
| --padding | 内边距 | `2px 6px` |
| --text-color | 文字颜色 | `var(--adm-color-text)` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider](/zh/components/config-provider) 组件。

| 名称 | 默认值 |
| --- | --- |
| --adm-tag-padding | `2px 6px` |
| --adm-tag-border-radius | `2px` |
| --adm-tag-font-size | `12px` |