import React, { ReactNode } from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import styled from 'styled-components'

type PropType = {
  options?: EmblaOptionsType
  slides: ReactNode[]
}

const Embla = styled.div`
position: relative;
	overflow: hidden;
  width: 240px;
	height: 240px;
`

const EmblaContainer = styled.div`
	/* overflow: hidden; */
  display: flex;
  user-select: none;
`

const EmblaSlide = styled.div`
position: relative;
	overflow: hidden;
	background-color: red;
  min-width: 100%;
	min-height: 100%;
`
const IntroCarousel = (props: PropType) => {
  const { options, slides } = props
  const [emblaRef] = useEmblaCarousel(options)

  return (
    <Embla ref={emblaRef}>
      <EmblaContainer>
        { slides.map((slide, index) => (
          <EmblaSlide key={index}>
            {slide}
          </EmblaSlide>
        ))}
      </EmblaContainer>
    </Embla>
  )
}

export default IntroCarousel
