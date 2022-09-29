import { useEffect, useState } from 'react'
import { getDocs, collection, Timestamp, query, limit, orderBy, startAfter } from 'firebase/firestore'
import TrackerCard from 'src/pagecomponents/Main/TrackerCard'
import { db } from 'src/utils/firebaseConfig'
import { Wrapper, Trackers, TrackerName } from './style'
import Spinner from 'components/Spinner'

type Props = {
	title: string
	country: string
}

const MobileTracker: React.FC<Props> = ({ title, country }) => {
	const [stages, setStages] = useState<any[]>([])
	const [loading, setLoading] = useState(false)

	//GET STAGES OF TRACKER
	useEffect(() => {
		const showData = async () => {
			let d: any = []
			const col = collection(db, `trackers/${title}/stages`)
			setLoading(true)
			const trackerStages = await getDocs(query(col, orderBy('id'))).finally(() => setLoading(false))
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
			{loading && <Spinner />}
			<Trackers>
				{stages.map(stage => <TrackerCard key={stage.id} imgUrl={title} country={country} stage={stage} />)}
			</Trackers>
		</Wrapper>
	)
}

export default MobileTracker
