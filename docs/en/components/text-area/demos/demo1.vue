<template>
  <div>
    <DemoBlock title="Basic input field component">
      <TextArea
        placeholder="Please enter content"
        :value="value"
        @change="handleChange"
      />
    </DemoBlock>

    <DemoBlock title="Specify number of rows">
      <TextArea placeholder="Please enter content" :rows="5" />
    </DemoBlock>

    <DemoBlock title="Auto-adjust height based on content">
      <TextArea
        placeholder="Please enter content"
        :auto-size="{ minRows: 3, maxRows: 5 }"
      />
    </DemoBlock>

    <DemoBlock title="Character count">
      <TextArea :default-value="'North Star hanging low,\nEast Mountain moon full river.'" show-count />
    </DemoBlock>

    <DemoBlock title="Character limit">
      <TextArea
        :default-value="'North Star hanging low,\nEast Mountain moon full river.'"
        show-count
        :max-length="30"
      />
    </DemoBlock>

    <DemoBlock title="Disabled state">
      <TextArea
        placeholder="Please enter content"
        :value="'North Star hanging low,\nEast Mountain moon full river.'"
        disabled
      />
    </DemoBlock>

    <DemoBlock title="Read-only state">
      <TextArea
        placeholder="Please enter content"
        :value="'North Star hanging low,\nEast Mountain moon full river.'"
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
