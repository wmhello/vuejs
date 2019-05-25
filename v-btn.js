Vue.component("v-btn", {
  template: "<button class='btn' :class='bindClass' @click='onClick' @mouseenter='showBg' @mouseleave='showBg1'><slot></slot></button>",
  data: function() {
    return {
      backColor: ''
    }
  },
  props:{
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
    }
  },
  computed: {
    bindClass: function(){
      return {
        'btn-success': this.type === 'success'? true: false,
        'btn-default': this.type === 'default'? true: false,
        'btn-danger': this.type === 'danger'? true: false,
        'btn-warning': this.type === 'warning'? true: false,
        'btn-lg': this.size === 'lg'? true: false,
        'btn-sm': this.size === 'sm'? true: false,
        'btn-xs': this.size === 'xs'? true: false
      }
    }
  },
  methods: {
    onClick: function(){
      this.$emit('btn-click', 'test')
    },
    showBg: function(){
      this.backColor = this.type
      this.type = "danger"
    },
    showBg1: function() {
      this.type = this.backColor
    }
  }
})
