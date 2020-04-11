import React from 'react'
import PropTypes from 'prop-types'
import ProgressiveImage from '../ProgressiveImage'

const ProductCardImage = props => (
  <div className='productCard__image'>
    <ProgressiveImage src={props.image} thumb={props.thumb} alt='' />
    {props.children}
  </div>
)

ProductCardImage.propTypes = {
  thumb: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default ProductCardImage
