import { createApp } from 'vue'
import 'normalize.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import { setupStore } from '@/store'
import '@/service/index'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import request from '@/service/index'
import '@/assets/css/base.less'
// request
//   .get({
//     url: '/home/multidata'
//   })
//   .then((res) => {
//     console.log(res)
//   })
setupStore()

createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
