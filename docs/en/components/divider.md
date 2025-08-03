# Divider

A divider line separates different content.

## When To Use

- Divide sections of article.
- Divide inline text and links such as the operation column of table.

## Examples

<CodeDemo title="Basic Usage" src="./divider/demos/demo1.vue" />

## Divider

### Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| content-position | Content position | `'left' \| 'center' \| 'right'` | `'center'` |
| dashed | Whether line is dashed | `boolean` | `false` |
| direction | Direction type of line | `'horizontal' \| 'vertical'` | `'horizontal'` |

### CSS Variables

| Name | Description | Default |
| --- | --- | --- |
| --border-color | Border color | `var(--adm-border-color)` |
| --border-style | Border style | `solid` |
| --border-width | Border width | `1px` |
| --text-color | Text color | `var(--adm-color-weak)` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider](/en/components/config-provider).

| Name | Default |
| --- | --- |
| --adm-divider-border-color | `var(--adm-border-color)` |
| --adm-divider-text-color | `var(--adm-color-weak)` |