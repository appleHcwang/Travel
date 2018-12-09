import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import List from '@/pages/list/List.vue'
import City from '@/pages/city/City.vue'
import Home from '@/pages/home/Home.vue'
Vue.use(Router)
// 路由的配置项
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/city',
      name: 'City',
      component: City
    }]
})
