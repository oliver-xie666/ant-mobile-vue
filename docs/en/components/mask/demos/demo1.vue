<template>
  <div>
    <!-- Basic Usage -->
    <DemoBlock title="Basic Usage">
      <Button @click="simpleVisible = true">Show Mask</Button>
      <Mask :visible="simpleVisible" @mask-click="simpleVisible = false" />
    </DemoBlock>

    <!-- Mask Opacity -->
    <DemoBlock title="Mask Opacity">
      <Space wrap>
        <Button @click="thinVisible = true">Show Thin Mask</Button>
        <Button @click="thickVisible = true">Show Thick Mask</Button>
        <Button @click="customOpacityVisible = true">Show Custom Opacity Mask</Button>
      </Space>

      <Mask
        :visible="thinVisible"
        opacity="thin"
        @mask-click="thinVisible = false"
      />
      <Mask
        :visible="thickVisible"
        opacity="thick"
        @mask-click="thickVisible = false"
      />
      <Mask
        :visible="customOpacityVisible"
        :opacity="1"
        @mask-click="customOpacityVisible = false"
      />
    </DemoBlock>

    <!-- Mask Color -->
    <DemoBlock title="Mask Color">
      <Space wrap>
        <Button @click="whiteVisible = true">Show White Mask</Button>
        <Button @click="customColorVisible = true">Show Custom Color Mask</Button>
      </Space>

      <Mask
        :visible="whiteVisible"
        color="white"
        @mask-click="whiteVisible = false"
      />
      <Mask
        :visible="customColorVisible"
        color="rgba(219, 10, 10, 0.5)"
        @mask-click="customColorVisible = false"
      />
    </DemoBlock>

    <!-- Custom Content -->
    <DemoBlock title="Custom Content">
      <Button @click="contentVisible = true">Show Mask with Content</Button>
      <Mask :visible="contentVisible" @mask-click="contentVisible = false">
        <div :class="$style.overlayContent">Content</div>
      </Mask>
    </DemoBlock>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Mask from '../../../../../src/components/mask/Mask.vue'
import Button from '../../../../../src/components/button/Button.vue'
import Space from '../../../../../src/components/space/Space.vue'
import DemoBlock from '../../../../.vitepress/theme/components/DemoBlock.vue'

// Visibility states for different demos
const simpleVisible = ref(false)
const thinVisible = ref(false)
const thickVisible = ref(false)
const customOpacityVisible = ref(false)
const whiteVisible = ref(false)
const customColorVisible = ref(false)
const contentVisible = ref(false)
</script>

<style module>
.overlayContent {
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  margin-top: -75px;
  margin-left: -75px;
  background: white;
  border-radius: 16px;
}
</style>
