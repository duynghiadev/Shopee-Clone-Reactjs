import React, { Fragment } from 'react'
import { useAuthenticated } from 'src/hooks/useAuthenticated'
import { Navigate } from 'react-router-dom'
import { path } from 'src/constants/path'
import PropTypes from 'prop-types'

export default function AuthenticatedGuard({ children }) {
  const authenticated = useAuthenticated()

  if (!authenticated) {
    return <Navigate to={path.login} />
  }

  return <Fragment>{children}</Fragment>
}
AuthenticatedGuard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}
