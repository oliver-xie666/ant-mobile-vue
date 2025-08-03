<template>
  <div>
    <!-- 基础用法 -->
    <DemoBlock title="基础用法">
      <Button @click="simpleVisible = true">显示背景蒙层</Button>
      <Mask :visible="simpleVisible" @mask-click="simpleVisible = false" />
    </DemoBlock>

    <!-- 背景蒙层的颜色深度 -->
    <DemoBlock title="背景蒙层的颜色深度">
      <Space wrap>
        <Button @click="thinVisible = true">显示浅一些的背景蒙层</Button>
        <Button @click="thickVisible = true">显示深一些的背景蒙层</Button>
        <Button @click="customOpacityVisible = true">显示自定义透明度的背景蒙层</Button>
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

    <!-- 背景蒙层的颜色 -->
    <DemoBlock title="背景蒙层的颜色">
      <Space wrap>
        <Button @click="whiteVisible = true">显示白色的背景蒙层</Button>
        <Button @click="customColorVisible = true">显示自定义颜色的背景蒙层</Button>
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

    <!-- 自定义内容 -->
    <DemoBlock title="自定义内容">
      <Button @click="contentVisible = true">显示带内容的背景蒙层</Button>
      <Mask :visible="contentVisible" @mask-click="contentVisible = false">
        <div :class="$style.overlayContent">内容</div>
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

// 各种演示的可见性状态
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
