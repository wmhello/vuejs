import Vue from 'vue'    // 引入vue.js库
import App from './App.vue'  // 引入页面文件
import router from './router' // 引入路由 （要么是目录index.js ）
                              // 要么有router.js或者router.vue
Vue.config.productionTip = false

router.beforeEach(function(to, from, next){
   if (to.meta.auth){
      let password = window.prompt('请输入访问密码')
       if (password === '123456'){
         next();   // 跳转到需要密码才能访问的页面
       } else {
         next({path: '/'})
       }
   } else {
     next();
   }

})

router.afterEach((to,from)=>{
  if (to.meta.title) {
    window.document.title = to.meta.title
  } else {
    window.document.title = "管理系统"
  }
})

router.afterEach( (to, from) => {
  console.log('全局后置钩子函数');
})

new Vue({    // 实例化vue.js项目，并且使用路由来控制程序的跳转
  router,
  render: h => h(App),
  el: '#app'
})
