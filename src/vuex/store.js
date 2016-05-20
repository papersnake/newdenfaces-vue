import Vue from 'vue'
import Vuex from 'vuex'

import middlewares from './middlewares'
import FooterStore from './modules/FooterStore'
import NavbarStore from './modules/NavbarStore'
import HomeStore from './modules/HomeStore'
import AddCharacterStore from './modules/AddCharacterStore'
import CharacterStore from './modules/CharacterStore'
import CharacterListStore from './modules/CharacterListStore'
import StatsStore from './modules/StatsStore'

const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)
Vue.config.debug = debug
Vue.config.warnExpressionErrors = false

export default new Vuex.Store({
  modules: {
    NavbarStore,
    FooterStore,
    HomeStore,
    AddCharacterStore,
    CharacterStore,
    CharacterListStore,
    StatsStore
  },
  strict: debug,
  middlewares
})
