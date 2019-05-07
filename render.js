Vue.component('anchor', {
  props: {
    level: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      default: ''
    }
  },
  render: function(h) {
    return h(
      'h' + this.level,
      [
        h(
          'a',
        {
          attrs: {
            href: '#' + this.title
          }
        },
        this.$slots.default
      )
      ]
    );
  }
})

Vue.component('ele', {
  render: function(h) {
    return h(
      'div',
      {
        attrs: {
          id: 'element'
        },
        'class': {
          show: this.show
        },
        on: {
          click: this.handleClick
        }
      },
      '我的内容'
    )
  },
  data: function() {
     return {
       show: true
     }
  },
  methods: {
    handleClick(){
      alert('abc')
    }
  }
})

Vue.component('ele1', {
  render: h => {
    if (this.show) {
      return h('p', 'show的值为true')
    } else {
      return h('p', 'show的值为false')
    }
  },
  props: {
    show: {
      type: Boolean
    }
  }
})

Vue.component('ele2', {
  render: h=>{
    var nodes = []
    console.log(this.list);
    for (var i =0; i< this.list.length; i++) {
      nodes.push(h('p', this.list[i]))
    }
    return h('div', nodes)
  },
  props: {
    list: {
      type: Array,
      default: [
        '《vue.js 实战》',
        '《Javascript 高级程序设计》',
        '《Javascript 语言精粹》',
      ]
    }
  }
})
var app = new Vue({
  el: '#app',
  data: {
    show: true,
    lists: [
      '《vue.js 实战》',
      '《Javascript 高级程序设计》',
      '《Javascript 语言精粹》',
    ]
  }
})
