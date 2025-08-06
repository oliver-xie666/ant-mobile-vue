<template>
  <div>
    <DemoBlock title="基本的输入框组件">
      <TextArea
        placeholder="请输入内容"
        :value="value"
        @change="handleChange"
      />
    </DemoBlock>

    <DemoBlock title="指定行数">
      <TextArea placeholder="请输入内容" :rows="5" />
    </DemoBlock>

    <DemoBlock title="根据内容自动调整高度">
      <TextArea
        placeholder="请输入内容"
        :auto-size="{ minRows: 3, maxRows: 5 }"
      />
    </DemoBlock>

    <DemoBlock title="字数统计">
      <TextArea :default-value="'北极星垂地，\n东山月满川。'" show-count />
    </DemoBlock>

    <DemoBlock title="字数限制">
      <TextArea
        :default-value="'北极星垂地，\n东山月满川。'"
        show-count
        :max-length="30"
      />
    </DemoBlock>

    <DemoBlock title="禁用状态">
      <TextArea
        placeholder="请输入内容"
        :value="'北极星垂地，\n东山月满川。'"
        disabled
      />
    </DemoBlock>

    <DemoBlock title="只读状态">
      <TextArea
        placeholder="请输入内容"
        :value="'北极星垂地，\n东山月满川。'"
        readonly
      />
    </DemoBlock>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TextArea from '../../../../../src/components/text-area'

const value = ref('')

const handleChange = (val: string) => {
  value.value = val
}
</script>

<style scoped>
.demo-text-area {
  padding: 16px;
}

.demo-section {
  margin-bottom: 24px;
}

.demo-section h3 {
  margin: 0 0 8px;
  font-size: 14px;
  color: #666;
}
</style>
