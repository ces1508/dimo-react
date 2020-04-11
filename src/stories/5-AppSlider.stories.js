import React from 'react'
import { action } from '@storybook/addon-actions';
import AppSlider from '../components/AppSlider'

export default {
  title: 'AppSlider',
  component: AppSlider
}

const items = [
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
  action('clicked')
  return window.open(url, '_blank')
}

export const Home = () => <AppSlider items={items} width='48%' resizeMethod='cover' />
export const Main = () => <AppSlider width='100%' height={267} items={MainItems} resizeMethod='cover' />
export const ResizeContain = () => <AppSlider items={items} width='48%' resizeMethod='contain' />
export const ResizeFill = () => <AppSlider items={items} width='48%' resizeMethod='fill' />
