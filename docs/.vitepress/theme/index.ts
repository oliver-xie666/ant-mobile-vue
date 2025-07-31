import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { h } from 'vue'

// 导入我们的组件
import Button from '../../../src/components/button/Button.vue'
import DotLoading from '../../../src/components/dot-loading/DotLoading.vue'
import Divider from '../../../src/components/divider/Divider.vue'
import Space from '../../../src/components/space/Space.vue'
import Tag from '../../../src/components/tag/Tag.vue'

// 导入样式
import '../../../src/styles/index.ts'

// 创建演示组件包装器
import DemoBlock from './components/DemoBlock.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // 注册全局组件
    app.component('Button', Button)
    app.component('DotLoading', DotLoading)
    app.component('Divider', Divider)
    app.component('Space', Space)
    app.component('Tag', Tag)
    app.component('DemoBlock', DemoBlock)
  }
} satisfies Theme
