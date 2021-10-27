import router from '@/router'
import request from '@/service'
import { Module } from 'vuex'
import { IRootState, ILoginState } from '../types'
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      roleList: []
    }
  },
  mutations: {
    saveToken(state, token: string) {
      state.token = token
    },
    saveUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    saveRoleList(state, roleList: any[]) {
      state.roleList = roleList
    }
  },
  actions: {
    async accountLoginAction(context, payload) {
      // 登录
      const loginRes: any = await request.post({
        url: '/login',
        data: payload
      })
      context.commit('saveToken', loginRes.data.token)
      localStorage.setItem('token', loginRes.data.token)
      // 请求用户信息
      const userRes: any = await request.get({
        url: '/users/' + loginRes.data.id
      })
      context.commit('saveUserInfo', userRes.data)
      localStorage.setItem('userInfo', JSON.stringify(userRes.data))
      // 获取权限列表
      const userList: any = await request.get({
        url: '/role/' + loginRes.data.id + '/menu'
      })
      context.commit('saveRoleList', userList.data)
      localStorage.setItem('roleList', JSON.stringify(userList.data))
      router.push('/index')
    },
    loadingLogin(context) {
      const tokenVal = localStorage.getItem('token')
      if (tokenVal) {
        context.commit('saveToken', tokenVal)
      }
      const userInfoVal = localStorage.getItem('userInfo')
      if (userInfoVal) {
        const userInfo = JSON.parse(userInfoVal)
        context.commit('saveUserInfo', userInfo)
      }
      const roleListVal = localStorage.getItem('roleList')
      if (roleListVal) {
        const roleList = JSON.parse(roleListVal)
        context.commit('saveRoleList', roleList)
      }
    }
  }
}

export default loginModule
