import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src', import.meta.url))
      }
    }
  },
  title: 'Ant Mobile Vue',
  description: '基于 Vue 3 的移动端组件库，像素级还原 Ant Design Mobile',

  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/introduction' },
      { text: '组件', link: '/components/button' },
      { text: 'GitHub', link: 'https://github.com/oliver-xie666/ant-mobile-vue' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '开始使用',
          items: [
            { text: '介绍', link: '/guide/introduction' },
            { text: '快速开始', link: '/guide/quick-start' }
          ]
        }
      ],
      '/components/': [
        {
          text: '通用',
          items: [
            { text: 'Button 按钮', link: '/components/button' }
          ]
        },
        {
          text: '布局',
          items: [
            { text: 'Space 间距', link: '/components/space' },
            { text: 'Divider 分割线', link: '/components/divider' }
          ]
        },
        {
          text: '反馈',
          items: [
            { text: 'DotLoading 点状加载', link: '/components/dot-loading' }
          ]
        },
        {
          text: '数据展示',
          items: [
            { text: 'Tag 标签', link: '/components/tag' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/oliver-xie666/ant-mobile-vue' }
    ],

    footer: {
      message: '基于 Vue 3 的移动端组件库',
      copyright: 'Copyright © 2025 Ant Mobile Vue'
    },

    editLink: {
      pattern: 'https://github.com/oliver-xie666/ant-mobile-vue/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    lastUpdated: {
      text: '最后更新时间',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    search: {
      provider: 'local'
    }
  }
})
