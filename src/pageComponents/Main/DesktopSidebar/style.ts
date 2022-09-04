import styled from 'styled-components'
import { _LIGHT_GRAY, _GRAY, _PURPLE, _BLACK } from 'styles/variables'

const Wrapper = styled.aside`
	z-index: 2;
	position: fixed;
	top: 0;
	left: 0;
	width: 264px;
	height: 100vh;
	display: flex;
	flex-direction: column;
	background-color: #fff;
	border-right: 1px solid ${_LIGHT_GRAY};
`
const Header = styled.div`
	width: 100%;
	height: 64px;
	display: flex;
	align-items: center;
	padding: 0 24px;
	border-bottom: 1px solid ${_LIGHT_GRAY};
	margin-bottom: 40px;
	span {
		font-size: 14px;
		line-height: 20px;
		color: ${_GRAY};
	}
	svg {
		margin-right: 16px;
	}
`

const Nav = styled.div`
	width: 100%;
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 12px 24px 0;
`

const StyledDetails = styled.details<{ active: boolean }>`
	margin-bottom: ${(p) => (p.active ? '12px' : '24px')};
	transition: all 0.2s linear;
	summary > * {
		display: inline;
	}
	summary {
		display: flex;
		align-items: center;
		width: 100%;
		padding: 0;
		color: ${(p) => (p.active ? _PURPLE : '#000')};
		margin-bottom: ${(p) => (p.active ? '20px' : 0)};
		cursor: pointer;
		span {
			margin-right: auto;
			font-size: 16px;
			line-height: 24px;
		}
		svg {
			margin-right: 10px;
			&:last-of-type {
				margin: 0;
				transition: all 0.1s linear;
				transform: ${(p) => p.active && 'rotate(180deg)'};
			}
		}
		&::marker {
			display: none;
			content: '';
		}
		&:hover {
			color: ${_PURPLE};
		}
	}
	ul {
		list-style-type: none;
		margin-top: 0;
		padding: 0 0 0 25px;
	}
`

const StyledLi = styled.li<{ chosen: boolean }>`
	font-size: 16px;
	line-height: 24px;
	margin-bottom: 16px;
	color: ${(p) => (p.chosen ? _PURPLE : _BLACK)};
	cursor: pointer;
	img {
		margin-right: 8px;
	}
`
const StyledBtn = styled.button<{ selected: boolean }>`
	border: none;
	background-color: transparent;
	cursor: pointer;
	width: 100%;
	display: flex;
	align-items: center;
	font-size: 16px;
	line-height: 24px;
	color: ${(p) => (p.selected ? _PURPLE : '#000')};
	margin-bottom: 24px;
	svg {
		font-size: 17px;
		margin-right: 9px;
	}
	&:hover,
	&:active {
		color: ${_PURPLE};
	}
	&:last-of-type {
		margin-bottom: auto;
	}
`
export { StyledBtn, StyledDetails, StyledLi, Wrapper, Nav, Header }
