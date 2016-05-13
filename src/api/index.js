'use strict'

import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const host = 'http://127.0.0.1:3000'

export default {
  getTopCharacters: () => {
    return Vue.resource(host + '/api/characters/top').get()
  },
  getCharacterCount: () => {
    return Vue.resource(host + '/api/characters/count').get()
  },
  getTwoCharacters: () => {
    return Vue.resource(host + '/api/characters').get()
  }
}
