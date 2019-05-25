<template>
  <div id="app">
    <h1>vue项目</h1>
    <HelloWorld msg="Hello  vue.js"/>
    <Alert @click.native="sendInfo"></Alert>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'  // ES6的语法  import xxx from   'yyy'
  import Alert from './components/Alert.vue'
  import Echo from 'laravel-echo'
  import Axios from 'axios'

  export default {
    name: 'app',
    components: {
      HelloWorld,    // 注册   es6的对象书写方式 如果对象中属性名和属性值相同，可以省略属性名
      Alert
    },
    mounted(){
    //   window.Echo.channel('im')
    // .listen('ExampleEvent', (e) => {
    //     console.log(e);
    // });
  },
  methods: {
    sendInfo() {
       // Axios({
       //   url: 'http://restful.test/ship?id=300'
       // })
    }
  }
  }

//   appId: 9013266a195f279b
// key: 25509ec5e8334c010b5c2932c0279e95
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
