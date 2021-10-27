import { createStore } from 'vuex'
import { IRootState } from './types'
import login from './modules/login'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'aaa',
      age: 18
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login
  }
})
export function setupStore() {
  store.dispatch('login/loadingLogin')
}

export default store
