interface InputHandleKeyDownType {
  onEnterPress?: (e: KeyboardEvent) => void
  onKeyDown?: (e: KeyboardEvent) => void
}

export default function useInputHandleKeyDown({
  onEnterPress,
  onKeyDown,
}: InputHandleKeyDownType) {
  const handleKeydown = (e: KeyboardEvent) => {
    onKeyDown?.(e)
    if (onEnterPress && (e.code === 'Enter' || e.key === 'Enter' || e.keyCode === 13)) {
      onEnterPress(e)
    }
  }

  return handleKeydown
}
