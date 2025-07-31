# CSS Variables

Compared to crude CSS style overrides (also known as magic styles), CSS Variables allow us to customize component styles more elegantly.

Let's take a look at how we should use the CSS variables exposed by components.

## What are CSS Variables

CSS variables (also called CSS custom properties) are a CSS feature that allows you to define reusable values. The syntax is `--property-name: value`, and you use them with `var(--property-name)`.

```css
:root {
  --primary-color: #1677ff;
}

.button {
  background-color: var(--primary-color);
}
```

## Component CSS Variables

Each ant-mobile-vue component has its own CSS variables that you can override to customize styles.

### Viewing Component CSS Variables

At the bottom of each component's documentation page, there's a "CSS Variables" table listing all CSS variables supported by that component.

### Overriding CSS Variables

You can override CSS variables at any level:

```css
/* Global override */
:root {
  --adm-color-primary: #a062d4;
}

/* Local override */
.my-theme {
  --adm-color-primary: #a062d4;
}

/* Component-level override */
.my-button {
  --adm-font-size: 14px;
}
```

## Global Variables

### Color Variables

```css
:root {
  /* Primary colors */
  --adm-color-primary: #1677ff;
  --adm-color-success: #00b578;
  --adm-color-warning: #ff8f1f;
  --adm-color-danger: #ff3141;

  /* Text colors */
  --adm-color-text: #333333;
  --adm-color-text-secondary: #666666;
  --adm-color-weak: #999999;

  /* Background colors */
  --adm-color-white: #ffffff;
  --adm-color-background: #ffffff;
  --adm-color-box: #f5f5f5;

  /* Border colors */
  --adm-color-border: #eeeeee;
  --adm-color-light: #cccccc;
}
```

### Font Variables

```css
:root {
  /* Font family */
  --adm-font-family: -apple-system, blinkmacsystemfont, 'Helvetica Neue',
    helvetica, segoe ui, arial, roboto, 'PingFang SC', 'miui',
    'Hiragino Sans GB', 'Microsoft Yahei', sans-serif;

  /* Font sizes */
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

  /* Main font size */
  --adm-font-size-main: var(--adm-font-size-5);
}
```

### Size Variables

```css
:root {
  /* Border radius */
  --adm-radius-s: 4px;
  --adm-radius-m: 8px;
  --adm-radius-l: 12px;
}
```

## Best Practices

### 1. Use Semantic Variable Names

When defining your own CSS variables, use semantic names:

```css
:root {
  /* Good naming */
  --app-primary-color: #1677ff;
  --app-header-height: 64px;
  
  /* Avoid these names */
  --color1: #1677ff;
  --size1: 64px;
}
```

### 2. Layer Variable Management

Manage variables in layers by scope:

```css
/* Global variables */
:root {
  --app-primary-color: #1677ff;
}

/* Module variables */
.header {
  --header-bg: var(--app-primary-color);
  --header-height: 64px;
}

/* Component variables */
.nav-item {
  --nav-item-padding: 8px 16px;
}
```

### 3. Provide Fallback Values

Provide fallback values for CSS variables to ensure proper behavior when variables are undefined:

```css
.button {
  background-color: var(--adm-color-primary, #1677ff);
}
```

### 4. Consistent Naming Convention

Follow a consistent naming convention, for example:

- Global variables: `--adm-*`
- Component variables: `--component-*`
- Application variables: `--app-*`

This helps avoid naming conflicts and improves code maintainability.