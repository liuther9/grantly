import { useEffect, useState } from 'react'
import { getDocs, collection, Timestamp, query, limit, orderBy, startAfter } from 'firebase/firestore'
import TrackerCard from 'src/pagecomponents/Main/TrackerCard'
import { db } from 'src/utils/firebaseConfig'
import { Wrapper, Trackers, TrackerName } from './style'
import Spinner from 'components/Spinner'
import { useAppDispatch } from 'store/hooks'
import { setStages } from 'store/slices/trackersSlice'
import { ITracker } from 'types/index'

type Props = {
	tracker: ITracker
}

const MobileTracker: React.FC<Props> = ({ tracker: { title, name, stages } }) => {
	const [loading, setLoading] = useState(false)
	const dispatch = useAppDispatch()

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
			dispatch(setStages({ id: title, stages: d }))
		}
		showData()
	}, [dispatch, title])

	return (
		<Wrapper>
			<TrackerName>{name}</TrackerName>
			{loading && <Spinner />}
			<Trackers>
				{stages && stages.map(stage => <TrackerCard key={stage.id} imgUrl={title} country={name} stage={stage} />)}
			</Trackers>
		</Wrapper>
	)
}

export default MobileTracker
