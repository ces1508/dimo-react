import React from 'react'
import PropTypes from 'prop-types'
import ProgressiveImage from '../ProgressiveImage'

const BrandCardLogo = ({ image, thumb }) => (
  <div className='brandCard__logo'>
    <ProgressiveImage
      thumb={thumb}
      src={image}
      alt=''
    />
  </div>
)

BrandCardLogo.propTypes = {
  thumb: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default BrandCardLogo
