import { getUserApi } from '../../api'
import { getUserFulfilled, getUserPending, getUserRejected } from './profile.actions'

export const getUser = () => dispatch => {
  dispatch(getUserPending())
  getUserApi()
    .then(res => {
      dispatch(getUserFulfilled(res))
    })
    .catch(err => {
      dispatch(getUserRejected(err))
    })
}
