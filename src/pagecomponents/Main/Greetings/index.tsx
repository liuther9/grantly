import Button from 'components/Button'
import styled from 'styled-components'
import { _DARK_GRAY, _PURPLE } from 'styles/variables'
import { Paragraph } from 'pagecomponents/Main/CommonComponents'
import { useAppSelector } from 'store/hooks'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 24px 0 40px;
`

const H1 = styled.h1`
	font-weight: 700;
	font-size: 32px;
	line-height: 40px;
	margin-bottom: 8px;
	padding: 0 16px;
`

const BtnContainer = styled.div`
	width: 167.5px;
	margin: 0 16px;
`

const Greetings = () => {
	const username = useAppSelector(state => state.userSlice.name)
	return (
		<Wrapper>
			<H1>Привет, {username}</H1>
			<Paragraph>Скачай разбор про тебя после прохождения анкеты и узнай результаты</Paragraph>
			<BtnContainer>
				<Button styles={{ color: _PURPLE }}>Скачать (PDF)</Button>
			</BtnContainer>
		</Wrapper>
	)
}

export default Greetings
