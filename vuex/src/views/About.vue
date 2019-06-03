<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>姓名{{name}}</p>
    <p>翻转{{reverseName}}</p>
  </div>
</template>
<script type="text/javascript">
 import {mapState} from 'vuex'
 import {mapGetters} from 'vuex'
  export default {
    computed: {
      ...mapState(['name']),
      ...mapGetters(['reverseName'])
    },
    data(){
      return {
        rName: 'abc'
      }
    },
  }
</script>
