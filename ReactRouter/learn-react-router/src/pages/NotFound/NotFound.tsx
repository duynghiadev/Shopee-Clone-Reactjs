import { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/', {
        state: 'Redirect from NotFound'
      })
    }, 2000)
  }, [navigate])

  return <div>Not Fount</div>
}
