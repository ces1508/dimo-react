import React from 'react'
import { action } from '@storybook/addon-actions'
import Button from '../components/button'

export default {
  title: 'Button',
  component: Button
}

export const Text = () => <Button text='Hello Button' onClick={action('clicked')} />

export const Success = () => <Button text='Add to Cart' type='success' />
export const Restaurant = () => <Button text='Button type restaurant' type='restaurant' />
export const Product = () => <Button text='Button type product' type='product' />
export const Plate = () => <Button text='Button type Plate' type='plate' />
export const Disable = () => <Button text='I am a disable button' disable />
export const DisableWithType = () => <Button text='Button type restaurant disable' disable type='restaurant' />
