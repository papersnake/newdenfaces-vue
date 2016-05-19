import { includes } from 'lodash'
import toastr from 'toastr'

import {
  GETCHARACTERSUCCESS,
  GETCHARACTERFAIL,
  REPORTSUCCESS,
  REPORTFAIL
} from '../types'
const state = {
  characterId: 0,
  name: 'TBD',
  race: 'TBD',
  bloodline: 'TBD',
  gender: 'TBD',
  wins: 0,
  losses: 0,
  winLossRatio: 0,
  isReported: false
}

const mutations = {
  [GETCHARACTERSUCCESS] (state, data) {
    Object.assign(state, data)
    document.body.className = 'profile ' + state.race.toLowerCase()
    let localData = window.localStorage.getItem('NEF') ? JSON.parse(window.localStorage.getItem('NEF')) : {}
    let reports = localData.reports || []
    state.isReported = includes(reports, state.characterId)
    state.winLossRatio = ((state.wins / (state.wins + state.losses) * 100) || 0).toFixed(1)
  },

  [GETCHARACTERFAIL] (state, err) {
    toastr.error(err.message)
  },

  [REPORTSUCCESS] (state) {
    state.isReported = true
    let localData = window.localStorage.getItem('NEF') ? JSON.parse(window.localStorage.getItem('NEF')) : {}
    localData.reports = localData.reports || []
    localData.reports.push(state.characterId)
    window.localStorage.setItem('NEF', JSON.stringify(localData))
    toastr.warning('Character has been reported')
  },

  [REPORTFAIL] (state, err) {
    toastr.error(err.message)
  }
}

export default {
  state,
  mutations
}
