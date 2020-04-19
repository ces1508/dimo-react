import React from 'react'
import PropTypes from 'prop-types'
import ProductCard from '../ProductCard'
import AppSlider from '../AppSlider'
import Divider from './Divider'
import HomeSectionDivider from '../HomeSectionDivider'
import './showCase.scss'

const ShowCase = props => {
  const { dividerProps, sliderProps, items } = props
  return (
    <section className='showCase'>
      <AppSlider {...sliderProps} />
      <Divider dividerProps={dividerProps} />
      <div className='showCase__container_products'>
        {items.map(item => <ProductCard product={item} key={item.name} />)}
      </div>
      <Divider dividerProps={dividerProps} />
    </section>
  )
}

ShowCase.propTypes = {
  dividerProps: PropTypes.instanceOf(HomeSectionDivider).isRequired,
  sliderProps: PropTypes.instanceOf(AppSlider).isRequired,
  items: PropTypes.array.isRequired
}

export default ShowCase
