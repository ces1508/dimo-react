import React from 'react'
import PropTypes from 'prop-types'

const ArrowIcon = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="5.042"
    height="9.664"
    viewBox="0 0 5.042 9.664">
    <path
      className="a"
      fill={props.fill}
      stroke={props.stroke}
      d="M1366.624-36.387l4.5,4,4.5-4"
      transform="translate(36.76 1375.956) rotate(-90)"/>
  </svg>
)

ArrowIcon.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string
}

ArrowIcon.defaultProps = {
  fill: 'none',
  stroke: '#000'
}

export default ArrowIcon