<template>
  <div>
    <div class="demo-section-header">
      <div class="demo-section-title">基础用法</div>
    </div>
    <div class="demo-section-content">
      <Input
        v-model="value"
        placeholder="请输入内容"
      />
    </div>

    <div class="demo-section-header">
      <div class="demo-section-title">带清除按钮</div>
    </div>
    <div class="demo-section-content">
      <Input 
        placeholder="请输入内容" 
        clearable 
      />
    </div>

    <div class="demo-section-header">
      <div class="demo-section-title">输入内容右对齐</div>
    </div>
    <div class="demo-section-content">
      <Input
        placeholder="请输入验证码"
        style="--text-align: right"
        clearable
      />
    </div>

    <div class="demo-section-header">
      <div class="demo-section-title">只读状态</div>
    </div>
    <div class="demo-section-content">
      <Input 
        placeholder="请输入内容" 
        model-value="只读模式的输入框" 
        readonly 
      />
    </div>

    <div class="demo-section-header">
      <div class="demo-section-title">禁用状态</div>
    </div>
    <div class="demo-section-content">
      <Input 
        placeholder="请输入内容" 
        model-value="被禁用的输入框" 
        disabled 
      />
    </div>

    <div class="demo-section-header">
      <div class="demo-section-title">查看密码</div>
    </div>
    <div class="demo-section-content">
      <div class="password-input">
        <Input
          class="password-field"
          placeholder="请输入密码"
          :type="visible ? 'text' : 'password'"
        />
        <div class="eye-icon" @click="visible = !visible">
          <svg v-if="!visible" viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
            <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"/>
          </svg>
          <svg v-else viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
            <path d="M942.2 486.2Q889.4 375.1 816.51 286.62L630.6 472.5Q624 453.4 612.62 436.42L227.54 821.5Q222.2 826.8 214.38 826.8t-13.16-5.3L165.8 786.1q-5.3-5.3-5.3-13.16t5.3-13.16L460.7 464.85Q454.1 445.78 454.1 424q0-97.2 78.8-176t176-176q20.78 0 39.85 6.58L943.6 83.73q5.3-5.3 13.16-5.3t13.16 5.3L1005.3 119q5.3 5.3 5.3 13.16t-5.3 13.16L548.58 601.95Q567.65 608.53 587.9 608.53q61.9 0 112-50.1t50.1-112q0-20.25-6.58-39.32L982.2 168.3Q1024 286.5 1024 512q0 225.5-81.8 362.7L942.2 486.2zM512 258c161.3 0 279.4 81.8 362.7 254-83.3 172.2-201.4 254-362.7 254s-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258z"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Input from '../../../../../src/components/input'

const value = ref('')
const visible = ref(false)
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

.password-input {
  position: relative;
  display: flex;
  align-items: center;
}

.password-field {
  flex: 1;
}

.eye-icon {
  position: absolute;
  right: 8px;
  color: var(--adm-color-light);
  cursor: pointer;
  padding: 4px;
  font-size: 18px;

  &:hover {
    color: var(--adm-color-primary);
  }
}
</style>