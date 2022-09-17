import Carousel from 'nuka-carousel/lib/carousel'
import { H1 } from 'pagecomponents/Main/CommonComponents'
import styled from 'styled-components'
import { _LIGHT_GRAY } from 'styles/variables'
import AnnouncementCard from '../AnnouncementCard'
import { Paragraph } from '../CommonComponents'

type Props = {}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin: 8px 0 48px;
	${Paragraph} {
		width: 244px;
	}
	.slide-current {
		margin-left: 11px;
		transition: all 0.15s linear;
		& + .slide {
			transition: all 0.15s linear;
			transform: translateX(-90px);
			opacity: 0.95;
		}
	}
	.slider-container {
		margin-top: 8px;
	}
`

const MobileAnnouncement = (props: Props) => {
	return (
		<Wrapper>
			<H1>Анонс</H1>
			<Paragraph>Будьте одним из первых, кто добавит этот трекер</Paragraph>
			<Carousel slidesToShow={1} withoutControls zoomScale={0.95} dragThreshold={0.2}>
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
