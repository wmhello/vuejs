<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <input type="text" v-model="name" placeholder="请输入姓名">
    <button type="button" name="button" @click="save">保存名称</button>
    <button type="button" name="button" @click="getData">获取数据</button>
    <p>获取的编号{{number}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {mapState} from 'vuex'
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  computed: {
    ...mapState(['number'])
  },
  data() {
    return {
      name: null
    }
  },
  methods: {
    save(){
      this.$store.commit('setName', this.name)
      this.$router.push('/about')
    },
    getData(){
      this.$store.dispatch('getNumber');
    }
  }
}
</script>
