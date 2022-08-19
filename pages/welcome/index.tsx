import type { NextPage } from 'next'
import { Fragment } from 'react'
import styled from 'styled-components'
import IntroCarousel from './IntroCarousel'
import { _GRAY } from 'styles/variables'

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

const StyledHeader = styled.h1`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 16px;
`

const StyledParagraph = styled.p`
width: 282px;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: ${_GRAY};
`
const Welcome: NextPage = () => {
  return <Fragment>
    <IntroCarousel slides={slides} />
    <StyledHeader>Grantly Academy</StyledHeader>
    <StyledParagraph>Красавчик! Ты уже сделал свой первый шаг к поступлению в иностранный ВУЗ. Осталось дело за малым</StyledParagraph>
  </Fragment>
}

export default Welcome
