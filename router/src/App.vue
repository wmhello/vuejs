<template>
  <div id="app">
    <nav>
       <ul>
         <li> <router-link to="/">首页</router-link> </li>
         <li><router-link to="/list">列表</router-link> </li>
         <li><router-link to="/from">表单</router-link> </li>
       </ul>
    </nav>
    <div class="container">
      <router-view></router-view>
    </div>
     <div style="clear:both">

     </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'


export default {
  name: 'app',
  components: {
    HelloWorld,
  },
  data: function(){
    return {
      com: 'Index'
    }
  },
  methods: {
    tran(name){
      this.com = name
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 1200px;
  margin: 0 auto;
  height: 600px;
  border: 1px solid #000;
}

#app nav{
  width: 30%;
  float:left;
}
#app .container{
  margin-left: 370px;
}
nav .btn{
  margin-right: 20px;
}
nav ul li{
  line-height: 50px;
  height: 50px;
  background-color: #888;
  color: #fff;
}

nav ul li a{
  display:block;
  text-decoration: none;
}
nav ul li a:hover{
  color:#fff;
  background-color: rgba(0,0,255, 0.2);
}
</style>
