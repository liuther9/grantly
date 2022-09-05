import Image from 'next/future/image'
import Carousel from 'nuka-carousel/lib/carousel'
import { H1, Btn } from 'pagecomponents/Main/CommonComponents'
import { FiCalendar } from 'react-icons/fi'
import styled from 'styled-components'
import { _LIGHT_GRAY } from 'styles/variables'
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
const Card = styled.div`
	display: flex;
	flex-direction: column;
	width: 280px;
	height: 420px;
	background: linear-gradient(94.75deg, #4b4b4b 3.26%, #212121 95.87%);
	border-radius: 24px;
	img {
		margin: 8px 8px 24px;
		border-radius: 16px;
	}
`

const CardBotContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 0 24px 32px;
`

const CardH1 = styled.h1`
	font-weight: 700;
	font-size: 20px;
	line-height: 24px;
	color: #fff;
	margin-bottom: 8px;
	img {
		margin-left: 8px;
		margin-bottom: -1px;
		border-radius: 0;
	}
`

const CardDate = styled.span`
	color: ${_LIGHT_GRAY};
	font-size: 12px;
	line-height: 16px;
	display: flex;
	align-items: center;
	margin-bottom: 16px;
	svg {
		margin-right: 5px;
	}
`

const CardDesc = styled.p`
	width: 200px;
	color: ${_LIGHT_GRAY};
	font-size: 12px;
	line-height: 16px;
	margin-bottom: 24px;
`

const MobileAnnouncement = (props: Props) => {
	return (
		<Wrapper>
			<H1>Анонс</H1>
			<Paragraph>Будьте одним из первых, кто добавит этот трекер</Paragraph>
			<Carousel slidesToShow={1} withoutControls zoomScale={0.95} dragThreshold={0.2}>
				{arr.map((i) => (
					<Card key={i.title}>
						<Image src={`/${i.url}.png`} alt='' width={264} height={184} />
						<CardBotContainer>
							<CardH1>
								{i.title}
								<Image src={`/flags/${i.url}.svg`} alt='' width={24} height={18} />
							</CardH1>
							<CardDate>
								<FiCalendar />
								{i.date}
							</CardDate>
							<CardDesc>{i.desc}</CardDesc>
							<Btn>Запланировать</Btn>
						</CardBotContainer>
					</Card>
				))}
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
		title: 'Испания',
		url: 'usa',
		desc: 'Поступайте только в самые лучшие ВУЗ-ы в солнечном Испании и запланируйте',
		date: '08.12.2032',
	},
]

export default MobileAnnouncement
