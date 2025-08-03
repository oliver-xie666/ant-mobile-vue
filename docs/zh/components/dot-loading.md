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
| color | 颜色，支持预设颜色和自定义颜色值 | `'default' \| 'primary' \| 'white' \| string` | `'default'` |

> **大小控制**: 组件大小通过CSS的`font-size`控制，默认为`1em`，你可以通过设置父元素的`font-size`或直接设置组件的`font-size`来调整大小。

### CSS 变量

| 属性 | 说明 | 默认值 |
| --- | --- | --- |
| --color | 颜色 | `var(--adm-color-weak)` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider](/zh/components/config-provider) 组件。

| 名称 | 默认值 |
| --- | --- |
| --adm-dot-loading-color | `var(--adm-color-weak)` |

### 大小自定义示例

```css
/* 方式1: 通过font-size控制大小 */
.custom-dot-loading {
  font-size: 32px; /* 加载动画会按比例缩放 */
}

/* 方式2: 通过CSS变量控制颜色 */
.custom-color-loading {
  --adm-dot-loading-color: #ff6430;
}
```