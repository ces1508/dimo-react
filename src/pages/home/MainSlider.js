import React from 'react'
import AppSlider from '../../components/AppSlider'

const MainItems = [
  {
    alt: 'banner dimo',
    image: 'https://staging.dimo.app/static/img/banner-dimo-1.682c284.jpg',
    thumb: 'https://staging.dimo.app/static/img/banner-dimo-1.682c284.jpg',
    handleClick: () => openNew('https://staging.dimo.app')
  },
  {
    alt: 'BANNER_PUMA',
    image: 'https://staging.dimo.app/static/img/banner-puma-2.24d048d.jpg',
    thumb: 'https://staging.dimo.app/static/img/banner-puma-2.24d048d.jpg',
    handleClick: () => openNew('https://www.pumaseguridad.com/')
  },
  {
    alt: 'BANNER_OCOPLAST',
    image: 'https://staging.dimo.app/static/img/slider-ocoplast.62124f4.png',
    thumb: 'https://staging.dimo.app/static/img/slider-ocoplast.62124f4.png',
    handleClick: () => openNew('https://staging.dimo.app/store/ocoplast')
  },
  {
    alt: 'BANNER_MATCHCARS',
    image: 'https://staging.dimo.app/static/img/banner-matchcars-1.6a106b0.jpg',
    thumb: 'https://staging.dimo.app/static/img/banner-matchcars-1.6a106b0.jpg',
    handleClick: () => openNew('https://www.matchcars.com/')
  }
]


function openNew (url) {
  return window.open(url, '_blank')
}

const MainSlider = () => (
  <div className='home__main-slider'>
    <AppSlider width='100%' height={267} items={MainItems} resizeMethod='fill' />
  </div>
)

export default MainSlider
