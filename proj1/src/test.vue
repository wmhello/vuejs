<template lang="html">
  <div class='alert' :class='bindClass' v-if='isShow'>
   <h2><slot name='title'></slot></h2>
   <button v-if='close' class='alert-close' @click='onClose'>×</button>
   <p><slot>内容</slot></p>
   <footer><slot name='footer'></slot></footer>
  </div>
</template>
<script>
export default {

  data: function() {
    return {
      isShow: true
    }
  },
  props:{
    type: {
      type: String,
      default: 'danger'
    },
    close:{
      type: Boolean
    }
  },
  computed: {
    bindClass: function() {
      return {
        'alert-danger': this.type === 'danger'? true: false,
        'alert-success': this.type === 'success' ? true: false,
        'alert-info': this.type === 'info'? true: false,
        'alert-warning': this.type === 'warning' ? true: false,
      }
    }
  },
  methods: {
    onClose: function(){
      this.isShow = false
      this.$emit('alert-close')
    }
  }
}
</script>

<style lang="css" scoped>
  .alert-close{
    position: absolute;
    right: 20px;
    top: 20px;
  }
  div.alert{
   position: relative;
   width: 70%;
   margin-top: 5px;
  }
  div.alert footer{
    margin-top: 5px;
  }
</style>
