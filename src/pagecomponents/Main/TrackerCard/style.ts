import styled from 'styled-components'
import { _PURPLE, _MOBILE, _DARK_PURPLE, _LIGHT_GRAY, _RED_1 } from 'styles/variables'

const Wrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	min-width: 360px;
	max-width: 360px;
	height: 160px;
	padding: 32px 24px;
	border-radius: 24px;
	background-color: ${_PURPLE};
	margin: 0 0 16px;
	overflow: hidden;
	cursor: pointer;
	@media (max-width: ${_MOBILE}) {
		min-width: 300px;
		margin: 0 8px 0 0;
		&:first-of-type {
			margin-left: 11px;
		}
	}
	&::before,
	&::after {
		content: '';
		position: absolute;
		bottom: 73px;
		left: -60px;
		width: 101px;
		height: 101px;
		border-radius: 121px;
		background-color: ${_DARK_PURPLE};
	}
	&::after {
		left: 227px;
		top: 72px;
		bottom: 0;
		width: 121px;
		height: 121px;
	}
`

const H1 = styled.h1`
	z-index: 1;
	font-weight: 700;
	font-size: 20px;
	line-height: 24px;
	color: #ffffff;
	margin-bottom: 4px;
	display: flex;
	align-items: flex-end;
	img {
		margin: 0 0 1px 8px;
	}
`
const Paragraph = styled.p`
	z-index: 1;
	font-size: 12px;
	line-height: 16px;
	margin-bottom: 16px;
	color: ${_LIGHT_GRAY};
	margin-bottom: auto;
`
const BottomContainer = styled.div`
	z-index: 1;
	display: flex;
	align-items: center;
	width: 100%;
	@media (max-width: ${_MOBILE}) {
		justify-content: space-between;
	}
`

const TimeContainer = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
	svg {
		font-size: 14px;
		color: #fff;
		margin-right: 5px;
	}
	@media (max-width: ${_MOBILE}) {
		justify-content: space-between;
	}
`

const StyledTime = styled.span`
	display: flex;
	align-items: center;
	font-size: 12px;
	line-height: 16px;
	color: ${_LIGHT_GRAY};
`
const LiveIcon = styled.div`
	width: 12px;
	height: 12px;
	border: 1px solid ${_RED_1};
	background: transparent;
	position: relative;
	border-radius: 12px;
	margin: 0 6px;
	&::before {
		position: absolute;
		content: '';
		width: 7.64px;
		height: 7.64px;
		top: 50%;
		left: 50%;
		background: ${_RED_1};
		border-radius: 12px;
		transform: translate(-50%, -50%);
	}
	& + span {
		font-weight: 700;
		margin-left: 5px;
	}
`

const LiveText = styled.p`
	font-weight: 700;
	font-size: 12px;
	line-height: 16px;
	letter-spacing: -0.002em;
	color: #FFFFFF;
`

export { StyledTime, TimeContainer, Wrapper, BottomContainer, Paragraph, H1, LiveIcon, LiveText }
