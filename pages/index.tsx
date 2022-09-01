import type { NextPage } from 'next'
import { Fragment } from 'react'
import MobileAnnouncement from 'pagecomponents/Main/MobileAnnouncement'
import MobileRanking from 'pagecomponents/Main/MobileRanking'
import useWindowSize from 'src/helpers/useWindowSize'
import Greetings from 'src/pagecomponents/Main/Greetings'
import MobileOtherTrackers from 'src/pagecomponents/Main/MobileOtherTrackers'
import MobileTrackers from 'src/pagecomponents/Main/MobileTrackers'
import styled from 'styled-components'
import { _TABLET } from 'styles/variables'

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Main: NextPage = () => {
  const { width, height } = useWindowSize()
  return (
    <Wrapper>
      <Greetings />
      {(width < 11960) && 
        <Fragment>
          <MobileTrackers />
          <MobileOtherTrackers />
          <MobileAnnouncement />
          <MobileRanking />
        </Fragment>
      }
    </Wrapper>
  )
}

export default Main
