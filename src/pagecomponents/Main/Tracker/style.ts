import styled from 'styled-components'
import { _LIGHT_GRAY, _TABLET, _MOBILE, _RED_1, _DARK_GRAY, _BLACK } from 'styles/variables'

const Wrapper = styled.div`
	z-index: 1;
	position: fixed;
	right: 0;
	top: 0;
	width: 576px;
	height: 100vh;
	display: flex;
	flex-direction: column;
	background-color: #fff;
	padding: 104px 32px;
	border-left: 1px solid ${_LIGHT_GRAY};
	@media (max-width: ${_TABLET}) {
		width: 400px;
	}
	@media (max-width: ${_MOBILE}) {
		width: 100%;
		padding: 64px 0 0;
	}
`

const TopContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	position: relative;
	padding-bottom: 32px;
	svg {
		display: none;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 16px;
	}
	@media (max-width: ${_MOBILE}) {
		padding: 24px 16px;
		justify-content: center;
		svg {
			display: block;
		}
	}
`

const Step = styled.span`
	font-weight: 700;
	font-size: 16px;
	line-height: 24px;
`

const H1 = styled.h1`
	font-weight: 700;
	font-size: 20px;
	line-height: 24px;
	width: 100%;
	padding-bottom: 16px;
	@media (max-width: ${_MOBILE}) {
		padding: 0 16px 14px;
	}
`

const WebinarTime = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	font-size: 12px;
	line-height: 16px;
	svg {
		margin-right: 5px;
	}
	padding-bottom: 16px;
	@media (max-width: ${_MOBILE}) {
		padding: 0 16px 14px;
	}
`

const LiveIcon = styled.div`
	width: 12px;
	height: 12px;
	border: 1px solid ${_RED_1};
	background: transparent;
	position: relative;
	border-radius: 12px;
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

const Content = styled.p`
	font-size: 14px;
	line-height: 20px;
	color: ${_DARK_GRAY};
	margin-bottom: 32px;
	@media (max-width: ${_MOBILE}) {
		padding: 0 16px;
		margin-bottom: auto;
	}
`

const NavContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: fit-content;
	margin-bottom: 16px;
	padding: 0 16px;
`

const Btn = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	width: 48px;
	height: 48px;
	background-color: #fff;
	box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.12);
	border-radius: 100px;
	cursor: pointer;
	svg {
		font-size: 24px;
		color: ${_BLACK};
	}
`

const BtnContainer = styled.div`
	width: 240px;
	margin-bottom: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	@media (max-width: ${_MOBILE}) {
		width: 100%;
		padding: 8px 16px;
	}
`

export { WebinarTime, Wrapper, BtnContainer, Content, LiveIcon, H1, Step, TopContainer, NavContainer, Btn }
