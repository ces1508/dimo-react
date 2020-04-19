import React from 'react'
import ProductCard from '../components/ProductCard'

const Product = {
  name: 'lomito mongolian',
  price: 19200,
  image: 'https://fusemall.s3.us-west-2.amazonaws.com/uploads/product/image_data/269/887852a6-b02a-4773-b795-d159bf11f491.jpeg',
  thumb: 'https://fusemall.s3.us-west-2.amazonaws.com/uploads/product/image_data/269/thumb_887852a6-b02a-4773-b795-d159bf11f491.jpeg'
}

const ProductWithTitleAsHtml = {
  ...Product,
  name: '<span>Bao Buns x3</span> Fish Tempura'
}

export default {
  title: 'ProductCard',
  component: ProductCard
}

export const Default = () => <ProductCard product={Product} />
export const NameHtml = () => <ProductCard product={ProductWithTitleAsHtml} />
