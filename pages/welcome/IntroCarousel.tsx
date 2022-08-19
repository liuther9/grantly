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
  margin-top: 40px;
  margin-bottom: 24px;
`

const EmblaContainer = styled.div`
  display: flex;
  user-select: none;
  min-width: 100%;
	min-height: 100%;
`

const EmblaSlide = styled.div`
  position: relative;
  min-width: 100%;
	min-height: 100%;
`
const ImgContainer = styled.div`
	position: relative;
  /* min-width: 90%; */
	min-height: 100%;
	margin: 0 auto 16px;
  overflow: hidden;
  border-radius: 24px;
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
              <Image src={slide.url} alt={slide.title} fill style={{ objectFit: 'cover' }} />
            </ImgContainer>
          </EmblaSlide>
        ))}
      </EmblaContainer>
    </Embla>
  )
}

export default IntroCarousel
