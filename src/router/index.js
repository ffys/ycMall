import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  linkActiveClass: '',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component (resolve) {
        require(['@/pages/Index'], resolve)
      }
    },
    {
      path: '/home',
      name: 'home',
      component (resolve) {
        require(['@/pages/Index'], resolve)
      }
    },
    {
      path: '/sort',
      name: 'sort',
      component (resolve) {
        require(['@/pages/Index'], resolve)
      }
    },
    {
      path: '/search',
      name: 'search',
      component (resolve) {
        require(['@/pages/Index'], resolve)
      }
    },
    {
      path: '/cart',
      name: 'cart',
      component (resolve) {
        require(['@/pages/Index'], resolve)
      }
    },
    {
      path: '/user',
      name: 'user',
      component (resolve) {
        require(['@/pages/Index'], resolve)
      }
    }
  ]
})
