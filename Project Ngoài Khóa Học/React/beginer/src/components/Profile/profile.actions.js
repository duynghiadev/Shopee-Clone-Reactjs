import * as types from './profile.constants'

export const getUserPending = () => ({
  type: types.GET_USER_PENDING
})
export const getUserFulfilled = payload => ({
  type: types.GET_USER_FULFILLED,
  payload
})
export const getUserRejected = payload => ({
  type: types.GET_USER_REJECTED,
  payload
})
