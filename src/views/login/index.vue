<template>
  <div class="container">
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span
            ><el-icon>
              <avatar />
            </el-icon>
            账号登录</span
          >
        </template>
        <login-account ref="accountRef"></login-account>
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span
            ><el-icon>
              <iphone />
            </el-icon>
            手机登录</span
          >
        </template>
        <login-phone></login-phone>
      </el-tab-pane>
    </el-tabs>
    <div>
      <div class="password-do">
        <el-checkbox label="记住密码" v-model="isKeepPassword"></el-checkbox>
        <el-link type="primary">忘记密码</el-link>
      </div>
      <div style="width: 300px">
        <el-button type="primary" class="btn" @click="clickLogin"
          >立即登录</el-button
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Avatar, Iphone } from '@element-plus/icons'
import loginPhone from './cpns/login-phone.vue'
import loginAccount from './cpns/login-account.vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: {
    Avatar,
    Iphone,
    loginPhone,
    loginAccount
  },
  setup() {
    const isKeepPassword = ref(true)
    const accountRef = ref<InstanceType<typeof loginAccount>>()
    const currentTab = ref<string>('account')
    const clickLogin = () => {
      if (currentTab.value === 'account') {
        accountRef.value?.accountCheck()
      } else {
        console.log('手机号登录')
      }
    }
    return {
      isKeepPassword,
      clickLogin,
      accountRef,
      currentTab
    }
  }
})
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url('../../assets/images/login-bg.svg');
  .password-do {
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .btn {
    width: 100%;
  }
}
</style>
