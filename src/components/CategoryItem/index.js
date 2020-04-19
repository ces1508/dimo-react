import React from 'react'
import PropTypes from 'prop-types'
import './categoryItem.scss'

const CategoryItem = props => {
  const { category, type, handleClick, active } = props
  let baseClass = 'category_item'
  const isRestaurant = type === 'RESTAURANT'
  if (!isRestaurant) baseClass += ' category_item--product'
  if (isRestaurant) baseClass += ' category_item--restaurant'
  if (active && isRestaurant) baseClass += ' category_item--active category_item--active_restaurant'
  if (active && !isRestaurant) baseClass += ' category_item--active category_item--active_product'
  return (
    <div className={baseClass} onClick={handleClick}>
      <img
        className='category_item__image'
        src={category.image}
        alt={category.name}
      />
      <div className='category_item__description '>
        <p className='category_item__name'>{category.name}</p>
        {/* <p className='category_item__quantity'>{quantity}</p> */}
      </div>
    </div>
  )
}

CategoryItem.propTypes = {
  category: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
  }).isRequired,
  active: PropTypes.bool,
  handleClick: PropTypes.func,
  type: PropTypes.oneOf(['PRODUCT', 'RESTAURANT']).isRequired
}

CategoryItem.defaultProps = {
  type: 'PRODUCT'
}

export default CategoryItem
