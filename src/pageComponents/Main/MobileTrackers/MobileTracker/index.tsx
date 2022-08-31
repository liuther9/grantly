import styled from 'styled-components'
import { _DARK_GRAY, _PURPLE } from 'styles/variables'
import TrackerCard from 'src/pagecomponents/Main/TrackerCard'
type Props = {
	country: string
}
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-bottom: 24px;
	&:last-of-type {
		margin-bottom: 0;
	}
`

const TrackerName = styled.h2`
	font-weight: 700;
	font-size: 14px;
	line-height: 24px;
	color: ${_DARK_GRAY};
	margin-bottom: 16px;
	border-radius: 24px;
	padding: 0 16px;
`
const Trackers = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	overflow-x: scroll;
`

const MobileTracker: React.FC<Props> = ({ country }) => {
	let flag = ''
	switch (country) {
		case 'Турция':
			flag = 'turkey'
			break;
		case 'Чехия':
			flag = 'czech'
			break;
		case 'Германия':
			flag = 'germany'
			break;
		case 'Великобритания':
			flag = 'uk'
			break;
	
		default:
			break;
	}
	return (
		<Wrapper>
			<TrackerName>{country}</TrackerName>
			<Trackers>
				<TrackerCard imgUrl={flag} country={country} />
				<TrackerCard imgUrl={flag} country={country} />
				<TrackerCard imgUrl={flag} country={country} />
				<TrackerCard imgUrl={flag} country={country} />
			</Trackers>
		</Wrapper>
	)
}

export default MobileTracker