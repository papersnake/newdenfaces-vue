import toastr from 'toastr'
import { GETTWOCHARACTERSSUCCESS, GETTWOCHARACTERSFAIL, VOTEFAIL } from '../types'

const state = {
  characters: []
}

const mutations = {
  [GETTWOCHARACTERSSUCCESS] (state, data) {
    state.characters = data
  },

  [GETTWOCHARACTERSFAIL] (state, err) {
    toastr.error(err.message)
  },
  [VOTEFAIL] (state, err) {
    toastr.error(err.message)
  }
}

export default {
  state,
  mutations
}
