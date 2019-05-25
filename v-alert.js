Vue.component("v-alert", {
  template: "<div class='alert' :class='bindClass' v-if='isShow'>\
   <h2><slot name='title'></slot></h2>\
   <button v-if='close' class='alert-close' @click='onClose'>×</button>\
   <p><slot>内容</slot></p>\
   <footer><slot name='footer'></slot></footer>\
  </div>",
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
})
