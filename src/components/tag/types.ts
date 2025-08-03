import type { NativeProps } from '../../utils/native-props'

export interface TagProps extends /* @vue-ignore */ NativeProps<
  '--border-color' | '--background-color' | '--text-color' | '--border-radius'
> {
  color?:
    | 'default'
    | 'primary'
    | 'success'
    | 'warning'
    | 'danger'
    | (string & {})
  fill?: 'solid' | 'outline'
  round?: boolean
  onClick?: (e: MouseEvent) => void
}
