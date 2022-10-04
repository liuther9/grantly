import { Fragment, useEffect } from 'react'
import { FiCalendar, FiChevronLeft } from 'react-icons/fi'
import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri'
import Button from 'components/Button'
import Player from './Player'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { showTracker } from 'store/slices/trackerSlice'
import { _PURPLE } from 'styles/variables'
import {
	WebinarTime,
	Wrapper,
	BtnContainer,
	Content,
	LiveIcon,
	H1,
	Step,
	TopContainer,
	NavContainer,
	Btn,
} from './style'

type Props = {
	width: number
}

const Tracker: React.FC<Props> = ({ width }) => {
	const dispatch = useAppDispatch()
	const stageState = useAppSelector((state) => state.trackerSlice)
	const { title, name, live, description, date, id } = { ...stageState.stage }
	const tracker = useAppSelector((state) => state.trackersSlice.trackers).find(i => i.title === title)

	useEffect(() => {
		const body = document.querySelector('body')
		if (body && width < 960) body.style.overflow = 'hidden'
		return () => {
			if (body && width < 960) body.style.overflow = 'auto'
		}
	}, [width])

	const handleClick = (next: boolean) => id && dispatch(showTracker({ stage: tracker?.stages.find((i) => i.id === (next ? id + 1 : id - 1)) }))

	return (
		<Wrapper>
			<TopContainer>
				<FiChevronLeft onClick={() => dispatch(showTracker({ show: false }))} />
				<Step>{name}</Step>
			</TopContainer>
			<Player url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
			<H1>{description}</H1>
			<WebinarTime>
				{!live && (
					<Fragment>
						<FiCalendar />
						{date}
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
				{id !== 1 && (
					<Btn onClick={() => handleClick(false)}>
						<RiArrowLeftLine />
					</Btn>
				)}
				{id !== 19 && (
					<Btn onClick={() => handleClick(true)}>
						<RiArrowRightLine />
					</Btn>
				)}
			</NavContainer>
			<BtnContainer>
				<Button styles={{ color: _PURPLE }}>{'Запланировать'}</Button>
			</BtnContainer>
		</Wrapper>
	)
}

export default Tracker
