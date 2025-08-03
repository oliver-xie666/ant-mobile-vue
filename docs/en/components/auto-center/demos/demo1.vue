<template>
  <div>
    <DemoBlock title="Auto center when content is not full width">
      <AutoCenter>{{ shortText }}</AutoCenter>
    </DemoBlock>

    <DemoBlock title="Keep normal left alignment when content reaches full width">
      <AutoCenter>{{ longText }}</AutoCenter>
    </DemoBlock>
  </div>
</template>

<script setup lang="ts">
import AutoCenter from '../../../../../src/components/auto-center/AutoCenter.vue'
import DemoBlock from '../../../../.vitepress/theme/components/DemoBlock.vue'

const shortText = 'Short text content'
const longText = `This is a very long text content to demonstrate the effect when content reaches full width. When the text content is long enough, the AutoCenter component will maintain normal left alignment instead of forcing center alignment. This ensures text readability and user experience. In mobile development, proper use of AutoCenter can make short content look more beautiful while not affecting the reading experience of long content. It provides flexible layout behavior based on content length.`
</script>
