import type { NativeProps } from '../../utils/native-props'

export interface SpinLoadingProps extends /* @vue-ignore */ NativeProps<'--color' | '--size'> {
  color?: 'default' | 'primary' | 'white' | (string & {})
}
