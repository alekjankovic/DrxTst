import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/index'

import App from './App.vue'
import Routes from './routes.js'

import { BootstrapVue } from 'bootstrap-vue'

Vue.use(VueRouter)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

var router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

console.log("Store", store)

new Vue({
  router: router,
  store: store,
  render: h => h(App),
}).$mount('#app')
