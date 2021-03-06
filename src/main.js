// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import store from './store'
import mint from 'mint-ui'
import 'normalize.css'

Vue.use(mint)
/*
import {Button, Cell} from 'mint-ui'

Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)
*/

//  引入mockjs
require('./mock/index')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
