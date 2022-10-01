import styled from 'styled-components'
import { _GRAY, _MOBILE, _LIGHT_GRAY } from 'styles/variables'

const StyledHeader = styled.h1`
	width: 100%;
	font-weight: 700;
	font-size: 24px;
	line-height: 32px;
	color: #000000;
	margin-bottom: 8px;
	&:first-of-type {
		display: none;
	}
	@media (max-width: ${_MOBILE}) {
		margin-bottom: 16px;
		text-align: center;
		font-size: 20px;
		line-height: 24px;
		&:first-of-type {
			display: block;
		}
		&:last-of-type {
			display: none;
		}
	}
`

const StyledParagraph = styled.p`
	width: 424px;
	font-size: 16px;
	line-height: 24px;
	color: ${_GRAY};
	margin-bottom: 40px;
	&:first-of-type {
		display: none;
	}
	@media (max-width: ${_MOBILE}) {
		width: 282px;
		text-align: center;
		margin-bottom: auto;
		font-size: 14px;
		line-height: 20px;
		&:first-of-type {
			display: block;
		}
		&:last-of-type {
			display: none;
		}
	}
`

const ButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 424px;
	button {
		margin-bottom: 16px;
		height: 48px;
		&:first-of-type {
			svg {
				transform: translateY(-2px);
				margin-right: 10px;
			}
		}
		&:last-of-type {
			svg {
				transform: translateY(-1px);
				margin-right: 10px;
				font-size: 14px;
			}
		}
	}
	&:last-of-type {
		button {
			&:first-of-type {
				svg {
					transform: translateY(0);
					font-size: 18px;
				}
			}
		}
	}
	@media (max-width: ${_MOBILE}) {
		padding: 0 16px;
		width: 100%;
		&:last-of-type {
			display: none;
		}
	}
`

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
`

const Section = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex: 1;
	margin: 0 auto 0 60px;
	@media (max-width: ${_MOBILE}) {
		align-items: center;
		display: flex;
		align-items: center;
		margin: 0;
	}
`

const StyledOtherMethods = styled.button`
	display: none;
	border: none;
	background-color: transparent;
	color: ${_GRAY};
	font-size: 14px;
	line-height: 20px;
	@media (max-width: ${_MOBILE}) {
		display: block;
		margin-bottom: 32px;
	}
`

const DesktopDivider = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 424px;
	font-size: 16px;
	line-height: 24px;
	color: ${_GRAY};
	margin: 16px 0 32px;
	&::before,
	&::after {
		content: '';
		width: 56px;
		height: 1px;
		background: linear-gradient(to right, #fff, ${_LIGHT_GRAY});
		margin: 0 16px;
	}
	&::after {
		background: linear-gradient(to left, #fff, ${_LIGHT_GRAY});
	}
	@media (max-width: ${_MOBILE}) {
		width: 100%;
		display: none;
	}
`

export {
	Section,
	StyledOtherMethods,
	StyledHeader,
	StyledParagraph,
	DesktopDivider,
	Container,
	ButtonContainer,
}
