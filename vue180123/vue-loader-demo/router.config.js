//专门配置路由用的
//引入模块
import Home from './compontens/Home.vue'
import News from './compontens/News.vue'

import Login from './compontens/Login.vue'
import Register from './compontens/Register.vue'

export default{
        'home':{
            component:Home,
            subRoutes:{
                'login/:id':{
                    component:Login
                },
                'register':{
                    component:Register
                }
            }
        },
        'news':{
            component:News
        }
}