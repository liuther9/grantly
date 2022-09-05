import Image from 'next/future/image'
import styled from 'styled-components'
import { BsClock } from 'react-icons/bs'
import { Btn } from 'pagecomponents/Main/CommonComponents'
import { _DARK_GRAY_1, _DARK_PURPLE, _LIGHT_GRAY, _PURPLE, _TABLET } from 'styles/variables'
import { useAppDispatch } from 'store/hooks'
import { showTracker } from 'store/slices/trackerSlice'

type Props = {
	imgUrl: string
	country: string
}

const Wrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	min-width: 421px;
	height: 160px;
	padding: 32px 24px;
	border-radius: 24px;
	background-color: ${_PURPLE};
	margin: 0 0 16px;
	overflow: hidden;
	@media (max-width: ${_TABLET}) {
		min-width: 300px;
		margin: 0 8px 0 0;
		&:first-of-type {
			margin-left: 11px;
		}
	}
	&::before,
	&::after {
		content: '';
		position: absolute;
		bottom: 73px;
		left: -60px;
		width: 101px;
		height: 101px;
		border-radius: 121px;
		background-color: ${_DARK_PURPLE};
	}
	&::after {
		left: 227px;
		top: 72px;
		bottom: 0;
		width: 121px;
		height: 121px;
	}
`

const H1 = styled.h1`
	z-index: 1;
	font-weight: 700;
	font-size: 20px;
	line-height: 24px;
	color: #ffffff;
	margin-bottom: 4px;
	display: flex;
	align-items: flex-end;
	img {
		margin: 0 0 1px 8px;
	}
`
const Paragraph = styled.p`
	z-index: 1;
	font-size: 12px;
	line-height: 16px;
	margin-bottom: 16px;
	color: ${_LIGHT_GRAY};
`
const BottomContainer = styled.div`
	z-index: 1;
	display: flex;
	align-items: center;
	width: 100%;
	@media (max-width: ${_TABLET}) {
		justify-content: space-between;
	}
`

const TimeContainer = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
	margin-left: 35px;
	svg {
		font-size: 14px;
		color: #fff;
		margin-right: 5px;
	}
	@media (max-width: ${_TABLET}) {
		justify-content: space-between;
		margin-left: 0;
	}
`

const StyledTime = styled.span`
	display: flex;
	align-items: center;
	font-size: 12px;
	line-height: 16px;
	color: ${_LIGHT_GRAY};
`

const TrackerCard: React.FC<Props> = ({ imgUrl, country }) => {
	const dispatch = useAppDispatch()
	return (
		<Wrapper>
			<H1>
				1-й этап <Image src={`/flags/${imgUrl}.svg`} alt='turkey' width={24} height={18} />
			</H1>
			<Paragraph>Онлайн-вебинар о {country.replace(/.$/, 'и')}</Paragraph>
			<BottomContainer>
				<Btn onClick={() => dispatch(showTracker(true))}>Продолжить</Btn>
				<TimeContainer>
					<BsClock />
					<StyledTime>1 час 45 мин.</StyledTime>
				</TimeContainer>
			</BottomContainer>
		</Wrapper>
	)
}

export default TrackerCard
