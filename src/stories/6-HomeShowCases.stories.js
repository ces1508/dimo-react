import React from 'react'
import ShowCase from '../components/ShowCase'

export default  {
  title: 'Home Show Case',
  component: ShowCase
}

const product = {
  name: 'lomito mongolian',
  price: 19200,
  image: 'https://fusemall.s3.us-west-2.amazonaws.com/uploads/product/image_data/269/887852a6-b02a-4773-b795-d159bf11f491.jpeg',
  thumb: 'https://fusemall.s3.us-west-2.amazonaws.com/uploads/product/image_data/269/thumb_887852a6-b02a-4773-b795-d159bf11f491.jpeg'
}
let products = []
for (let i = 0; i < 12; i++) {
  products.push({
    ...product,
    name: `${product.name + i}`,
    price: `${parseInt(product.price + (i * 1000))}`
  })
}

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

export const RestaurantShowCase = () => (
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
    items={products}
  />
)

export const ProductsShowCase = () => (
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
    items={products}
  />
)