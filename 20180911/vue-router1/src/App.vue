<template>
  <div id="app">
    <router-link to="/home">首页</router-link>
    <router-link to="/news">新闻</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
/*
  路由传值:动态路由
  
  1.配置动态路由
  routes:[
    //动态路径参数,以冒号开头
    {path:'/news/:id',component:News}
  ] 

  2.获取动态路由传递过来的值
  this.$route.params获取动态路由的值

*/

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>

</style>
