import Button from 'components/Button'
import { Fragment, useState } from 'react'
import { FiCalendar, FiChevronLeft } from 'react-icons/fi'
import { useAppDispatch } from 'store/hooks'
import { showTracker } from 'store/slices/trackerSlice'
import styled from 'styled-components'
import { _DARK_GRAY, _LIGHT_GRAY, _PURPLE, _RED_1, _TABLET } from 'styles/variables'
import Player from './Player'

type Props = {}

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
	@media (max-width: ${_TABLET}) {
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
	@media (max-width: ${_TABLET}) {
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
	@media (max-width: ${_TABLET}) {
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
	@media (max-width: ${_TABLET}) {
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
	@media (max-width: ${_TABLET}) {
		width: 100%;
		padding: 8px 16px;
	}
`
const Tracker = (props: Props) => {
	const [live, setLive] = useState(true)
	const dispatch = useAppDispatch()
	return (
		<Wrapper>
			<TopContainer>
				<FiChevronLeft onClick={() => dispatch(showTracker(false))} />
				<Step>{'1'}-й этап</Step>
			</TopContainer>
			<Player />
			<H1>{'Вебинар об образовании в Турции'}</H1>
			<WebinarTime>
				{live && (
					<Fragment>
						<FiCalendar /> {'Ежедневно в 11:00 (Нур-Султан)'}
					</Fragment>
				)}
				{!live && (
					<Fragment>
						<LiveIcon /> <span>LIVE</span>{' '}
					</Fragment>
				)}
			</WebinarTime>
			<Content>
				{
					'Стипендиальная программа, которая обеспечивает не только финансовую поддержку, но и помогает студентам зачислиться в университет! '
				}
			</Content>
			<BtnContainer>
				<Button
					styles={{
						color: _PURPLE,
					}}
				>
					{'Запланировать'}
				</Button>
			</BtnContainer>
		</Wrapper>
	)
}

export default Tracker
