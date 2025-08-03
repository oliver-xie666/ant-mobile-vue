# DotLoading 点状加载

最简单的加载动画。

## 何时使用

适用于需要简单加载状态的场景。

## 示例

<CodeDemo title="基础用法" src="./dot-loading/demos/demo1.vue" />

## DotLoading

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| color | 颜色 | `string` | `'default'` |
| size | 大小，单位为 `px` | `number` | `24` |

### CSS 变量

| 属性 | 说明 | 默认值 |
| --- | --- | --- |
| --color | 颜色 | `var(--adm-color-weak)` |
| --size | 大小 | `24px` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider](/zh/components/config-provider) 组件。

| 名称 | 默认值 |
| --- | --- |
| --adm-dot-loading-color | `var(--adm-color-weak)` |
| --adm-dot-loading-size | `24px` |