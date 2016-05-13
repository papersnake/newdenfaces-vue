import { GETTWOCHARACTERSSUCCESS, GETTWOCHARACTERSFAIL } from '../types'

const state = {
  characters: []
}

const mutations = {
  [GETTWOCHARACTERSSUCCESS] (state, data) {
    state.characters = data
  },

  [GETTWOCHARACTERSFAIL] (state, err) {
   // toastr.error(err)
  }
}

export default {
  state,
  mutations
}
