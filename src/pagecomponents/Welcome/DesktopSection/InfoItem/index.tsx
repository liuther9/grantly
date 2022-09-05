import styled from 'styled-components'
import { _BLUE } from 'styles/variables'

type Props = {
	text: string,
	icon: JSX.Element,
}
const Wrapper = styled.div`
	display: flex;
	align-items: center;
	width: 454px;
	height: 64px;
	margin-bottom: 24px;
`
const IconContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${_BLUE};
	border-radius: 20px;
	overflow: hidden;
	margin-right: 16px;
	width: 64px;
	height: 64px;
	svg {
		color: #fff;
	}
`
const Description = styled.p`
	font-weight: 590;
	font-size: 16px;
	width: 374px;
	color: #fff;
`
const InfoItem: React.FC<Props> = ({ text, icon }) => {
	return (
		<Wrapper>
			<IconContainer>{ icon }</IconContainer>
			<Description>{ text }</Description>
		</Wrapper>
	)
}

export default InfoItem