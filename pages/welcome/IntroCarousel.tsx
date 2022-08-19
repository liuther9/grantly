import React, { ReactNode } from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import styled from 'styled-components'
import Image from 'next/future/image'

type PropType = {
  options?: EmblaOptionsType
  slides: {
    id: number,
    title: string,
    url: string
  }[]
}

const Embla = styled.div`
	overflow: hidden;
  width: 240px;
	height: 240px;
`

const EmblaContainer = styled.div`
  display: flex;
  user-select: none;
`

const EmblaSlide = styled.div`
  position: relative;
  min-width: 100%;
	min-height: 100%;
`
const ImgContainer = styled.div`
	position: relative;
	width: calc(100% - 32px);
	min-height: 160px;
	margin: 0 auto 16px;
`
const IntroCarousel = (props: PropType) => {
  // return <div></div>
  const { options, slides } = props
  const [emblaRef] = useEmblaCarousel(options)

  return (
    <Embla ref={emblaRef}>
      <EmblaContainer>
        { slides && slides.map((slide: any) => (
          <EmblaSlide key={slide.id}>
            <ImgContainer>
              <Image src={slide.url} alt={slide.title} fill style={{ objectFit: 'contain' }} />
            </ImgContainer>
          </EmblaSlide>
        ))}
      </EmblaContainer>
    </Embla>
  )
}

export default IntroCarousel
