import Api from '../api'
import * as types from './types'

export const getTopCharacters = ({ dispatch, state }) => {
  Api.getTopCharacters().then(response => {
    // console.log(data)
    dispatch(types.GETCHARACTERSSUCCESS, response.data)
  }, err => {
    console.log(err)
    dispatch(types.GETCHARACTERSFAIL, err)
  })
}

export const updateOnlineUsers = ({ dispatch, state }, data) => {
  dispatch(types.UPDATEONLINEUSERS, data)
}

export const getCharacterCount = ({ dispatch, state }) => {
  Api.getCharacterCount().then(response => {
    dispatch(types.GETCHARACTERCOUNTSUCCESS, response.data)
  }, err => {
    dispatch(types.GETCHARACTERCOUNTFAIL, err)
  })
}

export const getTwoCharacters = ({ dispatch, state }) => {
  Api.getTwoCharacters().then(response => {
    dispatch(types.GETTWOCHARACTERSSUCCESS, response.data)
  }, err => {
    dispatch(types.GETTWOCHARACTERSFAIL, err)
  })
}

export const vote = ({ dispatch }, winner, loser) => {
  Api.vote(winner, loser).then(response => {
    getTwoCharacters({ dispatch })
  }, err => {
    dispatch(types.VOTEFAIL, err)
  })
}

export const addCharacter = ({ dispatch }, name, gender) => {
  Api.addCharacter(name, gender).then(response => {
    dispatch(types.ADDCHARACTERSUCCESS, response.data)
  }, err => {
    dispatch(types.ADDCHARACTERFAIL, err)
  })
}

export const updateName = ({ dispatch }, event) => {
  dispatch(types.UPDATENAME, event)
}

export const updateGender = ({ dispatch }, event) => {
  dispatch(types.UPDATEGENDER, event)
}
export const invalidName = ({ dispatch }) => {
  dispatch(types.INVALIDNAME)
}

export const invalidGender = ({ dispatch }) => {
  dispatch(types.INVALIDGENDER)
}

export const getCharacter = ({ dispatch }, characterId) => {
  Api.getCharacter(characterId).then(response => {
    dispatch(types.GETCHARACTERSUCCESS, response.data)
  }, err => {
    dispatch(types.GETCHARACTERFAIL, err)
  })
}

export const report = ({ dispatch }, characterId) => {
  Api.report(characterId).then(response => {
    dispatch(types.REPORTSUCCESS)
  }, err => {
    dispatch(types.REPORTFAIL, err)
  })
}

export const getCharacters = ({ dispatch }, payload) => {
  let url = '/api/characters/top'

  let params = {
    race: payload.race,
    bloodline: payload.bloodline
  }

  if (payload.category === 'female') {
    params.gender = 'female'
  } else if (payload.category === 'male') {
    params.gender = 'male'
  }

  if (payload.category === 'shame') {
    url = '/api/characters/shame'
  }

  Api.getCharacters(url, params).then(response => {
    dispatch(types.GETCHARACTERLISTSUCCESS, response.data)
  }, err => {
    dispatch(types.GETCHARACTERLISTFAIL, err)
  })
}
