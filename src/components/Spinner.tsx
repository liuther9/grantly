import { RiLoader4Fill } from 'react-icons/ri'
import styled, { keyframes } from 'styled-components'
import { _PURPLE } from 'styles/variables'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: fit-content;
	height: fit-content;
	margin-left: 16px;
	svg {
		animation: ${rotate360} 1s linear infinite;
		font-size: 32px;
		color: ${_PURPLE};
	}
`
const Spinner = () => <Wrapper><RiLoader4Fill /></Wrapper>

export default Spinner