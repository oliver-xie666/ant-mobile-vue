<script lang="ts">
import { defineComponent, h } from 'vue'
import type { NativeProps } from '../../utils/native-props'

export interface AutoCenterProps extends /* @vue-ignore */ NativeProps {
  // AutoCenter组件只需要基础的NativeProps，没有其他特殊属性
  _?: never // 防止空接口错误
}

export default defineComponent({
  name: 'AutoCenter',
  props: {},
  setup(_, { slots }) {
    return () => h(
      'div',
      { class: 'adm-auto-center' },
      h(
        'div',
        { class: 'adm-auto-center-content' },
        slots.default?.()
      )
    )
  }
})
</script>

<style lang="less">
@class-prefix-auto-center: ~'adm-auto-center';

.@{class-prefix-auto-center} {
  display: flex;
  justify-content: center;

  &-content {
    flex: 0 1 auto;
  }
}
</style>
