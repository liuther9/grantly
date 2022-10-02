import { Fragment, useEffect } from 'react'
import { FiCalendar, FiChevronLeft } from 'react-icons/fi'
import Button from 'components/Button'
import Player from './Player'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { showTracker } from 'store/slices/trackerSlice'
import useWindowSize from 'src/helpers/useWindowSize'
import { _PURPLE } from 'styles/variables'
import { WebinarTime, Wrapper, BtnContainer, Content, LiveIcon, H1, Step, TopContainer, NavContainer, Btn } from './style'
import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri'

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
			<NavContainer>
				<Btn><RiArrowLeftLine /></Btn>
				<Btn><RiArrowRightLine /></Btn>
			</NavContainer>
			<BtnContainer>
				<Button styles={{ color: _PURPLE }}>{'Запланировать'}</Button>
			</BtnContainer>
		</Wrapper>
	)
}

export default Tracker
