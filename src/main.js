import Vue from 'vue'
import App from './App'
import Home from './components/Home'
import Hello from './components/Hello'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

/* eslint-disable no-new */

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter()

router.map({
  '/': {
    component: Home
  },
  '/hello': {
    component: Hello
  }
})

router.redirect({
  '*': '/'
})

router.start(App, '#app')
