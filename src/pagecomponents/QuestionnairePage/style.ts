import styled from 'styled-components'
import { _MOBILE, _PURPLE } from 'styles/variables'

const Wrapper = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 648px;
	height: 100%;
	@media (max-width: ${_MOBILE}) {
		width: 100%;
	}
`

const ButtonContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: 16px;
	background: transparent;
	button {
		width: 240px;
	}
	@media (max-width: ${_MOBILE}) {
		button {
			width: 100%;
		}
	}
`

const ProfContainer = styled.div`
	max-height: 92px;
	width: 100%;
	display: flex;
	flex-direction: column;
	overflow: scroll;
	margin-bottom: 16px;
`
const BottomBorder = styled.div`
	width: 100%;
	height: 2px;
	background-color: ${_PURPLE};
`

export { BottomBorder, ButtonContainer, Wrapper, ProfContainer }
