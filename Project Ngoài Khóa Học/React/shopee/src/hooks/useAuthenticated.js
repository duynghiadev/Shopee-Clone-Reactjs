import { useSelector } from 'react-redux'

export function useAuthenticated() {
  return useSelector(state => Boolean(state.auth.profile._id))
}
