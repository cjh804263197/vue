import Home from './components/Home.vue'
import News from './components/News.vue'
import NewDetail from './components/NewsDetail.vue'

export default{
    routes: [
        {
            path:'/home',
            component:Home
        },
        {
            path:'/news',
            component:News,
            children:[
                {
                    path:':title/:date',
                    component:NewDetail
                }
            ]
        },
        {
            path:'/',
            redirect: '/home'
        }
    ]
}