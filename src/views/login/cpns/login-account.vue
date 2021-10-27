<template>
  <div class="container">
    <el-form :rules="rules" :model="account" label-width="65px" ref="formRef">
      <el-form-item label="账号" prop="name">
        <div style="width: 220px">
          <el-input v-model="account.name"></el-input>
        </div>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <div style="width: 220px">
          <el-input v-model="account.password" show-password></el-input>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { reactive, ref } from 'vue-demi'
import { useStore } from 'vuex'
// import { ElForm } from 'element-plus'
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
      password: [
        {
          required: true,
          message: '密码是必传内容~',
          trigger: 'blur'
        },
        {
          pattern: /^[a-z0-9]{3,}$/,
          message: '密码必须是3位以上的字母或者数字~',
          trigger: 'blur'
        }
      ]
    }
    const store = useStore()
    const formRef = ref()
    const accountCheck = () => {
      formRef.value?.validate((val) => {
        if (val) {
          console.log(val)
          console.log(account.name)
          localStorage.setItem(
            'userAccount',
            JSON.stringify({
              username: account.name,
              password: account.password
            })
          )
          store.dispatch('login/accountLoginAction', { ...account })
        } else {
          localStorage.removeItem('userAccount')
        }
      })
    }
    const account = reactive({
      name: JSON.parse(localStorage.getItem('userAccount'))?.username || '',
      password: JSON.parse(localStorage.getItem('userAccount'))?.password || ''
    })
    return {
      rules,
      account,
      accountCheck,
      formRef
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  //
}
</style>
