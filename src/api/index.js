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
  },
  vote: (winner, loser) => {
    return Vue.resource(host + '/api/characters').update({winner: winner, loser: loser})
  },
  addCharacter: (name, gender) => {
    return Vue.resource(host + '/api/characters').save({ name: name, gender: gender })
  },
  getCharacter: (characterId) => {
    return Vue.resource(host + '/api/characters/' + characterId).get()
  },
  report: (characterId) => {
    return Vue.resource(host + '/api/report').save({characterId: characterId})
  },
  getCharacters: (url, params) => {
    return Vue.resource(host + url).get(params)
  }
}
