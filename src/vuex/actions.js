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
