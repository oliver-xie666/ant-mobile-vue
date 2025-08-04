# Dialog

Used for important information confirmation or notification to users.

## When to Use

- When users need to confirm an operation
- When users need to input information
- When important information needs to be displayed

## Code Demo

<CodeDemo title="Basic Usage" src="dialog/demos/demo1.vue" />

<CodeDemo title="Content Area" src="dialog/demos/demo2.vue" />

<CodeDemo title="Close All Dialogs" src="dialog/demos/demo3.vue" debug />

## API

### Dialog Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| visible | Whether to show the dialog | `boolean` | `false` |
| title | Title | `VNode \| string` | - |
| content | Content | `VNode \| string` | - |
| image | Header image URL | `string` | - |
| header | Custom header content | `VNode \| string` | - |
| actions | Action button list | `(Action \| Action[])[]` | `[]` |
| closeOnAction | Whether to close after clicking action button | `boolean` | `false` |
| closeOnMaskClick | Whether to close when clicking mask | `boolean` | `false` |
| destroyOnClose | Whether to destroy internal elements when closed | `boolean` | `false` |
| forceRender | Force render content | `boolean` | `false` |
| disableBodyScroll | Whether to disable body scroll | `boolean` | `true` |
| afterShow | Triggered after fully shown | `() => void` | - |
| afterClose | Triggered after fully closed | `() => void` | - |
| getContainer | Specify mount node | `GetContainer` | `() => document.body` |
| maskClassName | Mask class name | `string` | - |
| maskStyle | Mask style | `CSSProperties` | - |
| bodyClassName | Content area class name | `string` | - |
| bodyStyle | Content area style | `CSSProperties` | - |
| stopPropagation | Stop some events from bubbling | `PropagationEvent[]` | `['click']` |

### Action

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| key | Unique identifier | `string \| number` | - |
| text | Button text | `VNode \| string` | - |
| bold | Whether to bold | `boolean` | `false` |
| danger | Whether it's a danger button | `boolean` | `false` |
| disabled | Whether to disable | `boolean` | `false` |
| onClick | Click event | `() => void \| Promise<void>` | - |

### Dialog Events

| Event | Description | Callback Parameters |
| --- | --- | --- |
| close | Close event | - |
| action | Action button click event | `(action: Action, index: number)` |

## Imperative

### Dialog.show

Show dialog, returns an object with `close` method.

```typescript
const handler = Dialog.show(props)
handler.close()
```

### Dialog.alert

Show alert dialog, returns Promise.

```typescript
await Dialog.alert({
  title: 'Alert',
  content: 'This is an alert message',
  confirmText: 'OK'
})
```

### Dialog.confirm

Show confirm dialog, returns Promise, resolved value `true` means confirmed, `false` means canceled.

```typescript
const result = await Dialog.confirm({
  title: 'Confirm',
  content: 'Are you sure to execute this operation?',
  confirmText: 'Confirm',
  cancelText: 'Cancel'
})
```

### Dialog.clear

Close all displayed dialogs.

```typescript
Dialog.clear()
```

## CSS Variables

| Property | Description | Default |
| --- | --- | --- |
| --adm-dialog-z-index | Z-index | `1000` |

## Ref

| Property | Description | Type |
| --- | --- | --- |
| close | Close dialog | `() => void` |

## Theme Customization

Refer to [Theme Customization](/en/guide/theme) documentation.