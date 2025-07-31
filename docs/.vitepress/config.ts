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

  // 多语言配置
  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
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
                { text: '快速开始', link: '/guide/quick-start' },
                { text: '主题定制', link: '/guide/theming' },
                { text: 'CSS 变量', link: '/guide/css-variables' },
                { text: '国际化', link: '/guide/i18n' }
              ]
            },
            {
              text: '进阶指南',
              items: [
                { text: '常见问题', link: '/guide/faq' },
                { text: '迁移指南', link: '/guide/migration' },
                { text: '按需引入', link: '/guide/import-on-demand' }
              ]
            }
          ],
          '/components/': [
            {
              text: '通用',
              items: [
                { text: 'Button 按钮', link: '/components/button' },
                { text: 'Icon 图标', link: '/components/icon/' }
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
        footer: {
          message: '基于 Vue 3 的移动端组件库',
          copyright: 'Copyright © 2025 Ant Mobile Vue'
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'Ant Mobile Vue',
      description: 'Essential UI components for Vue 3 mobile applications',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/en/guide/introduction' },
          { text: 'Components', link: '/en/components/button' },
          { text: 'GitHub', link: 'https://github.com/oliver-xie666/ant-mobile-vue' }
        ],
        sidebar: {
          '/en/guide/': [
            {
              text: 'Getting Started',
              items: [
                { text: 'Introduction', link: '/en/guide/introduction' },
                { text: 'Quick Start', link: '/en/guide/quick-start' },
                { text: 'Theming', link: '/en/guide/theming' },
                { text: 'CSS Variables', link: '/en/guide/css-variables' },
                { text: 'Internationalization', link: '/en/guide/i18n' }
              ]
            },
            {
              text: 'Advanced',
              items: [
                { text: 'FAQ', link: '/en/guide/faq' },
                { text: 'Migration', link: '/en/guide/migration' },
                { text: 'Import on Demand', link: '/en/guide/import-on-demand' }
              ]
            }
          ],
          '/en/components/': [
            {
              text: 'General',
              items: [
                { text: 'Button', link: '/en/components/button' },
                { text: 'Icon', link: '/en/components/icon/' }
              ]
            },
            {
              text: 'Layout',
              items: [
                { text: 'Space', link: '/en/components/space' },
                { text: 'Divider', link: '/en/components/divider' }
              ]
            },
            {
              text: 'Feedback',
              items: [
                { text: 'DotLoading', link: '/en/components/dot-loading' }
              ]
            },
            {
              text: 'Data Display',
              items: [
                { text: 'Tag', link: '/en/components/tag' }
              ]
            }
          ]
        },
        editLink: {
          pattern: 'https://github.com/oliver-xie666/ant-mobile-vue/edit/main/docs/:path',
          text: 'Edit this page on GitHub'
        },
        lastUpdated: {
          text: 'Last updated',
          formatOptions: {
            dateStyle: 'short',
            timeStyle: 'medium'
          }
        },
        footer: {
          message: 'Essential UI components for Vue 3 mobile applications',
          copyright: 'Copyright © 2025 Ant Mobile Vue'
        }
      }
    }
  },

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/oliver-xie666/ant-mobile-vue' }
    ],
    search: {
      provider: 'local'
    }
  }
})
