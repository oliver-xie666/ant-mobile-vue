# DotLoading

The simplest loading animation.

## When To Use

Suitable for scenarios that require simple loading status.

## Examples

<CodeDemo title="Basic Usage" src="./dot-loading/demos/demo1.vue" />

## DotLoading

### Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| color | Color, supports preset colors and custom color values | `'default' \| 'primary' \| 'white' \| string` | `'default'` |

> **Size Control**: The component size is controlled by CSS `font-size`, defaults to `1em`. You can adjust the size by setting the parent element's `font-size` or directly setting the component's `font-size`.

### CSS Variables

| Name | Description | Default |
| --- | --- | --- |
| --color | Color | `var(--adm-color-weak)` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider](/en/components/config-provider).

| Name | Default |
| --- | --- |
| --adm-dot-loading-color | `var(--adm-color-weak)` |

### Custom Size Examples

```css
/* Method 1: Control size via font-size */
.custom-dot-loading {
  font-size: 32px; /* Loading animation scales proportionally */
}

/* Method 2: Control color via CSS variables */
.custom-color-loading {
  --adm-dot-loading-color: #ff6430;
}
```