import toastr from 'toastr'

import {
  GETCHARACTERLISTSUCCESS,
  GETCHARACTERLISTFAIL
} from '../types'

const state = {
  characters: []
}

const mutations = {
  [GETCHARACTERLISTSUCCESS] (state, data) {
    state.characters = data
  },

  [GETCHARACTERLISTFAIL] (state, err) {
    toastr.error(err.message)
  }
}

export default {
  state,
  mutations
}
