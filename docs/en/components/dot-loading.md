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
| color | Color | `string` | `'default'` |
| size | Size in `px` | `number` | `24` |

### CSS Variables

| Name | Description | Default |
| --- | --- | --- |
| --color | Color | `var(--adm-color-weak)` |
| --size | Size | `24px` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. For usage, please refer to [ConfigProvider](/en/components/config-provider).

| Name | Default |
| --- | --- |
| --adm-dot-loading-color | `var(--adm-color-weak)` |
| --adm-dot-loading-size | `24px` |