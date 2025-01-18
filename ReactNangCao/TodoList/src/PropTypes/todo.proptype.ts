import PropTypes from 'prop-types'

export const TodoTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired
}).isRequired
