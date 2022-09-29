import { RiLoaderFill } from 'react-icons/ri'
import styled, { keyframes } from 'styled-components'
import { _BLACK } from 'styles/variables'

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
		animation: ${rotate360} 2s linear infinite;
		font-size: 24px;
		color: ${_BLACK};
	}
`
const Spinner = () => <Wrapper><RiLoaderFill /></Wrapper>

export default Spinner