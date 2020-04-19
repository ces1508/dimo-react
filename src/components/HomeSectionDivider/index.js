import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as ProductsIcon } from '../../assets/img/icons/productos-icon.svg'
import { ReactComponent as RestaurantsIcon } from '../../assets/img/icons/restaurantes-icon.svg'
import ArrowIcon from '../ArrowIcon'
import './homeSectionDivider.scss'

const HomeSectionDivider = props => {
  const [useCustomLeftIcon, setuseCustomLeftIcon] = useState(false)
  const [useCustomRigthIcon, setuseCustomRigthIcon] = useState(false)
  let Icon = RestaurantsIcon
  const IsRestaurant = props.type === 'RESTAURANT'
  if (!IsRestaurant) Icon = ProductsIcon

  useEffect(() => {
    if (props.customLeftIcon) setuseCustomLeftIcon(true)
    if (props.customRightIcon) setuseCustomRigthIcon(true)
  }, [props.customLeftIcon, props.customRightIcon])

  return (
    <div
      className={
        `home_section_divider__main ${props.type === 'RESTAURANT'
        ? 'home_section_divider__main--restaurants'
        : 'home_section_divider__main--products'}`
      }
    >
      {!useCustomLeftIcon ? <Icon className='home_section_divider__left_icon' /> : <img src={props.customLeftIcon} alt='' className='http://localhost:9009/?path=/story/homesectiondivider--type-restaurant' />}
      <h1 className='home_section_divider__title'>{props.title}</h1>
      {!useCustomRigthIcon ? <ArrowIcon stroke={IsRestaurant ? '#000' : 'white'} className='home_section_divider____right_icon' /> : <img src={props.customRightIcon} alt='' className='home_section_divider__icon' />}
    </div>
  )
}

HomeSectionDivider.propTypes = {
  type: PropTypes.oneOf((['PRODUCT', 'RESTAURANT'])),
  title: PropTypes.string.isRequired,
  customLeftIcon: PropTypes.string,
  customRightIcon: PropTypes.string
}
export default HomeSectionDivider
