# AutoCenter

Text is automatically centered.

## When to Use

The content is not enough for the width of the entire line, or it is used after reaching the full width.

## Demos

<CodeDemo title="Basic Usage" src="./auto-center/demos/demo1.vue" />

## API

### Props

AutoCenter component has no special props, only supports basic native properties.

### CSS Variables

AutoCenter component has no configurable CSS variables.

## Design Philosophy

The AutoCenter component is implemented based on Flexbox layout with the following features:

- **Smart Alignment**: Automatically centers content when it's not full width
- **Adaptive**: Maintains normal left alignment when content reaches full width
- **Lightweight**: Simple implementation with excellent performance
- **Accessible**: Maintains good text readability

## Use Cases

- Centering short titles or labels
- Beautifying single-line text alignment
- Adaptive layout when content length is uncertain
- Scenarios requiring dynamic alignment based on content length

## Notes

- AutoCenter is mainly for text content, not recommended for nesting complex components
- The component uses Flexbox layout internally, compatibility with older browsers may need consideration
- Recommended for scenarios that clearly need dynamic alignment, avoid overuse