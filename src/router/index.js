import Vue from 'vue'
import Router from 'vue-router'
import CP from '../components/index.js'

import PG from '../pages/index.js'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: PG.demo
    },
    {
      path: '/demo',
      component: CP.democom
    }
  ]
})
