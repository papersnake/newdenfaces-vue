import Vue from 'vue'
import App from './App'
import Home from './components/Home'
import AddCharacter from './components/AddCharacter'
import Character from './components/Character'
import CharacterList from './components/Characterlist'
import Stats from './components/Stats'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import { updateAjaxAnimation } from './vuex/actions'
import store from './vuex/store'

Vue.use(VueResource)
Vue.use(VueRouter)

Vue.http.interceptors.push({
  request (request) {
    updateAjaxAnimation(store, 'fadeIn')
    return request
  },
  response (reponse) {
    setTimeout(() => {
      updateAjaxAnimation(store, 'fadeOut')
    }, 750)
    return reponse
  }
})

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
  },
  '/stats': {
    name: 'stats',
    component: Stats
  },
  '/:category': {
    component: CharacterList,
    subRoutes: {
      '/:race': {
        component: CharacterList,
        subRoutes: {
          '/:bloodline': {
            component: CharacterList
          }
        }
      }
    }
  }
})

router.redirect({
  '*': '/'
})

router.start(App, '#app')
