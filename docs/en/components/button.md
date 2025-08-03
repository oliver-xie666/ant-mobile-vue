# Button

To trigger an operation.

## When to Use

A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.

## Demos

<CodeDemo title="Basic Usage" src="./button/demos/demo1.vue" />

## Button

### Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| block | Whether the button should render as block element | `boolean` | `false` |
| color | Color of the button | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger'` | `'default'` |
| disabled | Whether the button is disabled | `boolean` | `false` |
| fill | Fill mode | `'solid' \| 'outline' \| 'none'` | `'solid'` |
| loading | Whether the button is in loading state, `'auto'` mode will monitor `onClick` Promise status and update loading automatically | `boolean \| 'auto'` | `false` |
| loadingIcon | Customized loading icon | `Component` | `<DotLoading color='currentColor' />` |
| loadingText | Extra text displayed in loading state | `string` | - |
| onClick | Click event handler | `(event: MouseEvent) => void \| Promise<void>` | - |
| shape | Shape of the button | `'default' \| 'rounded' \| 'rectangular'` | `'default'` |
| size | Size of the button | `'mini' \| 'small' \| 'middle' \| 'large'` | `'middle'` |
| type | Type attribute of native `button` element | `'submit' \| 'reset' \| 'button'` | `'button'` |

In addition, the following properties of the native `button` element are supported: `onMouseDown` `onMouseUp` `onTouchStart` `onTouchEnd` `form`.

### CSS Variables

| Name | Description | Default | Global |
| --- | --- | --- | --- |
| --background-color | Background color | `var(--adm-color-background)` | `--adm-button-background-color` |
| --border-color | Border color | `var(--adm-color-border)` | `--adm-button-border-color` |
| --border-radius | Border radius | `4px` | `--adm-button-border-radius` |
| --border-style | Border style | `solid` | `--adm-button-border-style` |
| --border-width | Border width | `1px` | `--adm-button-border-width` |
| --text-color | Text color | `var(--adm-color-text)` | `--adm-button-text-color` |

### Ref

| Property | Description | Type |
| --- | --- | --- |
| nativeElement | Native button element | `HTMLButtonElement \| null` |