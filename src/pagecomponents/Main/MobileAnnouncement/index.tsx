import Carousel from 'nuka-carousel/lib/carousel'
import styled from 'styled-components'
import { H1, Paragraph } from 'pagecomponents/Main/CommonComponents'
import AnnouncementCard from 'pagecomponents/Main/AnnouncementCard'
import { _LIGHT_GRAY } from 'styles/variables'
import useWindowSize from 'src/helpers/useWindowSize'

type Props = {}

const Wrapper = styled.div<{ wide: boolean }>`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin: 8px 0 48px;
	${Paragraph} {
		width: 244px;
	}
	.slide-current {
		z-index: 1;
		margin-left: 11px;
		transition: all 0.15s linear;
		& + .slide {
			transition: all 0.15s linear;
			opacity: 0.95;
		}
	}
	.slider-container {
		margin-top: 8px;
	}
`

const MobileAnnouncement = (props: Props) => {
	const { width } = useWindowSize()
	return (
		<Wrapper wide={width > 768}>
			<H1>Анонс</H1>
			<Paragraph>Будьте одним из первых, кто добавит этот трекер</Paragraph>
			<Carousel slidesToShow={width > 768 ? 2.5 : 1.3} withoutControls zoomScale={0.95} dragThreshold={0.2}>
				{arr.map((i) => <AnnouncementCard i={i} key={i.title} />)}
			</Carousel>
		</Wrapper>
	)
}

const arr = [
	{
		title: 'США',
		url: 'usa',
		desc: 'Этот трекер вам поможет узнать на какие лучшие ВУЗ-ы можно поступить в CША',
		date: '22.06.2032',
	},
	{
		title: 'Испания',
		url: 'usa',
		desc: 'Поступайте только в самые лучшие ВУЗ-ы в солнечном Испании и запланируйте',
		date: '08.12.2032',
	},
	{
		title: 'Испания!',
		url: 'usa',
		desc: 'Поступайте только в самые лучшие ВУЗ-ы в солнечном Испании и запланируйте',
		date: '08.12.2032',
	},
]

export default MobileAnnouncement
