import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routerConfig from './router.config'

Vue.use(VueRouter);


//配置路由
const router=new VueRouter();

router.map(routerConfig);

//设置默认跳转
router.redirect({
    '/':'home'
});

//开启
router.start(App,'#box');