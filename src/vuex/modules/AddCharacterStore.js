import {
  ADDCHARACTERSUCCESS,
  ADDCHARACTERFAIL,
  UPDATENAME,
  UPDATEGENDER,
  INVALIDNAME,
  INVALIDGENDER
} from '../types'

const state = {
  name: '',
  gender: '',
  helpBlock: '',
  nameValidationState: '',
  genderValidationState: ''
}

const mutations = {
  [ADDCHARACTERSUCCESS] (state, data) {
    state.nameValidationState = 'has-success'
    state.helpBlock = data.message
  },

  [ADDCHARACTERFAIL] (state, err) {
    state.nameValidationState = 'has-error'
    state.helpBlock = err.message || err.data
  },

  [UPDATENAME] (state, event) {
    state.name = event.target.value
    state.nameValidationState = ''
    state.helpBlock = ''
  },

  [UPDATEGENDER] (state, event) {
    state.gender = event.target.value
    state.genderValidationState = ''
  },

  [INVALIDNAME] (state) {
    state.nameValidationState = 'has-error'
    state.helpBlock = 'Please enter a character name.'
  },

  [INVALIDGENDER] (state) {
    state.genderValidationState = 'has-error'
  }
}

export default {
  state,
  mutations
}
