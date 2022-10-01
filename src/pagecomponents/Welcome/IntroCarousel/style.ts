import styled from 'styled-components'
import { _MOBILE, _PURPLE, _WHITE } from 'styles/variables'

const Embla = styled.div`
	display: none;
	overflow: hidden;
	width: 260px;
	height: 240px;
	margin-top: auto;
	margin-bottom: 16px;
	@media (max-width: ${_MOBILE}) {
		display: block;
	}
`

const EmblaContainer = styled.div`
	display: flex;
	user-select: none;
	min-width: 100%;
	min-height: 100%;
`

const EmblaSlide = styled.div`
	position: relative;
	min-width: 100%;
	min-height: 100%;
`
const ImgContainer = styled.div`
	position: relative;
	width: 240px;
	min-height: 100%;
	margin: 0 auto;
	overflow: hidden;
	border-radius: 24px;
`
const EmblaDots = styled.div`
	display: none;
	list-style: none;
	justify-content: center;
	margin-bottom: 24px;
	@media (max-width: ${_MOBILE}) {
		display: flex;
	}
`

const EmblaDot = styled.button<{ selected: boolean }>`
	background-color: ${(p) => (p.selected ? _PURPLE : _WHITE)};
	cursor: pointer;
	position: relative;
	padding: 0;
	outline: 0;
	border: 0;
	width: ${(p) => (p.selected ? '24px' : '8px')};
	height: 8px;
	margin: 0 4px;
	display: flex;
	align-items: center;
	transition: all 0.1s ease-in-out;
	border-radius: 10px;
`

export { Embla, EmblaContainer, EmblaDot, EmblaDots, EmblaSlide, ImgContainer }
