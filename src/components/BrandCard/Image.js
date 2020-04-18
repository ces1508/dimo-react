import React from 'react'
import PropTypes from 'prop-types'
import ProgressiveImage from '../ProgressiveImage'

const BrandCardImage = props => (
  <div className='brandCard__image'>
    <ProgressiveImage src={props.image} thumb={props.thumb} resizeMethod='cover' alt='' />
  </div>
)

BrandCardImage.propTypes = {
  thumb: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default BrandCardImage
