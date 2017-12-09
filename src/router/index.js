import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  linkActiveClass: '',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component (resolve) {
        require(['@/components/index'], resolve)
      }
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
