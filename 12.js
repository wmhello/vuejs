var app = new Vue({
  el: '#app',
  data: { // 以数据为中心， 数据改变，界面就跟随改变
  },
  methods: {
    clearData: function() {
      console.log('警告框关闭后，我执行清除操作');
    },
    save: function() {
      axios({
        method: 'GET',
        url: 'http://restful.test/api/test',
        responseType: 'blob'
      }).then(function(){
        let blob = new Blob([res.data], {
          type: "application/vnd.ms-excel"
        });
        let url = window.URL.createObjectURL(blob);
        let link = document.createElement('a')
        a.href = url
        a.download = 'abcdef.xls'
        a.click();
      }).catch(err => {
        console.log(err)
      })
      console.log('数据保存');
    },
    cancel: function() {
      console.log('数据取消')
    }
  }
})
