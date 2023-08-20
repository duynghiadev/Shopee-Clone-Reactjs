import React from 'react'
import PropTypes from 'prop-types'

// class Layout extends React.Component {
//   render() {
//     console.log(this.props)
//     return <div className='layout'>{this.props.children}</div>
//   }
// }

function Layout({ children }) {
  return <div className='layout'>{children}</div>
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}

export default Layout
