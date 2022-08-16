import type { NextPage } from 'next'
import { Fragment } from 'react'
import IntroCarousel from './IntroCarousel'

const Welcome: NextPage = () => {
  return <Fragment>
    <IntroCarousel slides={[1, 2, 3]} />
  </Fragment>
}

export default Welcome
