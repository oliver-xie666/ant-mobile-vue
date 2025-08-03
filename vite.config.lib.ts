import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: {
        // 主入口
        index: resolve(__dirname, 'lib/index.ts'),
        // 组件入口
        'button/index': resolve(__dirname, 'src/components/button/index.ts'),
        'dot-loading/index': resolve(__dirname, 'src/components/dot-loading/index.ts'),
        'divider/index': resolve(__dirname, 'src/components/divider/index.ts'),
        'space/index': resolve(__dirname, 'src/components/space/index.ts'),
        'tag/index': resolve(__dirname, 'src/components/tag/index.ts'),
      },
      name: 'AntMobileVue',
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => {
        const extension = format === 'es' ? 'js' : 'cjs'
        return `${entryName}.${extension}`
      },
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        // 确保样式文件也能正确输出
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            const name = assetInfo.name.replace('.css', '')
            return `${name}/index.css`
          }
          return assetInfo.name || 'assets/[name].[ext]'
        },
      },
    },
    outDir: 'lib',
    emptyOutDir: true,
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          // 可以在这里定义全局Less变量
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
