import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import ProgressiveImage from '../ProgressiveImage'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './appSlider.scss'

const AppSlider = props => {
  const { width, height, resizeMethod } = props
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    width,
    height
  }
  const styles = { width, height }
  return (
    <Slider {...settings} className='appSlider' style={styles}>
      {props.items.map(item => (
        <div key={item.image} className='appSlider__item' style={styles} onClick={item.handleClick}>
          <ProgressiveImage src={item.image} thumb={item.thumb} alt={item.alt} resizeMethod={resizeMethod} />
        </div>
      ))}

    </Slider>
  )
}

AppSlider.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      thumb: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      handleClick: PropTypes.func
    })
  ),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  resizeMethod: PropTypes.oneOf(['fill', 'cover', 'contain', 'scale-down'])
}

AppSlider.defaultProps = {
  resizeMethod: 'fill',
  height: 200,
  width: '100%'
}

export default AppSlider
