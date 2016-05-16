import Vue from 'vue'
import Vuex from 'vuex'

import FooterStore from './modules/FooterStore'
import NavbarStore from './modules/NavbarStore'
import HomeStore from './modules/HomeStore'
import AddCharacterStore from './modules/AddCharacterStore'
import CharacterStore from './modules/CharacterStore'

const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)
Vue.config.debug = debug

export default new Vuex.Store({
  modules: {
    NavbarStore,
    FooterStore,
    HomeStore,
    AddCharacterStore,
    CharacterStore
  }
})
