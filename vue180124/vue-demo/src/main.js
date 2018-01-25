import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routerConfig from '../router.config'

Vue.use(VueRouter);

const router = new VueRouter(routerConfig);

new Vue({
  router:router,
  el: '#app',
  render: h => h(App)
})
