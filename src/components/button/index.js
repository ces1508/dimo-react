import React from 'react'
import PropTypes from 'prop-types'
import './button.scss'

const Button = props => {
  const baseClass = 'dimo_button'
  let className = `${baseClass} `
  if (props.type === 'success') className += `${baseClass}--success`
  if (props.type === 'restaurant') className += `${baseClass}--restaurant`
  if (props.type === 'product') className += `${baseClass}--product`
  if (props.type === 'plate') className += `${baseClass}--plate`
  if (props.disable) className += ` ${baseClass}--disable`
  return (
    <button className={className} onClick={props.onClick}>
      {props.text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disable: PropTypes.bool,
  type: PropTypes.oneOf(['success', 'restaurant', 'product', 'plate', 'normal']).isRequired
}

Button.defaultProps = {
  title: '',
  onClick: () => console.warn('send props onClick to override button click'),
  type: 'normal',
  disable: false
}

export default Button
