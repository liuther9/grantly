import { Fragment, useCallback, useEffect, useState } from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import Image from 'next/future/image'
import { _PURPLE, _TABLET, _WHITE } from 'styles/variables'
import { Embla, EmblaContainer, EmblaSlide, ImgContainer, EmblaDots, EmblaDot } from './style'

type PropType = {
  options?: EmblaOptionsType
  slides: {
    id: number,
    title: string,
    url: string
  }[]
}

const IntroCarousel = (props: PropType) => {
  const { options, slides } = props
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [emblaRef, embla] = useEmblaCarousel(options)

  const scrollTo = useCallback((index: number) => embla && embla.scrollTo(index), [embla]);

  const onSelect = useCallback(() => embla && setSelectedIndex(embla.selectedScrollSnap()), [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <Fragment>
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
      <EmblaDots>
        {scrollSnaps.map((_, index) => (
          <EmblaDot
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </EmblaDots>
    </Fragment>
  )
}

export default IntroCarousel
