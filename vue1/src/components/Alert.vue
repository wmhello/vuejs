<template lang="html">
  <section class="alert">
    <h2>提示--Alert</h2>
    <button type="button" name="button" @click="test"> 发送事件</button>
  </section>
</template>

<script>
  export default {
    name: 'alert',
    methods: {
      test(){
      }
    }
  }
</script>

<style lang="css" scoped>
  .alert{
    width: 70%;
    margin: 0 auto;
    broder: 1px solid #55f;
    height: 200px;
  }
</style>
