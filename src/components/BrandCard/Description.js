import React from 'react'
import PropTypes from 'prop-types'

const BrandCardDescription = ({ name, category, price, rating }) => (
  <div className='brandCard__description'>
    <p className='brandCard__name'>{name}</p>
    <p className='brandCard__category'>{category}</p>
    <p className='brandCard__price'><span>Desde</span>{price}</p>
  </div>
)

BrandCardDescription.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  rating: PropTypes.number.isRequired,
  distance: PropTypes.number
}

export default BrandCardDescription
