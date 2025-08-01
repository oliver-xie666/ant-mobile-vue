import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { h } from 'vue'
import { useRoute } from 'vitepress'

// 导入我们的组件
import Button from '../../../src/components/button/Button.vue'
import DotLoading from '../../../src/components/dot-loading/DotLoading.vue'
import Divider from '../../../src/components/divider/Divider.vue'
import Space from '../../../src/components/space/Space.vue'
import Tag from '../../../src/components/tag/Tag.vue'

// 导入样式
import '../../../src/styles/index.ts'
import './styles/docs-vars.less'
import './styles/globalPC.less'
import './styles/globalMobile.less'
import './styles/override.less'

// 创建演示组件包装器
import DemoBlock from './components/DemoBlock.vue'
import HomePage from './components/HomePage.vue'
import IconDemoAll from '../../zh/components/icon/IconDemoAll.vue'
import IconDemoSingle from '../../zh/components/icon/IconDemoSingle.vue'
import Navbar from './components/Navbar.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
import PageLayout from './components/PageLayout.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    // 检查是否是首页
    const route = useRoute()
    if (route.path === '/' || route.path === '/zh/' || route.path === '/en/' || route.path === '/zh' || route.path === '/en') {
      return h(HomePage)
    }
    // 其他页面使用带导航栏的页面布局
    return h(PageLayout, null, {
      default: () => h(DefaultTheme.Layout)
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
    app.component('HomePage', HomePage)
    app.component('Navbar', Navbar)
    app.component('Main', Main)
    app.component('Footer', Footer)
    app.component('PageLayout', PageLayout)
    app.component('IconDemoAll', IconDemoAll)
    app.component('IconDemoSingle', IconDemoSingle)
  }
} satisfies Theme
