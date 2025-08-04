# Modal

It is used for notification of important information or feedback of operation, with a small number of options for users to operate.

## When to Use

When users need to process transactions, but do not want to jump to pages to interrupt the workflow, you can use Modal to open a floating layer in the middle of the current page to carry the corresponding operations.

## Demos

<CodeDemo title="Basic Usage" src="modal/demos/demo1.vue" />

<CodeDemo title="Content Area" src="modal/demos/demo2.vue" />

<CodeDemo title="Close All Modals" src="modal/demos/demo3.vue" debug />

## API

### Modal

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| actions | The list of the operation button | `Action[]` | `[]` |
| afterClose | Callback after `Modal` is completely closed | `() => void` | - |
| afterShow | Triggered after fully displayed | `() => void` | - |
| bodyClassName | `Modal` content class name | `string` | - |
| bodyStyle | `Modal` content style | `CSSProperties` | - |
| closeOnAction | Whether to close after clicking the operation button | `boolean` | `false` |
| closeOnMaskClick | Whether to support clicking mask to close modal | `boolean` | `false` |
| content | The content of the Modal | `VNode \| string` | - |
| destroyOnClose | Destroy `dom` when not visible | `boolean` | `false` |
| disableBodyScroll | Whether to disable `body` scrolling | `boolean` | `true` |
| forceRender | Whether to render the `DOM` structure when hidden | `boolean` | `false` |
| getContainer | The parent container of the custom modal | `GetContainer` | - |
| header | The top area | `VNode \| string` | - |
| image | The `url` of the picture | `string` | - |
| maskClassName | `Modal` mask class name | `string` | - |
| maskStyle | `Modal` mask style | `CSSProperties` | - |
| onAction | Triggered when the action button is clicked | `(action: Action, index: number) => void \| Promise<void>` | - |
| onClose | Triggered when closed | `() => void` | - |
| showCloseButton | Whether to show a close button on the top right corner | `boolean` | `false` |
| stopPropagation | Stop the propagation of some events | `PropagationEvent[]` | `['click']` |
| title | The title of the Modal | `VNode \| string` | - |
| visible | To show or hide | `boolean` | `false` |

### Action

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| key | The unique mark | `string \| number` | - |
| text | The title | `VNode \| string` | - |
| disabled | Whether disabled state or not | `boolean` | `false` |
| danger | Whether in dangerous state or not | `boolean` | `false` |
| primary | Whether in primary state or not | `boolean` | `false` |
| onClick | Triggered on click | `() => void \| Promise<void>` | - |

## Imperative

You can use `Modal` in an imperative way:

### Modal.show

```ts
const handler = Modal.show(props)
```

You can directly open the modal by calling the `show` method on the `Modal`. The type of the `props` parameter is the same as the above table, but the `visible` prop is not supported.

When the modal is closed, the component instance would be automatically destroyed.

The return value of the `show` method is a component controller, which contains the following properties:

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| close | To close the modal | `() => void` | - |

`show` is just a very basic method. In actual business, the following `alert` and `confirm` methods are more commonly used:

### Modal.alert

`alert` accepts the same parameters as `show`, but does not support the `closeOnAction` `actions` prop. Its return value is not a controller object, but `Promise<void>`.

In addition, it supports the following props:

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| confirmText | The content of the confirm button | `VNode \| string` | `'OK'` |
| onConfirm | Triggered when the confirm button is clicked | `() => void \| Promise<void>` | - |

### Modal.confirm

`confirm` accepts the same parameters as `alert`, but its return value is `Promise<boolean>`, you can use this boolean to determine whether the user clicked confirm or cancel.

In addition, it supports the following props:

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| confirmText | The content of the confirm button | `VNode \| string` | `'Confirm'` |
| cancelText | The content of the cancel button | `VNode \| string` | `'Cancel'` |
| onConfirm | Triggered when the confirm button is clicked | `() => void \| Promise<void>` | - |
| onCancel | Triggered when the cancel button is clicked | `() => void \| Promise<void>` | - |

### Modal.clear

You can close all open modals by calling `Modal.clear()`, usually used in route listening to handle the problem that route forward and backward cannot close modals.

```ts
Modal.clear()
```