import { GETCHARACTERSUCCESS, GETCHARACTERSFAIL } from '../types'

const state = {
  characters: []
}

const mutations = {
  [GETCHARACTERSUCCESS] (state, data) {
    state.characters = data.slice(0, 5)
  },

  [GETCHARACTERSFAIL] (state, err) {
   // toastr.error(err)
  }
}

export default {
  state,
  mutations
}
