<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button type="button" name="button" @click="info">测试</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  created(){
    console.log('我是首页组件的内容');
  },
  methods: {
    info(){
      console.log('我是组件内的提示信息');
    }
  }
}
</script>
