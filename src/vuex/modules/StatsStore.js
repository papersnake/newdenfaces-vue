import toastr from 'toastr'
import { GETSTATSSUCCESS, GETSTATSFAIL } from '../types'

const state = {
  leadingRace: {race: 'Unknown', count: 0},
  leadingBloodline: {bloodline: 'Unknown', count: 0},
  amarrCount: 0,
  caldariCount: 0,
  gallenteCount: 0,
  minmatarCount: 0,
  totalVotes: 0,
  femaleCount: 0,
  maleCount: 0,
  totalCount: 0
}

const mutations = {
  [GETSTATSSUCCESS] (state, data) {
    Object.assign(state, data)
  },

  [GETSTATSFAIL] (state, err) {
    toastr.error(err.message)
  }
}

export default {
  state,
  mutations
}
