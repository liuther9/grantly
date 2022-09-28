import styled from 'styled-components'
import { _DARK_GRAY } from 'styles/variables'

const Logo = styled.span`
	font-size: 16px;
	font-weight: 600;
	color: ${_DARK_GRAY};
`

const LogoComponent = () => {
	return <Logo>Steply.me</Logo>
}

export default LogoComponent
