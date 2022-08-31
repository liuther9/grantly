import Button from "components/Button";
import styled from "styled-components";
import { _DARK_GRAY, _PURPLE } from "styles/variables";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 24px 16px 40px;
`

const H1 = styled.h1`
	font-weight: 700;
	font-size: 32px;
	line-height: 40px;
	margin-bottom: 8px;
`

const Paragraph = styled.p`
	font-size: 14px;
	line-height: 20px;
	color: ${_DARK_GRAY};
	width: 288px;
	margin-bottom: 16px;
`

const BtnContainer = styled.div`
	width: 167.5px;
`

const Greetings = () => {
	return (
		<Wrapper>
			<H1>Привет, {'Асанали'}</H1>
			<Paragraph>Скачай разбор про тебя после прохождения анкеты и узнай результаты</Paragraph>
			<BtnContainer>
				<Button styles={{ color: _PURPLE }}>Скачать (PDF)</Button>
			</BtnContainer>
		</Wrapper>
	)
}

export default Greetings