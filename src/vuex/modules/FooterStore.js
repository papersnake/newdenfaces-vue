import toastr from 'toastr'
import { GETCHARACTERSSUCCESS, GETCHARACTERSFAIL } from '../types'

const state = {
  characters: []
}

const mutations = {
  [GETCHARACTERSSUCCESS] (state, data) {
    state.characters = data.slice(0, 5)
  },

  [GETCHARACTERSFAIL] (state, err) {
    toastr.error(err.message)
  }
}

export default {
  state,
  mutations
}
