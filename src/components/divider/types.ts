import type { NativeProps } from '../../utils/native-props'

export interface DividerProps extends /* @vue-ignore */ NativeProps {
  contentPosition?: 'left' | 'right' | 'center'
  direction?: 'horizontal' | 'vertical'
}
