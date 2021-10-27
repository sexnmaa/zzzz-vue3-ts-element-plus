<template>
  <div class="container">
    <el-form :rules="rules" :model="phone" label-width="65px">
      <el-form-item label="手机号" prop="name">
        <div style="width: 220px">
          <el-input v-model="phone.name"></el-input>
        </div>
      </el-form-item>
      <el-form-item label="验证码" prop="checknum">
        <div class="get-code">
          <span
            ><el-input v-model="phone.checknum" style="width: 100px"
          /></span>
          <el-button type="primary" class="get-btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { reactive } from 'vue-demi'
export default {
  setup() {
    const rules = {
      name: [
        {
          required: true,
          message: '请输入账号',
          trigger: 'blur'
        },
        {
          pattern: /^[a-z0-9]{5,10}$/,
          message: '用户名必须是5~10个字母或者数字~',
          trigger: 'blur'
        }
      ],
      checknum: [
        {
          required: true,
          message: '验证码是必传内容~',
          trigger: 'blur'
        },
        {
          pattern: /^[0-9]{6}$/,
          message: '验证码必须是6位数字~',
          trigger: 'blur'
        }
      ]
    }
    const phone = reactive({
      name: '',
      checknum: ''
    })
    return {
      rules,
      phone
    }
  }
}
</script>

<style lang="less" scoped>
.get-code {
  display: flex;
}

.get-btn {
  margin-left: 8px;
}
</style>
