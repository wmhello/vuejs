<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <el-button type="success" plain icon="el-icon-cloudy">保存</el-button>
    <br>
    <div class="container">
      <el-row>
        <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
      </el-row>
      <br>
      <el-row>
        <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
      </el-row>
        <br>
      <el-row :gutter="20">
        <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'home',
}
</script>

<style media="screen">
  .bg-purple-dark{
    background-color: purple
  }
  .bg-purple-light{
    background-color: rgba(255,0,255,0.1)
  }
  .grid-content{
    height: 20px;
  }
  .container{
    width: 1200px;
    margin: 0 auto;
  }
  .bg-purple{
    background-color: purple;
  }
</style>
