import styled from 'styled-components'
import { _BLACK, _DARK_GRAY, _PURPLE, _TABLET } from 'styles/variables'
import TrackerCard from 'src/pagecomponents/Main/TrackerCard'
import { getDocs, collection, Timestamp } from 'firebase/firestore'
import { db } from 'src/utils/firebaseConfig'
import { useEffect, useState } from 'react'
type Props = {
	title: string
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
	@media (max-width: ${_TABLET}) {
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
	@media (max-width: ${_TABLET}) {
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
	@media (max-width: ${_TABLET}) {
		flex-direction: row;
		align-items: center;
		overflow-y: visible;
		overflow-x: auto;
		padding-left: 0;
	}
`

const MobileTracker: React.FC<Props> = ({ title, country }) => {
	const [stages, setStages] = useState<any[]>([])

	//GET STAGES OF TRACKER
	useEffect(() => {
		const showData = async () => {
			let d: any = []
			const trackerStages = await getDocs(collection(db, `trackers/${title}/stages`))
			trackerStages.forEach((stage) => {
				if (!d.find((i: any) => i.id === stage.data()['id'])) {
					const date = new Timestamp(stage.data()['date']['seconds'], stage.data()['date']['nanoseconds']).toDate().toLocaleString('ru-RU')
					d.push({ ...stage.data(), date })
				}
			})
			setStages(d)
		}
		showData()
	}, [title])

	return (
		<Wrapper>
			<TrackerName>{country}</TrackerName>
			<Trackers>
				{stages.map(stage => <TrackerCard key={stage.id} imgUrl={title} country={country} stage={stage} />)}
			</Trackers>
		</Wrapper>
	)
}

export default MobileTracker
