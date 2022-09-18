import styled from 'styled-components'
import { _DARK_GRAY, _DARK_GRAY_1 } from 'styles/variables'

const H1 = styled.h1`
	font-weight: 700;
	font-size: 16px;
	line-height: 24px;
	padding: 16px;
`

const Paragraph = styled.p`
	font-size: 14px;
	line-height: 20px;
	color: ${_DARK_GRAY};
	width: 288px;
	margin: 0 16px 16px;
`

const Btn = styled.button`
	width: fit-content;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 8px 16px;
	border-radius: 16px;
	border: none;
	color: ${_DARK_GRAY_1};
	cursor: pointer;
`
export { H1, Paragraph, Btn }
