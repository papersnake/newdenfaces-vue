import toastr from 'toastr'
import {
  UPDATEONLINEUSERS,
  GETCHARACTERCOUNTSUCCESS,
  GETCHARACTERCOUNTFAIL,
  UPDATEAJAXANIMATION } from '../types'

const state = {
  onlineUsers: 0,
  totalCharacters: 0,
  ajaxAnimationClass: ''
}

const mutations = {
  [UPDATEONLINEUSERS] (state, data) {
    state.onlineUsers = data.onlineUsers
  },
  [GETCHARACTERCOUNTSUCCESS] (state, data) {
    state.totalCharacters = data.count
  },
  [GETCHARACTERCOUNTFAIL] (sate, err) {
    toastr.error(err.message)
  },
  [UPDATEAJAXANIMATION] (state, className) {
    state.ajaxAnimationClass = className
  }
}

export default {
  state,
  mutations
}
