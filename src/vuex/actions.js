import Api from '../api'
import * as types from './types'

export const getTopCharacters = ({ dispatch, state }) => {
  Api.getTopCharacters().then(response => {
    // console.log(data)
    dispatch(types.GETCHARACTERSUCCESS, response.data)
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
  console.log('winner: ' + winner)
  console.log('loser: ' + loser)
  Api.vote(winner, loser).then(response => {
    getTwoCharacters({ dispatch })
  }, err => {
    dispatch(types.VOTEFAIL, err)
  })
}
