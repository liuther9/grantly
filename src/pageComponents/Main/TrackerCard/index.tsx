import Image from 'next/future/image'
import styled from 'styled-components'
import { BsClock } from 'react-icons/bs'
import { Btn } from 'pagecomponents/Main/CommonComponents'
import { _DARK_GRAY_1, _LIGHT_GRAY, _PURPLE } from 'styles/variables'

type Props = {
	imgUrl: string
	country: string
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	min-width: 300px;
	height: 160px;
	padding: 32px 24px;
	border-radius: 24px;
	background-color: ${_PURPLE};
	margin-right: 8px;
	&:first-of-type {
		margin-left: 11px;
	}
`

const H1 = styled.h1`
	font-weight: 700;
	font-size: 20px;
	line-height: 24px;
	color: #FFFFFF;
	margin-bottom: 4px;
	display: flex;
	align-items: flex-end;
	img {
		margin: 0 0 1px 8px;
	}
`
const Paragraph = styled.p`
	font-size: 12px;
	line-height: 16px;
	margin-bottom: 16px;
	color: ${_LIGHT_GRAY};
`
const BottomContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
`

const TimeContainer = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
	svg {
		font-size: 14px;
		color: #fff;
		margin-right: 5px;
	}
`

const StyledTime = styled.span`
	display: flex;
	align-items: center;
	font-size: 12px;
	line-height: 16px;
	color: ${_LIGHT_GRAY};
`

const TrackerCard:React.FC<Props> = ({ imgUrl, country }) => {
	return (
		<Wrapper>
			<H1>1-й этап <Image src={`/flags/${imgUrl}.svg`} alt='turkey' width={24} height={18} /></H1>
			<Paragraph>Онлайн-вебинар о {country.replace(/.$/, 'и')}</Paragraph>
			<BottomContainer>
				<Btn>Продолжить</Btn>
				<TimeContainer><BsClock /><StyledTime>1 час 45 мин.</StyledTime></TimeContainer>
			</BottomContainer>
		</Wrapper>
	)
}

export default TrackerCard
