<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>首页</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'home',
  created () {
    axios({
      method: 'get',
      url: '/orders',
      baseURL: 'https://www.easy-mock.com/mock/5cd03a89e97f9709cf42a9dc/test/',
      withCredentials: true,
      params: {
        name: '张三'
      }
    }).then (res => {
      console.log('响应')
      console.log(res.data)
    }).catch (err => {
    })
  }
}
</script>
