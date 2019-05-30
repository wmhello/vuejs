import Vue from 'vue'  // 导入vue.js库
import Router from 'vue-router' // 进入vue-router插件，管理内容页面的跳转
import Home from './views/Home.vue' // 显示引入页面，同步引入页面

Vue.use(Router)  // 安装插件

let routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    alias: '/index',
    meta: {
      title: '首页',
      auth: false
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //   动态加载  异步引入
    component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    beforeEnter(to,from,next){
      console.log('关于页面的路由钩子--进入之前beforeEnter');
      next()
    },
    meta: {
      title: '关于页面',
      auth: false
    }
  },
  {
    path: '/user/:id',
    name: 'user',
    component: () => import( './views/User.vue'),
    beforeEnter(to, from ,next){
      console.log('进入Users组件之前--beforeEnter');
      next();
    },
    meta: {
      auth: true
    }
  },
  {
    path: '/order',
    name: 'order',
    component: ()=> import('./views/order.vue'),
    meta:  {
      auth: true
    }
  }
]

export default new Router({
  routes: routes
})
