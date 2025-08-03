# Tag

Small labels for marking and categorization.

## When To Use

- Mark properties and dimensions of things.
- Categorize.

## Examples

<CodeDemo title="Basic Usage" src="./tag/demos/demo1.vue" />

## Tag

### Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| color | Tag color, supports preset colors and custom color values | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| string` | `'default'` |
| fill | Fill mode | `'solid' \| 'outline'` | `'solid'` |
| round | Whether round corner | `boolean` | `false` |

### Events

| Event | Description | Type |
| --- | --- | --- |
| click | Triggered when tag is clicked | `(event: MouseEvent) => void` |

### CSS Variables

| Name | Description | Default | Global |
| --- | --- | --- | --- |
| --background-color | Background color of the tag | If `fill=solid`, default value is the color of the `color` prop. If `fill=outline`, default value is `transparent`. | - |
| --border-color | Border color of the tag | Color of the `color` prop. | - |
| --border-radius | Border radius of the tag when `round=false` | `2px` | `--adm-tag-border-radius` |
| --text-color | Text color of the tag | If `fill=solid`, default value is `#ffffff`. If `fill=outline`, default value is the color of the `color` prop. | - |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider](/en/components/config-provider).

| Name | Default |
| --- | --- |
| --adm-tag-border-radius | `2px` |