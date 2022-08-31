import styled from "styled-components"
import { _GRAY, _TABLET } from "styles/variables"

const Wrapper = styled.div`
	width: 357px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 64px auto 0;
	@media (max-width: ${_TABLET}) {
		display: none;
	}
`

const H1 = styled.h1`
	font-size: 24px;
	line-height: 32px;
	margin-bottom: 8px;
	text-align: center;
`

const Paragraph = styled.p`
	font-size: 16px;
	color: ${_GRAY};
	text-align: center;
`

type Props = {
	title: string,
	text: string,
}

const Greeting:React.FC<Props> = ({ title, text }) => {
	return (
		<Wrapper>
			<H1>{title}</H1>
			<Paragraph>{text}</Paragraph>
		</Wrapper>
	)
}

export default Greeting