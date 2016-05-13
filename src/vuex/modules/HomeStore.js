import { GETTWOCHARACTERSSUCCESS, GETTWOCHARACTERSFAIL, VOTEFAIL } from '../types'

const state = {
  characters: []
}

const mutations = {
  [GETTWOCHARACTERSSUCCESS] (state, data) {
    state.characters = data
  },

  [GETTWOCHARACTERSFAIL] (state, err) {
   // toastr.error(err)
  },
  [VOTEFAIL] (state, err) {
    console.log(err)
  }
}

export default {
  state,
  mutations
}
