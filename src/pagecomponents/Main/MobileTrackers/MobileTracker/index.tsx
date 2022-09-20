import { useEffect, useState } from 'react'
import { getDocs, collection, Timestamp } from 'firebase/firestore'
import TrackerCard from 'src/pagecomponents/Main/TrackerCard'
import { db } from 'src/utils/firebaseConfig'
import { Wrapper, Trackers, TrackerName } from './style'

type Props = {
	title: string
	country: string
}

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
