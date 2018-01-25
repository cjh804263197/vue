import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' //需要装file-loader之后配置{ test: /\.(eot|woff|ttf)$/, loader: 'file-loader' }

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
})
