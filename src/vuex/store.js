import Vue from 'vue'
import Vuex from 'vuex'

import FooterStore from './modules/FooterStore'

const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)
Vue.config.debug = debug

export default new Vuex.Store({
  modules: {
    FooterStore
  }
})
