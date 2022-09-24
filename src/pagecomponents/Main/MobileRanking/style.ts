import styled from 'styled-components'
import { _DARK_GRAY_2, _LIGHT_BLUE, _PURPLE_1, _YELLOW } from 'styles/variables'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`

const HeaderContainer = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	padding: 8px 16px 16px;
`

const Header = styled.h1`
	font-weight: 700;
	font-size: 14px;
	line-height: 24px;
	color: ${_DARK_GRAY_2};
	&:first-of-type {
		margin-right: 32px;
	}
	&:nth-of-type(2) {
		margin-right: auto;
	}
`



export { Wrapper, Header, HeaderContainer }
