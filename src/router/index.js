import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/shop',
      name: 'home',
      component: Home,
      alias: '/'
    },
    {
      path: '/basket',
      name: 'basket',
      component: () => import(/* webpackChunkName: "about" */ '@/pages/Basket.vue')
    }
  ]
})
