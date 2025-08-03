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
| closable | Whether the Tag can be closed | `boolean` | `false` |
| color | Semantic color | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger'` | `'default'` |
| fill | Fill mode | `'solid' \| 'outline'` | `'solid'` |
| round | Whether round corner | `boolean` | `false` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| close | Callback when close | `() => void` |

### CSS Variables

| Name | Description | Default |
| --- | --- | --- |
| --background-color | Background color | `var(--adm-color-fill-content)` |
| --border-color | Border color | `transparent` |
| --border-radius | Border radius | `2px` |
| --font-size | Font size | `12px` |
| --padding | Padding | `2px 6px` |
| --text-color | Text color | `var(--adm-color-text)` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider](/en/components/config-provider).

| Name | Default |
| --- | --- |
| --adm-tag-padding | `2px 6px` |
| --adm-tag-border-radius | `2px` |
| --adm-tag-font-size | `12px` |