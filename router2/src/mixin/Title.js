export default {
  created(){
    window.document.title = this.$route.meta.title
    console.log('我是混入的内容');
  },
  methods: {
    info(){
      console.log('我是混入内的提示信息');  
    }
  }
}
