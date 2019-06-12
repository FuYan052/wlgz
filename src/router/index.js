import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Case from '@/pages/Case'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/case',
      name: 'Case',
      component: Case 
    },
  ]
})
