<template>
  <div id="app">
    <header class="header">
      <router-link to="/home">首页</router-link>
      <router-link to="/news">新闻</router-link>
    </header>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style lang="less">
#app{
  width:80%;
  margin:0 auto;
  .header{
    height: 44px;
    line-height: 44px;
    text-align: center;
    background: #000;
    color: #fff;
    a{
      color: #fff;
      padding: 0 20px;
    }
  }
}
</style>
