import React from 'react'
import numeral from 'numeral'
import PropTypes from 'prop-types'

const ProductCardDescription = props => (
  <div className='productCard__description'>
    <p className='productCard__name' dangerouslySetInnerHTML={{ __html: props.name }} />
    <p className='productCard__price'>{numeral(props.price).format('0,0').replace(',', '.')}</p>
  </div>
)

ProductCardDescription.propTypes = {
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
}

export default ProductCardDescription
