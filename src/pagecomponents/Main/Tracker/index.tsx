import { Fragment, useEffect } from 'react'
import { FiCalendar, FiChevronLeft } from 'react-icons/fi'
import styled from 'styled-components'
import Button from 'components/Button'
import Player from './Player'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { showTracker } from 'store/slices/trackerSlice'
import { _DARK_GRAY, _LIGHT_GRAY, _TABLET, _PURPLE, _RED_1, _MOBILE } from 'styles/variables'
import useWindowSize from 'src/helpers/useWindowSize'

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
const Tracker = () => {
	const dispatch = useAppDispatch()
	const state = useAppSelector(state => state.trackerSlice)
	const { title, name, live, description, date } = { ...state.stage }
	const { width } = useWindowSize()
	
  useEffect(() => {
    const body = document.querySelector('body')
		if (body && width < 960) body.style.overflow = 'hidden'
		return () => {
			if (body && width < 960) body.style.overflow = 'auto';
		}
	}, [width])

	return (
		<Wrapper>
			<TopContainer>
				<FiChevronLeft onClick={() => dispatch(showTracker({show: false}))} />
				<Step>{name}</Step>
			</TopContainer>
			<Player url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
			<H1>{description}</H1>
			<WebinarTime>
				{!live && (
					<Fragment>
						<FiCalendar />{date}
					</Fragment>
				)}
				{live && (
					<Fragment>
						<LiveIcon /> <span>LIVE</span>{' '}
					</Fragment>
				)}
			</WebinarTime>
			<Content>{description}</Content>
			<BtnContainer>
				<Button styles={{ color: _PURPLE }}>{'Запланировать'}</Button>
			</BtnContainer>
		</Wrapper>
	)
}

export default Tracker
