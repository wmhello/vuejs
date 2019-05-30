<template lang="html">
  <div class="orders">
    <mescroll-vue ref="mescroll" :down="mescrollDown" :up="mescrollUp" @init="mescrollInit">
     <ul>
       <li v-for="item in dataList">{{item.order_number}}</li>
     </ul>
   </mescroll-vue>
  </div>
</template>

<script>
import MescrollVue from 'mescroll.js/mescroll.vue'
import axios from 'axios'

export default {
  name: 'order',
  components: {
    MescrollVue // 注册mescroll组件
  },
  data(){
    return {
      mescroll: null, // mescroll实例对象
      mescrollDown:{}, //下拉刷新的配置. (如果下拉刷新和上拉加载处理的逻辑是一样的,则mescrollDown可不用写了)
      mescrollUp: { // 上拉加载的配置.
        callback: this.upCallback, // 上拉回调,此处简写; 相当于 callback: function(page, mescroll) { }
        //以下是一些常用的配置,当然不写也可以的.
        page: {
          num: 0, //当前页 默认0,回调之前会加1; 即callback(page)会从1开始
          size: 10 //每页数据条数,默认10
        },
        htmlNodata: '<p class="upwarp-nodata">没有数据</p>',
        noMoreSize: 5,
        toTop: {
           //回到顶部按钮
          src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559144076961&di=e041f6fbc86f435ff98ae5891e738a55&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F17%2F02%2F20%2Ff5a00969dcd21fe5483fa7a4270fa1af.jpg", //图片路径,默认null,支持网络图
          offset: 1000 //列表滚动1000px才显示回到顶部按钮
        },
        empty: {
            //列表第一页无任何数据时,显示的空提示布局; 需配置warpId才显示
          warpId: "xxid", //父布局的id (1.3.5版本支持传入dom元素)
          icon: "./static/mescroll/mescroll-empty.png", //图标,默认null,支持网络图
          tip: "暂无相关数据~" //提示
        }
      },
      dataList: [] // 列表数据
     }
   },
   beforeRouteEnter (to, from, next) { // 如果没有配置回到顶部按钮或isBounce,则beforeRouteEnter不用写
     next(vm => {
        // 找到当前mescroll的ref,调用子组件mescroll-vue的beforeRouteEnter方法
       vm.$refs.mescroll && vm.$refs.mescroll.beforeRouteEnter() // 进入路由时,滚动到原来的列表位置,恢复回到顶部按钮和isBounce的配置
     })
   },
   beforeRouteLeave (to, from, next) { // 如果没有配置回到顶部按钮或isBounce,则beforeRouteLeave不用写
    // 找到当前mescroll的ref,调用子组件mescroll-vue的beforeRouteLeave方法
   this.$refs.mescroll && this.$refs.mescroll.beforeRouteLeave() // 退出路由时,记录列表滚动的位置,隐藏回到顶部按钮和isBounce的配置
   next()
 },
 methods: {
        // mescroll组件初始化的回调,可获取到mescroll对象
        mescrollInit (mescroll) {
          this.mescroll = mescroll  // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
        },
        // 上拉回调 page = {num:1, size:10}; num:当前页 ,默认从1开始; size:每页数据条数,默认10
        upCallback (page, mescroll) {
          // 联网请求
          page.num++
          axios.get('http://template.test/api/test', {
            params: {
              page: page.num, // 页码
              pageSize: page.size // 每页长度
            }
          }).then((response) => {
            // 请求的列表数据
            let arr = response.data.data
            // 如果是第一页需手动置空列表
            if (page.num === 1) this.dataList = []
            // 把请求到的数据添加到列表
            console.log();
            this.dataList = arr.concat(this.dataList)
            // 数据渲染成功后,隐藏下拉刷新的状态
            this.$nextTick(() => {
              mescroll.endSuccess(this.dataList.length)

            })
          }).catch((e) => {
            // 联网失败的回调,隐藏下拉刷新和上拉加载的状态;
            mescroll.endErr()
          })
        }
      }
}
</script>

<style lang="css" scoped>
</style>
