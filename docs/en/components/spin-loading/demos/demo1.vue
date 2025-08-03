<template>
  <div>
    <DemoBlock title="Default">
      <SpinLoading />
    </DemoBlock>

    <DemoBlock title="Colors">
      <Space
        direction="horizontal"
        wrap
        block
        :style="{ '--gap': '16px' }"
      >
        <SpinLoading color="default" />
        <SpinLoading color="primary" />
        <SpinLoading color="currentColor" />
      </Space>
    </DemoBlock>

    <DemoBlock title="Sizes">
      <Space
        direction="horizontal"
        wrap
        block
        :style="{ '--gap': '16px' }"
      >
        <SpinLoading :style="{ '--size': '24px' }" />
        <SpinLoading :style="{ '--size': '32px' }" />
        <SpinLoading :style="{ '--size': '48px' }" />
      </Space>
    </DemoBlock>
  </div>
</template>

<script setup lang="ts">
import SpinLoading from '../../../../../src/components/spin-loading/SpinLoading.vue'
import Space from '../../../../../src/components/space/Space.vue'
import DemoBlock from '../../../../.vitepress/theme/components/DemoBlock.vue'
</script>
