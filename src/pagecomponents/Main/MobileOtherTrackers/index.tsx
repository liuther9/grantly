import Carousel from 'nuka-carousel'
import styled from 'styled-components'
import { H1, Paragraph } from 'pagecomponents/Main/CommonComponents'
import { _LIGHT_GRAY } from 'styles/variables'
import OtherTracker from '../OtherTracker'
import { useAppSelector } from 'store/hooks'

type Props = {}
const arr = [
	{
		title: 'Великобритания',
		img: 'uk',
		desc: 'Эта страна является притяжением для всех стран мира в образовании. Поступайте с нами на грант',
	},
	{
		title: 'Турция',
		img: 'turkey',
		desc: 'Эта страна является притяжением для всех стран мира в образовании. Поступайте с нами на грант',
	},
	{
		title: 'Чехия',
		img: 'czech',
		desc: 'Эта страна является притяжением для всех стран мира в образовании. Поступайте с нами на грант',
	},
	{
		title: 'Германия',
		img: 'germany',
		desc: 'Эта страна является притяжением для всех стран мира в образовании. Поступайте с нами на грант',
	},
]
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-bottom: 48px;
	.slide-current {
		z-index: 1;
		margin-left: 11px;
		& + .slide {
			transform: translateX(-100px) scale(0.95) !important;
		}
	}
	.slider-container {
		margin-top: 8px;
	}
`

const TrackerContainer = styled.div`
	min-width: 336px;
	max-width: 336px;
	height: 204px;
	display: flex;
	flex-direction: column;
	padding: 32px 24px;
	border-radius: 24px;
	background: linear-gradient(89.73deg, #4b4b4b 0.31%, #212121 99.84%);
	box-shadow: 0px 12.3603px 24.1177px rgba(0, 0, 0, 0.123802),
		0px 5.13384px 10.0172px rgba(0, 0, 0, 0.095), 0px 1.85681px 3.62304px rgba(0, 0, 0, 0.0661981);
`
const TrackerTitle = styled.h1`
	font-weight: 700;
	font-size: 20px;
	line-height: 24px;
	color: #ffffff;
	margin-bottom: 8px;
	img {
		margin-left: 8px;
		margin-bottom: -1px;
	}
`
const TrackerP = styled.p`
	font-size: 12px;
	line-height: 16px;
	width: 226px;
	color: ${_LIGHT_GRAY};
	margin-bottom: 24px;
`

const MobileOtherTrackers: React.FC<Props> = ({ }) => {
	const otherTrackers = useAppSelector(state => state.trackersSlice.otherTrackers)
	return (
		<Wrapper>
			<H1>Другие трекеры</H1>
			<Paragraph>Вы можете добавить еще трекеры</Paragraph>
			<Carousel
				slidesToShow={1}
				withoutControls
				animation='zoom'
				zoomScale={0.95}
				dragThreshold={0.2}
			>
				{otherTrackers.map((i) => {
					return <OtherTracker otherTracker={i} key={i.title} />
				})}
			</Carousel>
		</Wrapper>
	)
}

export default MobileOtherTrackers
