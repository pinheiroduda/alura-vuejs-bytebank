import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import http from '@/http'

Vue.config.productionTip = false

Vue.prototype.$http = http

new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount('#app')
