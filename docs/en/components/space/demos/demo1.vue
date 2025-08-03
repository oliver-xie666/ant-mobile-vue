<template>
  <div>
    <DemoBlock title="水平方向的间距">
      <Space>
        <Button>按钮1</Button>
        <Button>按钮2</Button>
        <Button>按钮3</Button>
      </Space>
    </DemoBlock>

    <DemoBlock title="换行">
      <Space wrap>
        <Button>按钮1</Button>
        <Button>按钮2</Button>
        <Button>按钮3</Button>
        <Button>按钮4</Button>
        <Button>按钮5</Button>
        <Button>按钮6</Button>
        <Button>按钮7</Button>
        <Button>按钮8</Button>
        <Button>按钮9</Button>
        <Button>按钮10</Button>
        <Button>按钮11</Button>
      </Space>
    </DemoBlock>

    <DemoBlock title="垂直方向的间距">
      <Space direction="vertical">
        <Button>按钮1</Button>
        <Button>按钮2</Button>
        <Button>按钮3</Button>
      </Space>
    </DemoBlock>

    <DemoBlock title="自定义间距大小">
      <Space class="custom-gap">
        <Button>按钮1</Button>
        <Button>按钮2</Button>
        <Button>按钮3</Button>
      </Space>
    </DemoBlock>

    <DemoBlock title="渲染为块级元素">
      <Space direction="vertical" block>
        <Button>按钮1</Button>
        <Button>按钮2</Button>
        <Button>按钮3</Button>
      </Space>
    </DemoBlock>

    <DemoBlock title="主轴对齐方式">
      <Space justify="center" block>
        <Button>1</Button>
        <Button>
          2<br />2
        </Button>
        <Button>
          3<br />3<br />3
        </Button>
      </Space>
    </DemoBlock>

    <DemoBlock title="交叉轴对齐方式">
      <Space align="end">
        <Button>1</Button>
        <Button>
          2<br />2
        </Button>
        <Button>
          3<br />3<br />3
        </Button>
      </Space>
    </DemoBlock>
  </div>
</template>

<script setup lang="ts">
import Space from '../../../../../src/components/space/Space.vue'
import Button from '../../../../../src/components/button/Button.vue'
// 移除DemoBlock导入
</script>

<style scoped>
.custom-gap {
  --gap: 24px;
}
</style>
