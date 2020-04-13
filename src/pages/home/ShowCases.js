import React from 'react'
import PropTypes from 'prop-types'
import ShowCase from '../../components/ShowCase'

const restaurantSliderItems = [
  {
    alt: 'Lomito mongolian',
    image: 'https://staging.dimo.app/static/img/slider-section-toyExpress.a46a310.jpg',
    thumb: 'https://staging.dimo.app/static/img/slider-section-toyExpress.a46a310.jpg',
    handleClick: () => null
  },
  {
    alt: 'Tu Bebida favoria de quinto cocina',
    image: 'https://staging.dimo.app/static/img/slider-section-quintoCocina.72135ad.jpg',
    thumb: 'https://staging.dimo.app/static/img/slider-section-quintoCocina.72135ad.jpg',
    handleClick: () => null
  }
]

const productsSliderItems = [
  {
    alt: 'los mejores equipos deportivos',
    image: 'https://staging.dimo.app/static/img/slider-section-saRed.878eae1.jpg',
    thumb: 'https://staging.dimo.app/static/img/slider-section-saRed.878eae1.jpg',
    handleClick: () => null
  },
  {
    alt: 'Accesorios para tu mascota',
    image: 'https://staging.dimo.app/static/img/slider-section-petcasso.7948d63.jpg',
    thumb: 'https://staging.dimo.app/static/img/slider-section-petcasso.7948d63.jpg',
    handleClick: () => null
  }
]

const ShowCases = props => (
  <section className='home__showcases'>
    <ShowCase
      sliderProps={{
        items: restaurantSliderItems,
        width:'100%',
        resizeMethod:'cover',
          height: 200
        }}
        dividerProps={{
          title: 'Ir a Restaurantes',
          type: 'RESTAURANT'
        }}
      items={props.plates}
    />
    <ShowCase
      sliderProps={{
        items: productsSliderItems,
        width:'100%',
        resizeMethod:'cover',
          height: 200
        }}
        dividerProps={{
          title: 'Ir a Productos',
          type: 'PRODUCT'
        }}
      items={props.products}
    />
  </section>
)

ShowCases.propTypes = {
  plates: PropTypes.array.isRequired,
  products: PropTypes.array.isRequired
}

export default ShowCases
