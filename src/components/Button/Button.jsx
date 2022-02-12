import './Button.css'
import PropTypes from 'prop-types'

export default function Button (
  { children, onClick, width } = { width: '100px' }
) {
  return (
    <button
      className='default-button'
      onClick={onClick}
      style={{ width: width }}
    >
      {children}
    </button>
  )
}
Button.propTypes = {
  children: PropTypes.elementType,
  onClick: PropTypes.func,
  width: PropTypes.string
}
