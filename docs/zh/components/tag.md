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
| color | 标签色，支持预设颜色和自定义颜色值 | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| string` | `'default'` |
| fill | 填充模式 | `'solid' \| 'outline'` | `'solid'` |
| round | 是否圆角 | `boolean` | `false` |

### 事件

| 事件名 | 说明 | 类型 |
| --- | --- | --- |
| click | 点击标签时触发 | `(event: MouseEvent) => void` |

### CSS 变量

| 属性 | 说明 | 默认值 | 全局变量 |
| --- | --- | --- | --- |
| --background-color | 背景颜色 | 当 `fill=solid` 时，默认值为 `color` 属性对应的颜色；当 `fill=outline` 时，默认值为 `transparent` | - |
| --border-color | 边框颜色 | `color` 属性对应的颜色 | - |
| --border-radius | `round=false` 时的圆角大小 | `2px` | `--adm-tag-border-radius` |
| --text-color | 文字颜色 | 当 `fill=solid` 时，默认值为 `#ffffff`；当 `fill=outline` 时，默认值为 `color` 属性对应的颜色 | - |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider](/zh/components/config-provider) 组件。

| 名称 | 默认值 |
| --- | --- |
| --adm-tag-border-radius | `2px` |