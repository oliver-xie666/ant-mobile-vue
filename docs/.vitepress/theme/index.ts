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
import SpinLoading from '../../../src/components/spin-loading/SpinLoading.vue'
import AutoCenter from '../../../src/components/auto-center/AutoCenter.vue'
import Mask from '../../../src/components/mask/Mask.vue'
import CenterPopup from '../../../src/components/center-popup/CenterPopup.vue'
import Dialog from '../../../src/components/dialog'
import Modal from '../../../src/components/modal'
import Toast from '../../../src/components/toast'

// 导入样式
import '../../../src/styles/index.ts'
import './styles/docs-vars.less'
import './styles/globalPC.less'
import './styles/globalMobile.less'
import './styles/override.less'

// 创建演示组件包装器
import DemoBlock from './components/DemoBlock.vue'
import CodeDemo from './components/CodeDemo.vue'
import HomePage from './components/HomePage.vue'
import IconDemoAll from '../../zh/components/icon/IconDemoAll.vue'
import IconDemoSingle from '../../zh/components/icon/IconDemoSingle.vue'
import Navbar from './components/Navbar.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
import PageLayout from './components/PageLayout.vue'
import DemoPreview from './components/DemoPreview.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    const route = useRoute()

    // 检查是否是iframe模式
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search)
      if (urlParams.get('mode') === 'iframe' && urlParams.get('demo')) {
        return h(DemoPreview)
      }
    }

    // 检查是否是首页
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
    app.component('SpinLoading', SpinLoading)
    app.component('AutoCenter', AutoCenter)
    app.component('Mask', Mask)
    app.component('CenterPopup', CenterPopup)
    app.component('Dialog', Dialog)
    app.component('Modal', Modal)

    // Toast、Dialog 和 Modal 是指令式API，添加到全局属性
    app.config.globalProperties.$toast = Toast
    app.config.globalProperties.$dialog = Dialog
    app.config.globalProperties.$modal = Modal

    app.component('DemoBlock', DemoBlock)
    app.component('CodeDemo', CodeDemo)
    app.component('HomePage', HomePage)
    app.component('Navbar', Navbar)
    app.component('Main', Main)
    app.component('Footer', Footer)
    app.component('PageLayout', PageLayout)
    app.component('DemoPreview', DemoPreview)
    app.component('IconDemoAll', IconDemoAll)
    app.component('IconDemoSingle', IconDemoSingle)
  }
} satisfies Theme
