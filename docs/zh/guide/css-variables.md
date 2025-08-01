# CSS 变量

ant-mobile-vue 的样式是基于 CSS 变量技术构建的，你可以通过调整这些 CSS 变量来定制你自己的主题。

## 什么是 CSS 变量

CSS 变量（也叫做 CSS 自定义属性）是 CSS 的一项功能，允许你定义可重用的值。语法是 `--property-name: value`，使用时通过 `var(--property-name)` 来引用。

```css
:root {
  --primary-color: #1677ff;
}

.button {
  background-color: var(--primary-color);
}
```

## 组件 CSS 变量

每个 ant-mobile-vue 组件都有自己的 CSS 变量，你可以通过覆盖这些变量来自定义样式。

### 查看组件的 CSS 变量

在每个组件的文档页面底部，都有一个 "CSS 变量" 表格，列出了该组件支持的所有 CSS 变量。

### 覆盖 CSS 变量

你可以在任何层级覆盖 CSS 变量：

```css
/* 全局覆盖 */
:root {
  --adm-color-primary: #a062d4;
}

/* 局部覆盖 */
.my-theme {
  --adm-color-primary: #a062d4;
}

/* 组件级覆盖 */
.my-button {
  --adm-font-size: 14px;
}
```

## 全局变量

### 颜色变量

```css
:root {
  /* 主要颜色 */
  --adm-color-primary: #1677ff;
  --adm-color-success: #00b578;
  --adm-color-warning: #ff8f1f;
  --adm-color-danger: #ff3141;

  /* 文本颜色 */
  --adm-color-text: #333333;
  --adm-color-text-secondary: #666666;
  --adm-color-weak: #999999;

  /* 背景颜色 */
  --adm-color-white: #ffffff;
  --adm-color-background: #ffffff;
  --adm-color-box: #f5f5f5;

  /* 边框颜色 */
  --adm-color-border: #eeeeee;
  --adm-color-light: #cccccc;
}
```

### 字体变量

```css
:root {
  /* 字体族 */
  --adm-font-family: -apple-system, blinkmacsystemfont, 'Helvetica Neue',
    helvetica, segoe ui, arial, roboto, 'PingFang SC', 'miui',
    'Hiragino Sans GB', 'Microsoft Yahei', sans-serif;

  /* 字体大小 */
  --adm-font-size-1: 9px;
  --adm-font-size-2: 10px;
  --adm-font-size-3: 11px;
  --adm-font-size-4: 12px;
  --adm-font-size-5: 13px;
  --adm-font-size-6: 14px;
  --adm-font-size-7: 15px;
  --adm-font-size-8: 16px;
  --adm-font-size-9: 17px;
  --adm-font-size-10: 18px;

  /* 主要字体大小 */
  --adm-font-size-main: var(--adm-font-size-5);
}
```

### 尺寸变量

```css
:root {
  /* 圆角 */
  --adm-radius-s: 4px;
  --adm-radius-m: 8px;
  --adm-radius-l: 12px;
}
```

## 最佳实践

### 1. 使用语义化变量名

当你定义自己的 CSS 变量时，使用语义化的名称：

```css
:root {
  /* 好的命名 */
  --app-primary-color: #1677ff;
  --app-header-height: 64px;
  
  /* 避免这样的命名 */
  --color1: #1677ff;
  --size1: 64px;
}
```

### 2. 分层管理变量

将变量按照作用域进行分层管理：

```css
/* 全局变量 */
:root {
  --app-primary-color: #1677ff;
}

/* 模块变量 */
.header {
  --header-bg: var(--app-primary-color);
  --header-height: 64px;
}

/* 组件变量 */
.nav-item {
  --nav-item-padding: 8px 16px;
}
```

### 3. 提供回退值

为 CSS 变量提供回退值，确保在变量未定义时的表现：

```css
.button {
  background-color: var(--adm-color-primary, #1677ff);
}
```

### 4. 统一命名规范

建议遵循统一的命名规范，比如：

- 全局变量：`--adm-*`
- 组件变量：`--component-*`
- 应用变量：`--app-*`

这样可以避免命名冲突，提高代码的可维护性。