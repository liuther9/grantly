import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'

type Props = {
	options?: EmblaOptionsType
	slides: any[]
}

const Embla = styled.div`
	display: block;
	overflow: hidden;
	width: 100%;
	height: 204px;
	margin-bottom: 48px;
`

const EmblaContainer = styled.div`
	display: flex;
	min-width: 100%;
	min-height: 100%;
`

const EmblaSlide = styled.div`
	position: relative;
	width: 336px;
	min-height: 100%;
`
const TrackerContainer = styled.div`
	min-width: 336px;
	height: 204px;
	display: flex;
	flex-direction: column;
	border-radius: 24px;
	background: linear-gradient(89.73deg, #4b4b4b 0.31%, #212121 99.84%);
	box-shadow: 0px 12.3603px 24.1177px rgba(0, 0, 0, 0.123802),
		0px 5.13384px 10.0172px rgba(0, 0, 0, 0.095), 0px 1.85681px 3.62304px rgba(0, 0, 0, 0.0661981);
`
const MobileOtherTrackers = (props: Props) => {
	const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
	const [nextSlide, setNextSlide] = useState()
	const { options, slides } = props
  const [scaleValues, setScaleValues] = useState<number[]>([]);
	const [emblaRef, embla] = useEmblaCarousel({loop: true, skipSnaps: false})

	useEffect(() => { embla && setScrollSnaps(embla.scrollSnapList()) }, [embla])

	// const currentSlide = embla?.scrollProgress()
	// useEffect(() => {
  //   if (!embla) return;
	// 	embla?.on('scroll', () => console.log((embla?.scrollProgress())))
		
	// }, [currentSlide, embla, scrollSnaps])
	// const SCALE_FACTOR = 3;

	// const numberWithinRange = (number: number, min: number, max: number) =>
	// 	Math.min(Math.max(number, min), max);
  // const onScroll = useCallback(() => {
  //   if (!embla) return;

  //   const engine = embla.internalEngine();
  //   const scrollProgress = embla.scrollProgress();

  //   const styles = embla.scrollSnapList().map((scrollSnap, index) => {
  //     if (!embla.slidesInView().includes(index)) return 0;
  //     let diffToTarget = scrollSnap - scrollProgress;

  //     if (engine.options.loop) {
  //       engine.slideLooper.loopPoints.forEach((loopItem) => {
  //         const target = loopItem.getTarget();
  //         if (index === loopItem.index && target !== 0) {
  //           const sign = Math.sign(target);
  //           if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
  //           if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
  //         }
  //       });
  //     }
  //     const scale = 1 - Math.abs(diffToTarget * SCALE_FACTOR);
  //     return numberWithinRange(scale, 0, 1);
  //   });
  //   setScaleValues(styles);
  // }, [embla, setScaleValues]);
	
	return (
		<Embla ref={emblaRef}>
			<EmblaContainer>
				<TrackerContainer onClick={() => console.log(embla?.scrollProgress(), scrollSnaps)} />
				<TrackerContainer onClick={() => console.log(embla?.scrollProgress(), scrollSnaps)} style={{transform:  'scale(0.9)'}} />
				<TrackerContainer onClick={() => console.log(embla?.scrollProgress(), scrollSnaps)}  />
				<TrackerContainer onClick={() => console.log(embla?.scrollProgress(), scrollSnaps)}  />
			</EmblaContainer>
		</Embla>
	)
}

export default MobileOtherTrackers
