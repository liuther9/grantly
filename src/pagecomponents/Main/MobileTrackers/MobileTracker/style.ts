import styled from 'styled-components'
import { _MOBILE, _BLACK, _DARK_GRAY } from 'styles/variables'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-bottom: 24px;
	&:last-of-type {
		margin-bottom: 0;
	}
	@media (max-width: ${_MOBILE}) {
	}
`

const TrackerName = styled.h2`
	font-weight: 700;
	font-size: 16px;
	line-height: 24px;
	color: ${_BLACK};
	margin-bottom: 24px;
	border-radius: 24px;
	padding: 0 16px;
	padding-left: 19px;
	@media (max-width: ${_MOBILE}) {
		padding: 0 16px;
		font-size: 14px;
		color: ${_DARK_GRAY};
		margin-bottom: 16px;
	}
`

const Trackers = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	overflow-y: auto;
	padding-left: 19px;
  -ms-overflow-style: none;
  scrollbar-width: none;
	&&::-webkit-scrollbar {
		display: none;
	}
	@media (max-width: ${_MOBILE}) {
		flex-direction: row;
		align-items: center;
		overflow-y: visible;
		overflow-x: auto;
		padding-left: 0;
	}
`

export { Wrapper, TrackerName, Trackers }
