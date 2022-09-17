import styled from "styled-components"
import { ITracker } from "types/index"
import MobileTracker from "./MobileTracker"

type Props = {
	trackers: ITracker[]
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-bottom: 48px;
`

const H1 = styled.h1`
	font-weight: 700;
	font-size: 16px;
	line-height: 24px;
	padding: 16px;
`

const MobileTrackers: React.FC<Props> = ({ trackers }) => {
	return (
		<Wrapper>
			<H1>Трекеры</H1>
			{trackers && trackers.map(tracker => <MobileTracker key={tracker.title} title={tracker.title} country={tracker.name} />)}
		</Wrapper>
	)
}

export default MobileTrackers