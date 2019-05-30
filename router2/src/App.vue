<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
       <template v-for="(item,index) in ids">
         <router-link  :to="{name:'user', params:{id:item},query:{test:item}}">Orders{{item}}</router-link> |
      </template>
      <!-- <router-link to="/user/2">User2</router-link> | -->
      <router-link to="/about">About</router-link>
    </div>
    <div>
      <button type="button" name="button" @click="toIndex">跳转到首页</button>
      <button type="button" name="button" @click="toUser1">跳转到user1</button>
      <button type="button" name="button" @click="toUser2">跳转到user2</button>
    </div>
    <div class="container">
      <transition>
        <router-view/>
     </transition>
    </div>

  </div>
</template>

<script type="text/javascript">
  export default {
    data(){
      return {
         id: 4,
         ids: [1,2,3,4,5,6,7,8,9,10]
      }
    },
    methods: {
      toIndex(){
        // this.$router.push({name: 'home'});  // 路由名称
        this.$router.push('/');  // 路由地址
      },
      toUser1(){
        this.$router.push('/user/1')
      },
      toUser2(){
        this.$router.push('/user/2')
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
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.container{
  background-color: #ccc;
}
</style>
