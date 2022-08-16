import styled from 'styled-components'
import { PURPLE } from 'styles/variables'

const StyledButton = styled.button`
	width: 100%;
	height: 48px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${PURPLE};
`
const Button:React.FC<any> = (props) => {
	return (
		<StyledButton>{ props.children }</StyledButton>
	)
}

export default Button