import React from 'react'
import BrandCard from '../components/BrandCard'
import BrandCardInvitation from '../components/BrandCard/Invitation'

export default {
  title: 'BrandCard',
  component: BrandCard
}

const brand = {
  name: 'Quinto Cocina',
  category: 'Asiática',
  price: 22500,
  image: 'https://fusemall.s3.us-west-2.amazonaws.com/uploads/location_photo/image_data/42/thumb_70c731b6-f261-4c18-b423-c918a6f78627.jpeg',
  imageThumb: 'https://fusemall.s3.us-west-2.amazonaws.com/uploads/location_photo/image_data/42/thumb_70c731b6-f261-4c18-b423-c918a6f78627.jpeg',
  logo: 'https://fusemall.s3.us-west-2.amazonaws.com/uploads/brand/logo/59/thumb_6669ac38-aa31-4608-9bd5-77b7d498d623.jpeg',
  logoThumb: 'https://fusemall.s3.us-west-2.amazonaws.com/uploads/brand/logo/59/thumb_6669ac38-aa31-4608-9bd5-77b7d498d623.jpeg'

}

export const card = () => <BrandCard brand={brand} />
export const Invitation = () => <BrandCardInvitation />
