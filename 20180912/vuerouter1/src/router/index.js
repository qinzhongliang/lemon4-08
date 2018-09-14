//导入vue
import Vue from 'vue'
//导入vue的路由插件模块
import Router from 'vue-router'
//导入组件
import HomePage from '@/views/Home'
import LoginPage from '@/views/Login'
import RegistryPage from '@/views/Registry'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//注册路由插件
Vue.use(Router)
Vue.use(elementUi)
//实例化并配置路由
export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',//给当前匹配的路由定义一个名称
      component: HomePage
    },
    {
      path: '/login',
      name: 'LoginPage',//给当前匹配的路由定义一个名称
      component: LoginPage
    },{
      path: '/registry',
      name: 'RegistryPage',//给当前匹配的路由定义一个名称
      component: RegistryPage
    }
  ]
})
