import React from 'react'
import PropTypes from 'prop-types'
import ProductCardImage from './image'
import ProductCardDescription from './description'
import './productCard.scss'

const ProductCard = props => {
  return (
    <div className='productCard'>
      <ProductCardImage image={props.product.image} thumb={props.product.thumb}/>
      <ProductCardDescription name={props.product.name} price={props.product.price} />
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumb: PropTypes.string.isRequired
  })
}

export default ProductCard
