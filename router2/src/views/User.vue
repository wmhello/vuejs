<template lang="html">
  <div class="">
    <h1>用户信息</h1>
    <h3>ID:{{$route.params.id}}</h3>
    <p>查询参数:{{$route.query.test}}</p>
    <h4>商品信息</h4>
    <p>订单编号:{{order_number}}</p>
    <p>订单日期:{{order_date}}</p>
    <p>订单备注：{{order_remark}}</p>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'user',
  data(){
    return {
      orders: [],
      baseUrl: 'https://www.easy-mock.com/mock/5cd03a89e97f9709cf42a9dc/test',
      order_number: null,
      order_date: null,
      order_remark: null
    }
  },
  created(){
  },
  mounted(){
    Axios({
      method: 'GET',
      url: this.baseUrl + '/orders'
    }).then( response => {
      let result = response.data.data
      this.orders = result
      let id = this.$route.params.id
      this.order_number = this.orders[id-1].order_number
      this.order_date = this.orders[id-1].order_date
      this.order_remark = this.orders[id-1].order_remark
    })
  },
  beforeRouteUpdate(to, from, next){
    console.log('组件复用 RouterUpdate');
    let id = to.params.id
    this.order_number = this.orders[id-1].order_number
    this.order_date = this.orders[id-1].order_date
    this.order_remark = this.orders[id-1].order_remark
    next()
  },
  beforeRouteEnter(to,from,next){
    console.log('组件进入之前--内部调用 beforeRouterEnter');
    next();
  },
  beforeRouteLeave(to,from,next){
    const answer = window.confirm('是否退出页面')
    if (answer) {
      next()
    } else {
      next(false)
    }
  }

}
</script>

<style lang="css" scoped>
</style>
