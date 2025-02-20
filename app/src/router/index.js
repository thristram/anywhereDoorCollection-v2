import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Tunnel from '@/components/tunnel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/tunnel/:id',
      name: 'Tunnel',
      component: Tunnel
    }
  ]
})
