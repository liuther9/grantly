import styled from "styled-components";
import { _PURPLE, _TABLET } from "styles/variables";

const Section = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex: 1;
	background: ${_PURPLE};
	border-radius: 40px 0px 0px 40px;
	padding-left: 60px;
	@media (max-width: ${_TABLET}) {
		display: none;
	}
`
const H1 = styled.h1`
	font-weight: bolder;
	font-size: 96px;
	color: #fff;
	margin-bottom: 50px;
`

export { Section, H1 }