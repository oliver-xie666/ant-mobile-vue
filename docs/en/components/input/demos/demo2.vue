<template>
  <div>
    <div class="demo-section-header">
      <div class="demo-section-title">数字输入</div>
    </div>
    <div class="demo-section-content">
      <Input
        v-model="numberValue"
        type="number"
        placeholder="请输入数字"
        :min="0"
        :max="100"
        clearable
      />
      <div class="demo-description">
        当前值: {{ numberValue }}，限制范围：0-100
      </div>
    </div>

    <div class="demo-section-header">
      <div class="demo-section-title">搜索输入</div>
    </div>
    <div class="demo-section-content">
      <Input
        v-model="searchValue"
        type="search"
        placeholder="搜索内容"
        clearable
        @enter-press="handleSearch"
      />
      <div class="demo-description">
        按回车键进行搜索
      </div>
    </div>

    <div class="demo-section-header">
      <div class="demo-section-title">手机号输入</div>
    </div>
    <div class="demo-section-content">
      <Input
        v-model="phoneValue"
        type="tel"
        inputmode="numeric"
        pattern="[0-9]*"
        placeholder="请输入手机号"
        :maxlength="11"
        clearable
      />
      <div class="demo-description">
        限制只能输入数字，最大长度11位
      </div>
    </div>

    <div class="demo-section-header">
      <div class="demo-section-title">邮箱输入</div>
    </div>
    <div class="demo-section-content">
      <Input
        v-model="emailValue"
        type="email"
        placeholder="请输入邮箱地址"
        autocomplete="email"
        clearable
      />
    </div>

    <div class="demo-section-header">
      <div class="demo-section-title">事件监听</div>
    </div>
    <div class="demo-section-content">
      <Input
        v-model="eventValue"
        placeholder="输入内容查看事件"
        clearable
        @focus="onFocus"
        @blur="onBlur"
        @clear="onClear"
        @enter-press="onEnterPress"
      />
      <div class="event-log">
        <div class="demo-description">事件日志:</div>
        <div v-for="(event, index) in events" :key="index" class="event-item">
          {{ event }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Input from '../../../../../src/components/input'

const numberValue = ref('')
const searchValue = ref('')
const phoneValue = ref('')
const emailValue = ref('')
const eventValue = ref('')
const events = ref<string[]>([])

const addEvent = (event: string) => {
  events.value.unshift(event)
  if (events.value.length > 5) {
    events.value = events.value.slice(0, 5)
  }
}

const handleSearch = () => {
  if (searchValue.value) {
    addEvent(`搜索: ${searchValue.value}`)
  }
}

const onFocus = () => {
  addEvent('输入框获得焦点')
}

const onBlur = () => {
  addEvent('输入框失去焦点')
}

const onClear = () => {
  addEvent('点击清除按钮')
}

const onEnterPress = () => {
  addEvent('按下回车键')
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
  margin-top: 8px;
  line-height: 1.5;
}

.event-log {
  margin-top: 12px;
}

.event-item {
  font-size: 12px;
  color: var(--adm-color-text-secondary);
  padding: 4px 8px;
  background: var(--adm-color-fill);
  border-radius: 4px;
  margin-bottom: 4px;
}
</style>