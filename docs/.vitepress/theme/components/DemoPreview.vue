<template>
  <div class="demo-preview">
    <component v-if="demoComponent" :is="demoComponent" />
    <div v-else class="loading">加载Demo中...</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, markRaw } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
const demoComponent = ref(null)

// 预加载所有demo组件
const demoModules = import.meta.glob('../../../**/demos/*.vue', { eager: false })

const loadDemoComponent = async () => {
  try {
    // 从URL查询参数获取demo路径
    const demoPath = route.data?.params?.demo || new URLSearchParams(location.search).get('demo')
    if (!demoPath) {
      console.error('No demo path specified')
      return
    }

    // 转换demo路径：button/demos/demo1 -> button/demos/demo1.vue
    const targetPath = demoPath.includes('.vue') ? demoPath : `${demoPath}.vue`

    // 获取当前页面语言
    const currentLang = typeof window !== 'undefined' ?
      (window.location.pathname.startsWith('/en/') ? 'en' : 'zh') : 'zh'

    // 查找匹配的demo组件，优先选择当前语言的demo文件
    const componentKey = Object.keys(demoModules).find(key => {
      const normalizedKey = key.replace(/^\.\.\/\.\.\/\.\.\//,'').replace(/^(zh|en)\/components\//,'')
      return normalizedKey === targetPath && key.includes(`/${currentLang}/components/`)
    }) || Object.keys(demoModules).find(key => {
      const normalizedKey = key.replace(/^\.\.\/\.\.\/\.\.\//,'').replace(/^(zh|en)\/components\//,'')
      return normalizedKey === targetPath
    })

    if (componentKey) {
      const componentModule = await demoModules[componentKey]()
      demoComponent.value = markRaw(componentModule.default)
    } else {
      console.error('Demo component not found:', targetPath)
      console.log('Available demos:', Object.keys(demoModules))
    }
  } catch (error) {
    console.error('Failed to load demo component:', error)
  }
}

onMounted(() => {
  loadDemoComponent()
})
</script>

<style scoped>
.demo-preview {
  min-height: 100vh;
  padding: 20px;
  background: #fff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: #666;
  font-size: 16px;
}
</style>
