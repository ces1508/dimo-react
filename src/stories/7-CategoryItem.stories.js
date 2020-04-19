import React, { useState } from 'react'
import CategoryItem from '../components/CategoryItem'

export default {
  title: 'Category Item',
  component: CategoryItem
}

const category = {
  name: 'Servicios para Mascotas',
  quantity: 30,
  image: 'https://fusemall.s3.us-west-2.amazonaws.com/uploads/category/image/59/thumb_e4d90b0b-9d31-40f1-9efe-d600629a7ece.jpeg'
}

export const Basic = () => <div style={{ paddingLeft: '2em' }}><CategoryItem category={category} /></div>
export const Active = () => <div style={{ paddingLeft: '2em' }}><CategoryItem category={category} active /></div>
export const ClickToActive = () => {
  const [active, setActive] = useState(false)
  return (
    <div style={{ paddingLeft: '2em' }}>
      <CategoryItem
        handleClick={() => setActive(!active)}
        category={category}
        active={active}
      />
    </div>
  )
}

export const TypeRestaurant = () => {
  const [active, setActive] = useState(false)
  return (
    <div style={{ paddingLeft: '2em' }}>
      <CategoryItem
        handleClick={() => setActive(!active)}
        category={category}
        type='RESTAURANT'
        active={active}
      />
    </div>
  )
}

export const TypeProduct = () => {
  const [active, setActive] = useState(false)
  return (
    <div style={{ paddingLeft: '2em' }}>
      <CategoryItem
        handleClick={() => setActive(!active)}
        category={category}
        type='PRODUCT'
        active={active}
      />
    </div>
  )
}
