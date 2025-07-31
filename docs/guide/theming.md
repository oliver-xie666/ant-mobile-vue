# 主题定制

得益于 CSS 变量强大而灵活的能力，自定义一套 ant-mobile-vue 的主题是非常简单的，你不需要配置任何编译工具，也不需要安装额外的插件，直接在 `:root` 里覆盖 CSS Variables 即可：

```css
:root:root {
  --adm-color-primary: #a062d4;
}
```

> 注意：为什么要写两个重复的 `:root`？
>
> 由于 ant-mobile-vue 中的主题变量也是在 `:root` 下声明的，在一些情况下会由于优先级问题无法成功覆盖。通过 `:root:root` 你可以显式地让你编写的内容拥有更高优先级，来确保主题变量的成功覆盖。

当然，如果你只是想调整局部的主题，你也可以将上述的 CSS 变量覆盖逻辑加到任何一个你想调整的节点上，例如：

```css
.purple-theme {
  --adm-color-primary: #a062d4;
}
```

```vue
<template>
  <div class="purple-theme">
    <Button color="primary">紫色主题</Button>
  </div>
</template>
```

你可以得到这样的按钮：

<div style="--adm-color-primary: #a062d4;">
  <Button color="primary">紫色主题</Button>
</div>

## 全局 CSS 变量

以下是 ant-mobile-vue 当前提供的全局 CSS 变量：

```css
:root {
  --adm-color-primary: #1677ff;
  --adm-color-success: #00b578;
  --adm-color-warning: #ff8f1f;
  --adm-color-danger: #ff3141;

  --adm-color-white: #ffffff;
  --adm-color-text: #333333;
  --adm-color-text-secondary: #666666;
  --adm-color-weak: #999999;
  --adm-color-light: #cccccc;
  --adm-color-border: #eeeeee;
  --adm-color-box: #f5f5f5;
  --adm-color-background: #ffffff;

  --adm-font-size-main: var(--adm-font-size-5);

  --adm-font-family: -apple-system, blinkmacsystemfont, 'Helvetica Neue',
    helvetica, segoe ui, arial, roboto, 'PingFang SC', 'miui',
    'Hiragino Sans GB', 'Microsoft Yahei', sans-serif;
}
```

## 组件级别的 CSS 变量

除了全局的 CSS 变量，每个组件也都有自己的 CSS 变量，你可以单独进行调整，比如：

```css
.my-button {
  --adm-font-size: 14px;
  --border-radius: 2px;
}
```

具体每个组件都支持哪些 CSS 变量，请参考各个组件文档页面中的"CSS 变量"表格。

## 动态主题

你也可以通过 JavaScript 来动态地修改主题：

```js
// 修改 CSS 变量
document.documentElement.style.setProperty('--adm-color-primary', '#a062d4')

// 移除 CSS 变量
document.documentElement.style.removeProperty('--adm-color-primary')
```

当然，通常情况下，我们更推荐通过切换 CSS 类名的方式来实现动态主题切换。

## 深色模式

ant-mobile-vue 并没有内置深色模式，但是你可以通过 CSS 变量很轻松地实现它：

```css
.dark {
  --adm-color-background: #000000;
  --adm-color-text: #ffffff;
  --adm-color-text-secondary: #cccccc;
  --adm-color-weak: #999999;
  --adm-color-border: #333333;
  --adm-color-box: #1a1a1a;
}
```

```vue
<template>
  <div :class="{ dark: isDark }">
    <!-- 你的组件内容 -->
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isDark = ref(false)

const toggleDark = () => {
  isDark.value = !isDark.value
}
</script>
```