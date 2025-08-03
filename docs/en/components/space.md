# Space

Set spacing between components.

## When To Use

Avoid components clinging together and reserve unified space.

- Suitable for horizontal spacing of inline elements.
- Can set various horizontal alignment methods.

## Examples

<CodeDemo title="Basic Usage" src="./space/demos/demo1.vue" />

## Space

### Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| align | Cross axis alignment | `'start' \| 'end' \| 'center' \| 'baseline'` | - |
| block | Whether to render as block element | `boolean` | `false` |
| direction | Spacing direction | `'horizontal' \| 'vertical'` | `'horizontal'` |
| justify | Main axis alignment | `'start' \| 'end' \| 'center' \| 'between' \| 'around' \| 'evenly' \| 'stretch'` | - |
| wrap | Whether to wrap automatically, only effective when `horizontal` | `boolean` | `false` |

### CSS Variables

| Name | Description | Default |
| --- | --- | --- |
| --gap | Gap size | `8px` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider](/en/components/config-provider).

| Name | Default |
| --- | --- |
| --adm-space-gap-horizontal | `8px` |
| --adm-space-gap-vertical | `8px` |