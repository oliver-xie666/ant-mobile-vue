# Theming

Thanks to the powerful and flexible capabilities of CSS variables, it is very simple to customize a set of ant-mobile-vue themes. You don't need to configure any compilation tools or install additional plug-ins. You can directly override CSS Variables in `:root`:

```css
:root:root {
  --adm-color-primary: #a062d4;
}
```

> Note: Why write two duplicate `:root`?
>
> Since the theme variables in ant-mobile-vue are also declared under `:root`, in some cases they cannot be successfully overwritten due to priority issues. Through `:root:root` you can explicitly make the content you write a higher priority to ensure the successful coverage of the theme variables.

Of course, if you just want to adjust the partial theme, you can also add the above CSS variable override logic to any node you want to adjust, for example:

```css
.purple-theme {
  --adm-color-primary: #a062d4;
}
```

```vue
<template>
  <div class="purple-theme">
    <Button color="primary">Purple</Button>
  </div>
</template>
```

You can get a button like this:

<div style="--adm-color-primary: #a062d4;">
  <Button color="primary">Purple</Button>
</div>

## Global CSS Variables

The following are the global CSS variables currently provided by ant-mobile-vue:

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

## Component-level CSS Variables

Besides global CSS variables, every component also has its own CSS variables. You can adjust them separately, for example:

```css
.my-button {
  --adm-font-size: 14px;
  --border-radius: 2px;
}
```

For detailed information about which CSS variables each component supports, please refer to the "CSS Variables" table in each component's documentation page.

## Dynamic Theming

You can also dynamically modify themes through JavaScript:

```js
// Modify CSS variable
document.documentElement.style.setProperty('--adm-color-primary', '#a062d4')

// Remove CSS variable
document.documentElement.style.removeProperty('--adm-color-primary')
```

However, in most cases, we recommend switching themes by toggling CSS class names.

## Dark Mode

ant-mobile-vue doesn't have a built-in dark mode, but you can easily implement it using CSS variables:

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
    <!-- Your component content -->
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