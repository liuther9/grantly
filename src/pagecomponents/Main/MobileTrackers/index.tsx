import Spinner from 'components/Spinner'
import styled from 'styled-components'
import { ITracker } from 'types/index'
import { Paragraph } from 'src/pagecomponents/Main/CommonComponents'
import MobileTracker from './MobileTracker'

type Props = {
	trackers: ITracker[]
	loading: boolean
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

const MobileTrackers: React.FC<Props> = ({ trackers, loading }) => {
	console.log(trackers)
	return (
		<Wrapper>
			<H1>Трекеры</H1>
			<Paragraph>Подключайся к эфирам, проходи этап за этапом, продвигаясь по трекеру</Paragraph>
			{loading && <Spinner />}
			{trackers &&
				trackers.map((tracker) => (
					<MobileTracker key={tracker.title} tracker={tracker} />
				))}
		</Wrapper>
	)
}

export default MobileTrackers
