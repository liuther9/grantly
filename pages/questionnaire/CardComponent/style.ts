import styled from 'styled-components'
import { _LIGHT_PURPLE, _PURPLE, _BLACK, _LIGHT_GRAY_1, _ORANGE } from 'styles/variables'

const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: calc(100% - 32px);
	padding: 24px;
	margin: 0 auto 16px;
	background: ${_LIGHT_PURPLE};
	border: 1px solid ${_PURPLE};
	border-radius: 24px;
	input {
		font-size: 14px;
		line-height: 20px;
		color: ${_BLACK};
		border: none;
		outline: none;
		background: transparent;
		&::placeholder {
			color: ${_LIGHT_GRAY_1};
		}
	}
`
const CardInput = styled.input``
const CardTitle = styled.div`
	position: relative;
	display: flex;
	width: fit-content;
	margin-bottom: 16px;
	label {
		font-weight: 700;
		font-size: 20px;
		line-height: 24px;
		&::after {
			position: absolute;
			content: '*';
			left: 100%;
			top: 0;
			margin-left: 4px;
			color: ${_ORANGE};
		}
	}
`

export { CardContainer, CardTitle }