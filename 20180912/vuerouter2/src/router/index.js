import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/bjlemon/Home'
import Login from '@/bjlemon/Login'
import Registry from '@/bjlemon/Registry'

import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Router)
Vue.use(elementUi)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/login',
      name: 'Login',
      component: Login
    },{
      path: '/registry',
      name: 'Registry',
      component: Registry
    }
  ]
})
