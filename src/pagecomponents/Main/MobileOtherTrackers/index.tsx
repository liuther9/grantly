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
