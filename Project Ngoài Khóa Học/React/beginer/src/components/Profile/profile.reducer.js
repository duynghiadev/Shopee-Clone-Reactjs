import * as types from './profile.constants'
import produce from 'immer'

const initialState = {
  profile: {}
}

const profileReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.GET_USER_FULFILLED:
        draft.profile = action.payload
        break
      default:
        break
    }
  })

export default profileReducer
