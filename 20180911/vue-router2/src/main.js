// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import News from './components/News';
import Home from './components/Home';
import Content from './components/Content';

Vue.use(VueRouter);
Vue.use(VueResource);

const routes=[
  {
    path:'/home',
    component:Home,
  },{
    path:'/news',
    component:News,
  },{
    path:'/content/:aid',
    component:Content,
  },{
    path:'*',
    redirect:'/home',
  }
]

const aa=new VueRouter({
  mode:'hash',
  routes
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:aa,
  components: { App },
  template: '<App/>'
})
