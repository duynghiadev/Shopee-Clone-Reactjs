import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { unauthorize } from 'src/pages/Auth/auth.slice'
import { path } from 'src/constants/path'
import { useAuthenticated } from 'src/hooks/useAuthenticated'
import { getCartPurchases } from 'src/pages/Cart/cart.slice'

export default function Authorization() {
  const status = useSelector(state => state.app.status)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const authenticated = useAuthenticated()

  useEffect(() => {
    if (status === 401) {
      dispatch(unauthorize())
      navigate(path.login)
    }
  }, [dispatch, status, navigate])

  useEffect(() => {
    if (authenticated) {
      dispatch(getCartPurchases())
    }
  }, [dispatch, authenticated])

  return null
}
