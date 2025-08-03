<template>
  <div>
    <DemoBlock title="内容不够整行宽度时自动居中">
      <AutoCenter>{{ shortText }}</AutoCenter>
    </DemoBlock>

    <DemoBlock title="内容达到满宽后保持正常的左对齐">
      <AutoCenter>{{ longText }}</AutoCenter>
    </DemoBlock>
  </div>
</template>

<script setup lang="ts">
import AutoCenter from '../../../../../src/components/auto-center/AutoCenter.vue'
import DemoBlock from '../../../../.vitepress/theme/components/DemoBlock.vue'

const shortText = '短文本内容'
const longText = `这是一段很长的文本内容，用来演示当内容达到满宽度时的效果。当文本内容足够长时，AutoCenter组件会保持正常的左对齐，而不是强制居中对齐。这样可以保证文本的可读性和用户体验。在移动端开发中，合理使用AutoCenter可以让短内容看起来更加美观，同时不影响长内容的阅读体验。`
</script>
