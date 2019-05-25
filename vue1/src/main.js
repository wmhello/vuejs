import Vue from 'vue'  // import 导入依赖的插件 vue.js
import App from './App.vue'  // 引入组件
import Echo from 'laravel-echo'
Vue.config.productionTip = false

window.io = require('socket.io-client');
window.Echo = new Echo({
    broadcaster: 'socket.io',
    host: 'http://localhost:6001'
});
window.Echo.channel(`orderStatus`) // 广播频道名称
    .listen('OrderShipped', (e) => { // 消息名称
        console.log(e); // 收到消息进行的操作，参数 e 为所携带的数据
});
new Vue({
  render: h => h(App),
  el: "#app"
})
