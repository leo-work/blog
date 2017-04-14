// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import axios from 'axios'

Vue.prototype.$http = axios.create({
  baseURL: 'http://127.0.0.1:9001'
})
// axios.defaults.baseURL = 'https://api.example.com'
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
