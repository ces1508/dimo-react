import React from 'react'
import ProgressiveImage from '../components/ProgressiveImage'

export default {
  title: 'ProgressiveImage',
  component: ProgressiveImage
}

const imageProps = {
  thumb: 'https://images.pexels.com/photos/671557/pexels-photo-671557.jpeg?w=50&buster=3',
  src: 'https://images.pexels.com/photos/671557/pexels-photo-671557.jpeg?w=5000&buster=3'
}

export const normal = () => (
  <div style={{ width: 200, height: 200, position: 'relative' }}>
    <ProgressiveImage
      alt="image preload"
      thumb={imageProps.thumb}
      src={imageProps.src}
    />
  </div>
)

