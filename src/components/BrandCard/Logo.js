import React from 'react'
import PropTypes from 'prop-types'
import ProgressiveImage from '../ProgressiveImage'

const BrandCardLogo = ({ image, thumb, resizeMethod }) => (
  <div className='brandCard__logo'>
    <ProgressiveImage
      thumb={thumb}
      src={image}
      alt=''
      resizeMethod={resizeMethod}
    />
  </div>
)

BrandCardLogo.propTypes = {
  thumb: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  resizeMethod: PropTypes.string
}

BrandCardLogo.defaultProps = {
  resizeMethod: 'cover'
}

export default BrandCardLogo
