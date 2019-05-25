import Vue from 'vue'
import App from './App.vue'
// 引入和安装插件
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 引入组件（页面）
import Index from './view/Index.vue'
import From from './view/From.vue'
import List from './view/List.vue'
// 配置路由表
const routes = [
  {
    path: '/',
    component: Index
  },
  {
    path: '/from',
    component: From
  },
  {
    path: '/list',
    component: List
  }
]

Vue.config.productionTip = false
// 配置路由插件
const router = new VueRouter({
  routes
})

// 应用路由插件到项目
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
