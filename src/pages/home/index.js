import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import MainSlider from './MainSlider'
import ShowCases from './ShowCases'
import './home.scss'

const HOMEQUERIES = gql`
{
  plates: homePlates {
    id
      name
      imageData {
        original {
          url
        }
        thumb {
          url
        }
      }
      price
  }
  products: homeProducts {
    id
      name
      imageData {
        original {
          url
        }
        thumb {
          url
        }
      }
      price
  }
}
`
export default function HomePage () {
  const { loading, error, data } = useQuery(HOMEQUERIES)
  if (loading) return <p>loading....</p>
  if (error) return <p>Error :(</p>

  function parseProduct (data) {
    return data.map(item => ({
      name: item.name,
      price: item.price,
      image: item.imageData.original.url,
      thumb: item.imageData.thumb.url
    }))
  }

  return (
    <section className='home'>
      <MainSlider />
      <ShowCases
        plates={parseProduct(data.plates)}
        products={parseProduct(data.products)} />
    </section>
  )
}
