import React from 'react'
import { Link } from 'react-router-dom'
import { path } from 'src/constants/path'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }
  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <h1>
          Something went wrong.
          <Link to={path.home}>Click To Home Page</Link>
        </h1>
      )
    }
    return this.props.children
  }
}
