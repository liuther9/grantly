import type { NextPage } from 'next'
import { Fragment } from 'react'
import IntroCarousel from './IntroCarousel'

const slides = [
  {
    id: 1,
    title: 'первый слайд',
    url: '/hatsup.png'
  },
  {
    id: 2,
    title: 'second слайд',
    url: '/hatsup.png'
  },
  {
    id: 3,
    title: 'third слайд',
    url: '/hatsup.png'
  },
]

const Welcome: NextPage = () => {
  return <Fragment>
    {/* <IntroCarousel slides={slides} /> */}
  </Fragment>
}

export default Welcome
