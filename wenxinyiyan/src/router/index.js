import { createRouter,createWebHistory } from "vue-router";
import homePage from "@/views/homePage.vue";
import userHome from "@/views/login/userHome.vue";
import index from "@/views/login/index.vue";
import Welcome from "@/views/login/welcome.vue";
import Error from "@/views/login/error.vue";
import Index2 from "@/views/alipay/index2.vue";
import Pay from "@/views/alipay/pay.vue";
import Query from "@/views/alipay/query.vue";
import Home from '../views/Home.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/homePage',component:homePage},
        {path:'/',component:userHome},
        {path:'/index',component:index},
        {path:'/welcome',component:Welcome},
        {path:'/index2',component:Index2},
        {path:'/pay',component:Pay},
        {path:'/query',component:Query},
        // gyt的登录
        {path: '/login',name: 'login',component: LoginView},
        {path: '/home',name: 'home',component: Home},
        {path: '/about',name: 'about',component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')}
    ]
})

export default router;