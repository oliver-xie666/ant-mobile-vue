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

  // 重定向配置
  rewrites: {
    'index.md': 'zh/index.md'
  },

  // 默认语言重定向
  lang: 'zh-CN',

  // 多语言配置
  locales: {
    zh: {
      label: '中文',
      lang: 'zh-CN',
      title: 'Ant Mobile Vue',
      description: '基于 Vue 3 的移动端组件库，像素级还原 Ant Design Mobile',
      themeConfig: {
        // 禁用默认导航栏
        sidebar: {
          '/zh/guide/': [
            {
              text: '开始使用',
              items: [
                { text: '介绍', link: '/zh/guide/introduction' },
                { text: '快速开始', link: '/zh/guide/quick-start' },
                { text: '主题定制', link: '/zh/guide/theming' },
                { text: 'CSS 变量', link: '/zh/guide/css-variables' },
                { text: '国际化', link: '/zh/guide/i18n' }
              ]
            },
            {
              text: '进阶指南',
              items: [
                { text: '常见问题', link: '/zh/guide/faq' },
                { text: '迁移指南', link: '/zh/guide/migration' },
                { text: '按需引入', link: '/zh/guide/import-on-demand' }
              ]
            }
          ],
          '/zh/components/': [
            {
              text: '通用',
              items: [
                { text: 'Button 按钮', link: '/zh/components/button' },
                { text: 'Icon 图标', link: '/zh/components/icon/' }
              ]
            },
            {
              text: '布局',
              items: [
                { text: 'Space 间距', link: '/zh/components/space' },
                { text: 'Divider 分割线', link: '/zh/components/divider' }
              ]
            },
            {
              text: '反馈',
              items: [
                { text: 'DotLoading 点状加载', link: '/zh/components/dot-loading' }
              ]
            },
            {
              text: '数据展示',
              items: [
                { text: 'Tag 标签', link: '/zh/components/tag' }
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
        // 禁用默认导航栏
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
