import Vue from 'vue'
import App from './App'
import Home from './components/Home'
import AddCharacter from './components/AddCharacter'
import Character from './components/Character'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

/* eslint-disable no-new */

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  history: true,
  saveScrollPosition: true
})

router.map({
  '/': {
    component: Home
  },
  '/add': {
    component: AddCharacter
  },
  '/character/:characterId': {
    name: 'character',
    component: Character
  }
})

router.redirect({
  '*': '/'
})

router.start(App, '#app')
