# SpinLoading

A rotating loading indicator with smooth animation, suitable for scenarios that need to show loading states.

## When to Use

- When the page is partially waiting for asynchronous data or is being rendered
- When you need a more refined loading animation
- When you want a richer visual effect compared to DotLoading

## Demos

<code src="./spin-loading/demos/demo1.vue"></code>

## API

### Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| color | Color of line. Equals to manually set the `--color` CSS variable. | `'default' \| 'primary' \| 'white' \| string` | `'default'` |

### CSS Variables

| Name | Description | Default |
| --- | --- | --- |
| --color | Color of line. | `var(--adm-color-weak)` |
| --size | Size of the element. | `32px` |

## Size Control

The size of `SpinLoading` can be controlled through the CSS variable `--size`:

```css
.custom-spin-loading {
  --size: 48px;
}
```

Or set it directly in the style:

```vue
<SpinLoading :style="{ '--size': '48px' }" />
```

## Theme Customization

### Colors

You can customize the color through the `color` prop or CSS variables:

```vue
<!-- Using preset colors -->
<SpinLoading color="primary" />

<!-- Using custom colors -->
<SpinLoading color="#ff6600" />

<!-- Using CSS variables -->
<SpinLoading :style="{ '--color': 'red' }" />
```