<template>
  <nav class="navbar">
    <div class="left-part">
      <div class="navbar-brand">
        <img :src="navbarConfig.logo.image" :alt="navbarConfig.logo.title" />
        <span class="title">{{ navbarConfig.logo.title }}</span>
        <span class="version">{{ navbarConfig.logo.version }}</span>
      </div>
    </div>
    <div class="middle-part">
      <div class="navbar-search">
        <input type="text" :placeholder="isZh ? '搜索' : 'Search'" />
      </div>
    </div>
    <div class="right-part">
      <nav>
        <span v-for="navItem in currentNavConfig" :key="navItem.text">
          <a
            :href="navItem.link"
            :target="navItem.target || '_self'"
          >
            {{ navItem.text }}
          </a>
        </span>
        <!-- 语言切换按钮 -->
        <span class="language-switch">
          <a :href="languageSwitchLink" @click="handleLanguageSwitch">
            {{ isZh ? 'English' : '中文' }}
          </a>
        </span>
      </nav>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { navbarConfig } from './config'

const { lang } = useData()

const isZh = computed(() => lang.value === 'zh-CN')

const currentNavConfig = computed(() => {
  if (isZh.value) {
    return [
      { text: '指南', link: '/zh/guide/introduction' },
      { text: '组件', link: '/zh/components/button' },
      { text: '资源', link: '/zh/resources' },
      { text: '发布日志', link: 'https://github.com/oliver-xie666/ant-mobile-vue/releases', target: '_blank' },
      { text: 'GitHub', link: 'https://github.com/oliver-xie666/ant-mobile-vue', target: '_blank' },
    ]
  } else {
    return [
      { text: 'Guide', link: '/en/guide/introduction' },
      { text: 'Components', link: '/en/components/button' },
      { text: 'Resources', link: '/en/resources' },
      { text: 'Releases', link: 'https://github.com/oliver-xie666/ant-mobile-vue/releases', target: '_blank' },
      { text: 'GitHub', link: 'https://github.com/oliver-xie666/ant-mobile-vue', target: '_blank' },
    ]
  }
})

const languageSwitchLink = computed(() => {
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/zh/'

  if (isZh.value) {
    // 从中文切换到英文
    if (currentPath === '/zh/' || currentPath === '/zh') {
      return '/en/'
    }
    return currentPath.replace(/^\/zh/, '/en')
  } else {
    // 从英文切换到中文
    if (currentPath === '/en/' || currentPath === '/en') {
      return '/zh/'
    }
    return currentPath.replace(/^\/en/, '/zh')
  }
})

const handleLanguageSwitch = (event) => {
  // VitePress 会自动处理语言切换
  event.preventDefault()
  window.location.href = languageSwitchLink.value
}
</script>
