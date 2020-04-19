import React from 'react'
import PropTypes from 'prop-types'
import BrandCardContainer from './Card'
import BrandCardImage from './Image'
import BrandCardLogo from './Logo'
import BrandCardDescription from './Description'
import './brandCard.scss'

const BrandCard = props => {
  const { name, image, thumb, price, logo, logoThumb, distance, rating, category } = props.brand
  return (
    <BrandCardContainer>
      <BrandCardImage image={image} thumb={thumb} />
      <BrandCardLogo image={logo} thumb={logoThumb} />
      <BrandCardDescription
        name={name}
        category={category}
        price={price}
        rating={rating}
        distance={distance}
      />
    </BrandCardContainer>
  )
}

BrandCard.propTypes = {
  brand: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumb: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    logoThumb: PropTypes.string.isRequired
  })
}

BrandCard.defaultProps = {
  distance: 23,
  rating: 4
}

export default BrandCard
