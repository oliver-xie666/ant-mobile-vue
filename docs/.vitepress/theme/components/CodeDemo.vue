<template>
  <div class="adm-doc-previewer" :data-debug="debug">
    <!-- 左侧代码区域 -->
    <div class="adm-doc-previewer-source">
      <div class="__dumi-default-previewer">
        <!-- 标题描述区 (隐藏) -->
        <div class="__dumi-default-previewer-desc" :data-title="title" :style="{ display: 'none' }">
          <a v-if="title" :href="`#${identifier}`">{{ title }}</a>
        </div>

        <!-- 操作按钮区 -->
        <div class="__dumi-default-previewer-actions">
          <span v-if="debug" class="debug-badge">Debug Only</span>

          <!-- CodeSandbox按钮 -->
          <button title="Open demo on CodeSandbox.io" class="__dumi-default-icon" role="codesandbox"
            @click="openCodeSandbox" />

          <div class="spacer" />

          <!-- 复制代码按钮 -->
          <button title="Copy source code" class="__dumi-default-icon" role="copy" :data-status="copyStatus"
            @click="copyCode" />

          <!-- TypeScript Playground按钮 -->
          <button title="Get JSX via TypeScript Playground" class="__dumi-default-icon" role="change-tsx" type="button"
            @click="openPlayground" />
        </div>

        <!-- 源码展示区 -->
        <div class="__dumi-default-previewer-source-wrapper">
          <!-- 文件切换Tab (如果有多个文件) -->
          <div v-if="!isSingleFile" class="__dumi-default-tabs">
            <!-- 这里应该是文件切换标签 -->
          </div>

          <!-- 代码内容 -->
          <div class="__dumi-default-previewer-source">
            <div class="__dumi-default-code-block">
              <pre class="prism-code language-vue" v-html="highlightedCode"></pre>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 右侧设备预览区域 -->
    <div class="adm-doc-previewer-device">
      <div class="adm-doc-device" data-device-type="iOS" :data-mode="mode">
        <!-- 使用iframe渲染Demo -->
        <iframe v-if="demoUrl" title="dumi-previewer" :src="demoUrl" :key="iframeKey" ref="demoIframe"
          @load="onIframeLoad" />
        <div v-else class="loading-demo">正在生成demo URL...</div>

        <!-- 设备操作按钮 -->
        <div class="adm-doc-device-action">
          <button @click="refresh" title="刷新" class="__dumi-default-icon" role="refresh" />
          <button @click="showQR" title="二维码" class="__dumi-default-icon" role="qr" />
          <button @click="openNewWindow" title="新窗口打开" class="__dumi-default-icon" role="open-demo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import hljs from 'highlight.js/lib/core'
import vue from 'highlight.js/lib/languages/xml' // Vue使用xml语法高亮
import typescript from 'highlight.js/lib/languages/typescript'
import javascript from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/github.css'

// 注册语言
hljs.registerLanguage('vue', vue)
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('javascript', javascript)

interface Props {
  title?: string
  debug?: boolean
  identifier?: string
  src: string // 必需：demo组件的路径
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  debug: false,
  identifier: 'demo',
})

const copyStatus = ref<'ready' | 'copied'>('ready')
const mode = ref('site')
const isSingleFile = ref(true)

// iframe渲染demo
const demoUrl = ref('')
const demoSource = ref('')
const iframeKey = ref(Date.now())
const demoIframe = ref<HTMLIFrameElement | null>(null)

// 预加载所有demo组件和源码
// CodeDemo.vue 在 docs/.vitepress/theme/components/
// demo文件 在 docs/zh/components/*/demos/ 和 docs/en/components/*/demos/
const demoModules = import.meta.glob('../../../**/demos/*.vue', { eager: false })
const sourceModules = import.meta.glob('../../../**/demos/*.vue', { query: '?raw', eager: false })

// 生成demo iframe内容和加载源码
const loadDemo = async () => {
  try {
    // 处理相对路径: "./button/demos/demo1.vue"
    let targetPath = props.src
    if (targetPath.startsWith('./')) {
      targetPath = targetPath.slice(2) // 移除 ./
    }

    // 查找匹配的demo组件和源码
    const componentKey = Object.keys(demoModules).find(key => {
      const normalizedKey = key.replace(/^\.\.\/\.\.\/\.\.\//, '').replace(/^(zh|en)\/components\//, '')
      return normalizedKey === targetPath
    })

    const sourceKey = Object.keys(sourceModules).find(key => {
      const normalizedKey = key.replace(/^\.\.\/\.\.\/\.\.\//, '').replace(/^(zh|en)\/components\//, '')
      return normalizedKey === targetPath
    })

    if (componentKey && sourceKey) {
      // 动态导入源码
      const sourceModule = await sourceModules[sourceKey]()
      demoSource.value = sourceModule.default

      // 生成iframe data URL
      generateIframeDataUrl()
    } else {
      demoSource.value = `// 未找到demo文件: ${targetPath}`
    }
  } catch (error) {
    demoSource.value = '// 源码加载失败: ' + error.message
  }
}

// 生成iframe的data URL
const generateIframeDataUrl = () => {
  // 构建demo预览URL，使用查询参数
  const currentUrl = new URL(window.location.href)
  const demoPath = props.src.replace('./', '').replace('.vue', '')

  // 创建demo预览URL：当前页面 + demo查询参数
  currentUrl.searchParams.set('demo', demoPath)
  currentUrl.searchParams.set('mode', 'iframe')

  demoUrl.value = currentUrl.toString()
}

// 组件挂载时加载demo
onMounted(() => {
  loadDemo()
})

// 监听src变化，重新加载
watch(() => props.src, () => {
  loadDemo()
})

// 使用highlight.js进行语法高亮
const highlightedCode = computed(() => {
  if (!demoSource.value) {
    return '<div class="no-code-message">正在加载源码...</div>'
  }

  // 使用highlight.js进行Vue语法高亮
  const highlighted = hljs.highlight(demoSource.value, { language: 'vue' }).value
  return highlighted
})

const copyCode = async () => {
  try {
    const code = demoSource.value || '暂无源码'
    await navigator.clipboard.writeText(code)
    copyStatus.value = 'copied'
    setTimeout(() => {
      copyStatus.value = 'ready'
    }, 2000)
  } catch (err) {
    console.error('复制失败:', err)
  }
}

const openCodeSandbox = () => {
  // TODO: 实现CodeSandbox功能
  window.open('https://codesandbox.io/s/new', '_blank')
}

const openPlayground = () => {
  // 对于Vue项目，跳转到Vue SFC Playground
  const vuePlaygroundUrl = `https://sfc.vuejs.org/#${encodeURIComponent(JSON.stringify({
    'App.vue': demoSource.value || '<!-- demo source not loaded -->'
  }))}`
  window.open(vuePlaygroundUrl, '_blank')
}

// iframe加载完成回调
const onIframeLoad = () => {
  // iframe加载完成后的处理
}

const refresh = () => {
  // 刷新iframe：通过改变key来重新加载
  iframeKey.value = Date.now()
}

const showQR = () => {
  // 生成demo iframe URL的二维码
  const demoFullUrl = new URL(demoUrl.value, window.location.origin).href
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(demoFullUrl)}`

  // 创建模态框显示二维码
  const modal = document.createElement('div')
  modal.style.cssText = `
    position: fixed; top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.5); display: flex; align-items: center;
    justify-content: center; z-index: 9999; cursor: pointer;
  `
  modal.innerHTML = `
    <div style="background: white; padding: 20px; border-radius: 8px; text-align: center;">
      <h3 style="margin-top: 0;">扫码在手机上查看Demo</h3>
      <img src="${qrUrl}" alt="QR Code" style="max-width: 200px;">
      <p style="margin-bottom: 0; color: #666; font-size: 12px;">点击任意处关闭</p>
    </div>
  `
  modal.onclick = () => document.body.removeChild(modal)
  document.body.appendChild(modal)
}

const openNewWindow = () => {
  // 在新窗口中打开demo iframe
  if (demoUrl.value) {
    const demoFullUrl = new URL(demoUrl.value, window.location.origin).href
    window.open(demoFullUrl, '_blank', 'width=375,height=667')
  }
}
</script>

<style scoped lang="less">
// 完全基于源项目的样式实现
.adm-doc-previewer {
  display: flex;
  height: 700px;
  margin-bottom: 24px;
  width: 100%;
  justify-content: flex-start;
  align-items: stretch;
  border-radius: 12px;
  overflow: hidden;

  --border-color: #f0f1f3;

  border: 1px solid var(--border-color);

  @media only screen and (width <=1440px) {
    height: 600px;
  }

  @media only screen and (width <=960px) {
    height: 500px;
  }

  &[data-debug] {
    --border-color: #ffcb00;
  }

  >.adm-doc-previewer-source {
    flex: 2;
    overflow-x: scroll;

    .__dumi-default-previewer {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      border-right: none;

      .__dumi-default-previewer-actions {
        border-top: none;
        padding: 8px 16px;
        display: flex;
        align-items: center;
        gap: 8px;
        background: var(--vp-c-bg-soft);
        border-bottom: 1px solid var(--vp-c-border);

        .debug-badge {
          background: #ffcb00;
          color: #000;
          padding: 2px 6px;
          border-radius: 3px;
          font-size: 11px;
          font-weight: 500;
        }

        .spacer {
          flex: 1;
        }

        // 按钮间距
        >a:not(:last-child),
        >button:not(:last-child) {
          margin-right: 8px;
        }

        >a {
          display: flex;
        }

        button {
          position: relative;
          display: inline-block;
          width: 16px;
          height: 16px;
          padding: 0;
          border: 0;
          box-sizing: border-box;
          cursor: pointer;
          opacity: 0.6;
          outline: none;
          transition: opacity 0.2s, background 0.2s;

          // 使用源项目的精灵图
          background: url('data:image/png;base64,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') no-repeat 0 0;
          background-size: 230px auto;

          // 暗色主题下的透明度
          [data-prefers-color='dark'] & {
            opacity: 1;
          }

          // 扩大点击区域
          &::after {
            content: '';
            position: absolute;
            top: -8px;
            left: -8px;
            right: -8px;
            bottom: -8px;
          }

          &:hover {
            opacity: 0.8;
          }

          &:active {
            opacity: 0.9;
          }

          &:disabled {
            opacity: 0.2;
            cursor: not-allowed;
          }

          // 各种按钮的背景位置
          &[role='codesandbox'] {
            background-position: -18px 0;
          }

          &[role='codepen'] {
            background-position: -36px 0;
          }

          &[role='source'] {
            background-position: -72px 0;
          }

          &[role='change-jsx'] {
            background-position: -90px 0;
          }

          &[role='change-tsx'] {
            background-position: -108px 0;
          }

          &[role='open-demo'] {
            background-position: -126px 0;
          }

          &[role='motions'] {
            background-position: -162px 0;
          }

          &[role='sketch-component'] {
            background-position: -182px 0;
          }

          &[role='sketch-group'] {
            background-position: -200px 0;
          }

          &[role='copy'][data-status='ready'] {
            background-position: -54px 0;
          }

          &[role='copy'][data-status='copied'] {
            pointer-events: none;
            background-position: -54px -16px;
          }

          &[role='refresh'] {
            background-position: -144px 0;
          }
        }
      }

      .__dumi-default-previewer-demo {
        display: none;
      }

      .__dumi-default-previewer-desc {
        display: none;
      }

      >* {
        flex: none;
      }

      >.__dumi-default-previewer-source-wrapper {
        min-height: 0;
        flex: auto;
        display: flex;
        flex-direction: column;

        >.__dumi-default-tabs {
          flex: none;
        }

        >.__dumi-default-previewer-source {
          flex: auto;
          overflow-y: scroll;
          border-bottom-left-radius: 12px;

          .__dumi-default-code-block {
            background: #fff;

            pre {
              margin: 0;
              padding: 16px;
              font-size: 13px;
              line-height: 1.6;
              font-family: Monaco, Menlo, 'Ubuntu Mono', monospace;
              overflow: auto;
              background: #fff !important;

              // Prism.js样式覆盖，确保与源项目一致
              .token.tag {
                color: #d73a49;
              }

              .token.attr-name {
                color: #6f42c1;
              }

              .token.attr-value {
                color: #032f62;
              }

              .token.keyword {
                color: #d73a49;
              }

              .token.string {
                color: #032f62;
              }

              .token.function {
                color: #6f42c1;
              }

              .token.comment {
                color: #6a737d;
                font-style: italic;
              }

              .token.punctuation {
                color: #24292e;
              }

              .__dumi-default-code-block-copy-btn {
                display: none;
              }

              .no-code-message {
                color: #999;
                text-align: center;
                padding: 40px 20px;
                font-style: italic;
              }
            }
          }

          html.dark & .__dumi-default-code-block {
            color: #f0f0f0;
            background: #262626;

            .no-code-message {
              color: #666;
            }
          }
        }
      }
    }
  }

  >.adm-doc-previewer-device {
    flex: 1;
    border-left: solid 1px var(--border-color);

    .adm-doc-device {
      height: 100%;
      background: #f5f5f5;
      position: relative;

      .demo-render-area {
        height: calc(100% - 40px);
        padding: 20px;
        overflow-y: auto;
        background: #fff;
      }

      // iframe样式
      iframe {
        border: 0;
        width: 100%;
        height: calc(100% - 40px);
        background: #fff;
      }

      .loading-demo {
        height: calc(100% - 40px);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #999;
        font-style: italic;
      }

      .adm-doc-device-action {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 16px;
        padding-right: 16px;
        background: rgb(0 0 0 / 5%);

        button {
          position: relative;
          display: inline-block;
          width: 16px;
          height: 16px;
          padding: 0;
          border: 0;
          box-sizing: border-box;
          cursor: pointer;
          opacity: 0.6;
          outline: none;
          transition: opacity 0.2s;

          // 使用源项目精灵图
          background: url('data:image/png;base64,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') no-repeat 0 0;
          background-size: 230px auto;

          // 扩大点击区域
          &::after {
            content: '';
            position: absolute;
            top: -8px;
            left: -8px;
            right: -8px;
            bottom: -8px;
          }

          &:hover {
            opacity: 0.8;
          }

          &:active {
            opacity: 0.9;
          }

          // 设备操作按钮的具体位置 - 根据源项目精灵图
          &[role='refresh'] {
            background-position: -144px 0;
          }

          &[role='qr'] {
            background-position: -54px 0; // 临时使用copy图标位置
          }

          &[role='open-demo'] {
            background-position: -126px 0;
          }
        }
      }
    }
  }
}

/* 暗色主题适配 */
html.dark {
  .adm-doc-previewer .adm-doc-device {
    background: #262626;

    .demo-render-area {
      background: #1a1a1a;
    }

    .adm-doc-device-action {
      background: rgb(255 255 255 / 10%);
    }
  }
}
</style>
