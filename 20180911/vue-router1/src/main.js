// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//1.安装并引入vue-router组件
//npm install vue-router  或  yarn add vue-router
import VueRouter from 'vue-router'
//2.注册VueRouter组件
Vue.use(VueRouter);

//3.创建组件
import Home from './components/Home';
import News from './components/News';
import Content from './components/Content'
import Pcontent from './components/Pcontent'

//4.配置路由,VueRouter(options)中的option配置项
const routes=[
  {
    path:'/home',//访问路径
    component:Home//路径匹配的组件
  },{
    path:'/news',
    component:News,
  },{
    path:'/content/:id',//动态路由,参数以冒号开头
    component:Content
  },{
    path:'/pcontent',
    component:Pcontent
  },{
    path:'*',
    redirect:'/home'//默认跳转路由
  }
]
//5.实例化VueRouter
const router=new VueRouter({
  mode:'hash',//常用hash,history,默认hash
  routes//routes:routes的简写
})

Vue.config.productionTip = false

/* eslint-disable no-new */
//6.挂载路由
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
//7.在App.vue跟组件中配置路由切换容器<router-view></router-view>
//8.路由跳转<router-link to="/foo">Go to Foo</router-link>