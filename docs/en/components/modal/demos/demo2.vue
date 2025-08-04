<template>
  <div>
    <div class="demo-section-header">
      <div class="demo-section-title">内容区域</div>
    </div>
    <div class="demo-section-content">
      <Space direction="vertical" block>
        <Button
          block
          @click="showCustomContent"
        >
          自定义内容区域
        </Button>

        <Button
          block
          @click="showWithImage"
        >
          有标题和图片
        </Button>

        <Button
          block
          @click="showLongText"
        >
          超长文本
        </Button>
      </Space>
    </div>

    <div class="demo-section-header">
      <div class="demo-section-title">获取点击结果</div>
    </div>
    <div class="demo-section-content">
      <Space direction="vertical" block>
        <Button
          block
          @click="waitForAlert"
        >
          等待 alert 完成
        </Button>

        <div class="demo-description">
          alert 和 confirm 方法都会返回一个 Promise，你可以通过这个 Promise 实现等待弹窗关闭
        </div>

        <Divider />

        <Button
          block
          @click="waitForConfirm"
        >
          等待 confirm 完成
        </Button>

        <div class="demo-description">
          confirm 返回的是 Promise&lt;boolean&gt; 你可以通过这个 boolean 来判断用户是点击的确认还是取消
        </div>
      </Space>
    </div>

    <div class="demo-section-header">
      <div class="demo-section-title">声明式</div>
    </div>
    <div class="demo-section-content">
      <Space direction="vertical" block>
        <Button
          block
          @click="showDeclarative"
        >
          显示弹窗
        </Button>

        <div class="demo-description">
          你可以手动控制 visible 状态
        </div>
      </Space>
    </div>

    <!-- 声明式Modal -->
    <Modal
      v-model:visible="visible"
      content="人在天边月上明"
      :closeOnAction="true"
      :actions="[
        {
          key: 'confirm',
          text: '我知道了',
        },
      ]"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import Button from '../../../../../src/components/button'
import Space from '../../../../../src/components/space'
import Divider from '../../../../../src/components/divider'
import Modal from '../../../../../src/components/modal'

const visible = ref(false)

// 生成长文本
const generateLongText = () => {
  return `这是一段很长的文本内容，用来测试Modal组件在内容较多时的显示效果。这段文本会重复很多遍以模拟真实的长内容场景。

这是第二段内容。这段文本会重复很多遍以模拟真实的长内容场景。这段文本会重复很多遍以模拟真实的长内容场景。

这是第三段内容。这段文本会重复很多遍以模拟真实的长内容场景。这段文本会重复很多遍以模拟真实的长内容场景。这段文本会重复很多遍以模拟真实的长内容场景。

这是第四段内容。这段文本会重复很多遍以模拟真实的长内容场景。这段文本会重复很多遍以模拟真实的长内容场景。这段文本会重复很多遍以模拟真实的长内容场景。这段文本会重复很多遍以模拟真实的长内容场景。

这是第五段内容。这段文本会重复很多遍以模拟真实的长内容场景。这段文本会重复很多遍以模拟真实的长内容场景。这段文本会重复很多遍以模拟真实的长内容场景。这段文本会重复很多遍以模拟真实的长内容场景。这段文本会重复很多遍以模拟真实的长内容场景。

这是第六段内容。这段文本会重复很多遍以模拟真实的长内容场景。这段文本会重复很多遍以模拟真实的长内容场景。这段文本会重复很多遍以模拟真实的长内容场景。这段文本会重复很多遍以模拟真实的长内容场景。这段文本会重复很多遍以模拟真实的长内容场景。这段文本会重复很多遍以模拟真实的长内容场景。

这是第七段内容。这段文本会重复很多遍以模拟真实的长内容场景。这段文本会重复很多遍以模拟真实的长内容场景。这段文本会重复很多遍以模拟真实的长内容场景。这段文本会重复很多遍以模拟真实的长内容场景。这段文本会重复很多遍以模拟真实的长内容场景。这段文本会重复很多遍以模拟真实的长内容场景。这段文本会重复很多遍以模拟真实的长内容场景。`
}

const showCustomContent = () => {
  Modal.alert({
    header: h('div', {
      style: {
        fontSize: '64px',
        color: 'var(--adm-color-warning)',
        textAlign: 'center'
      }
    }, '⚠️'),
    title: '注意',
    content: h('div', {}, [
      h('div', {}, '请用手机拍摄手持工牌照，注意保持照片清晰'),
      h('div', {}, [
        '详情说明请查阅',
        h('a', { style: { color: 'var(--adm-color-primary)' } }, '操作指引')
      ])
    ]),
  })
}

const showWithImage = () => {
  Modal.alert({
    image: 'https://gw.alipayobjects.com/mdn/rms_efa86a/afts/img/A*SE7kRojatZ0AAAAAAAAAAAAAARQnAQ',
    title: '手持工牌照示例',
    content: '请用手机拍摄手持工牌照，注意保持照片清晰',
  })
}

const showLongText = () => {
  Modal.confirm({
    title: '提示',
    content: generateLongText(),
  })
}

const waitForAlert = async () => {
  await Modal.alert({
    content: '人在天边月上明',
  })
  console.log('已关闭')
}

const waitForConfirm = async () => {
  const result = await Modal.confirm({
    content: '人在天边月上明',
  })
  if (result) {
    console.log('点击了确认')
  } else {
    console.log('点击了取消')
  }
}

const showDeclarative = () => {
  visible.value = true
}
</script>

<style lang="less" scoped>
.demo-section-header {
  padding: 12px;
  border-bottom: 1px solid var(--adm-border-color);
  margin-top: 24px;

  &:first-child {
    margin-top: 0;
  }
}

.demo-section-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
}

.demo-section-content {
  padding: 12px;
}

.demo-description {
  font-size: 14px;
  color: var(--adm-color-text-secondary);
  margin: 8px 0;
  line-height: 1.5;
}
</style>
