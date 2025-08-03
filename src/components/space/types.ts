import type { NativeProps } from '../../utils/native-props'

export interface SpaceProps extends /* @vue-ignore */ NativeProps<'--gap' | '--gap-vertical' | '--gap-horizontal'> {
  direction?: 'horizontal' | 'vertical'
  align?: 'start' | 'end' | 'center' | 'baseline'
  justify?:
    | 'start'
    | 'end'
    | 'center'
    | 'between'
    | 'around'
    | 'evenly'
    | 'stretch'
  wrap?: boolean
  block?: boolean
  onClick?: (event: MouseEvent) => void
}
