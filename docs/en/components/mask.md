# Mask

Dark background layer.

## When to Use

Often used in the background layer of a modal window to make the visual focus stand out on the modal window itself.

## Demos

<code src="./mask/demos/demo1.vue"></code>

## API

### Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| afterClose | Triggered when completely closed | `() => void` | - |
| afterShow | Triggered after fully displayed | `() => void` | - |
| color | Color of the mask | `'black' \| 'white' \| string` | `'black'` |
| destroyOnClose | Destroy `dom` when not visible | `boolean` | `false` |
| disableBodyScroll | Whether to disable `body` scrolling | `boolean` | `true` |
| forceRender | Render content forcely | `boolean` | `false` |
| getContainer | To get the specified mounted `HTML` node, if `null` returned, it would be rendered to the current node | `HTMLElement \| () => HTMLElement \| null` | `null` |
| onMaskClick | Triggered when the mask is clicked | `(event: MouseEvent) => void` | - |
| opacity | Opacity | `'default' \| 'thin' \| 'thick' \| number` | `'default'` |
| stopPropagation | Stop the propagation of some events. | `PropagationEvent[]` | `['click']` |
| visible | Whether to show or hide | `boolean` | `true` |

### Events

| Event | Description | Type |
| --- | --- | --- |
| maskClick | Triggered when the mask is clicked | `(event: MouseEvent) => void` |

### CSS Variables

| Name | Description | Default | Global |
| --- | --- | --- | --- |
| --z-index | `z-index` of the mask element | `1000` | `--adm-mask-z-index` |

## Design Philosophy

The Mask component serves as the foundation for overlay functionality with the following features:

- **Layer Management**: Controls display hierarchy through z-index
- **Animation Support**: Built-in fade in/out transition animations
- **Interaction Control**: Supports click-to-close and event propagation control
- **Accessibility**: Provides ARIA labels for screen reader support
- **Scroll Lock**: Optional body scroll locking functionality

## Use Cases

- **Modal Background**: As overlay for dialogs and popups
- **Image Viewer**: Background for fullscreen image preview
- **Sidebar Overlay**: Background when drawer navigation is open
- **Loading State**: Overlay during fullscreen loading

## Notes

- The Mask component uses Vue's Teleport feature and allows custom render containers
- When `disableBodyScroll` is `true`, page scrolling will be locked
- Use `destroyOnClose` to control component destruction timing and avoid memory leaks
- Supports custom colors and opacity for various visual effects