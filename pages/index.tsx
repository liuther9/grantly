import type { NextPage } from 'next'
import { Fragment } from 'react'
import useWindowSize from 'src/helpers/useWindowSize'
import Greetings from 'src/pageComponents/Main/Greetings'
import MobileOtherTrackers from 'src/pageComponents/Main/MobileOtherTrackers'
import MobileTrackers from 'src/pageComponents/Main/MobileTrackers'
import styled from 'styled-components'
import { _TABLET } from 'styles/variables'

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Home: NextPage = () => {
  const { width, height } = useWindowSize()
  return (
    <Wrapper>
      <Greetings />
      {(width < 960) && 
        <Fragment>
          <MobileTrackers />
          <MobileOtherTrackers slides={[]} />
        </Fragment>
      }
    </Wrapper>
  )
}

export default Home
