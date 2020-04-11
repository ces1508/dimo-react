import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './progressiveImage.scss'

const ProgressiveImage = props => {
  const [loadThumb, setloadThumb] = useState(false)
  const [loadImage, setLoadImage] = useState(false)
  const customStyles = { objectFit: props.resizeMethod }
  return (
    <div className='progressiveImage__container'>
      <img
        className={`progressiveImage__overlay progressiveImage__overlay--thumb  ${loadThumb ? 'progressiveImage__animated' : ''}`}
        src={props.thumb}
        alt={props.alt}
        style={customStyles}
        onLoad={() => setloadThumb(true)}/>
      <img
        className={`progressiveImage__overlay ${loadImage ? 'progressiveImage__animated' : ''}`}
        src={props.src}
        alt={props.alt}
        style={customStyles}
        onLoad={() => setLoadImage(true)}/>
    </div>
  )
}

ProgressiveImage.propTypes = {
  src: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  resizeMethod: PropTypes.string.isRequired
}

ProgressiveImage.defaultProps = {
  resizeMethod: 'cover'
}

export default ProgressiveImage

