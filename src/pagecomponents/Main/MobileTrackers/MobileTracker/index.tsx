import { useEffect, useState } from 'react'
import { getDocs, collection, Timestamp, query, limit, orderBy, startAfter } from 'firebase/firestore'
import TrackerCard from 'src/pagecomponents/Main/TrackerCard'
import { db } from 'src/utils/firebaseConfig'
import { Wrapper, Trackers, TrackerName } from './style'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { showTracker } from 'store/slices/trackerSlice'

type Props = {
	title: string
	country: string
}

const MobileTracker: React.FC<Props> = ({ title, country }) => {
	const dispatch = useAppDispatch()
	const [stages, setStages] = useState<any[]>([])
	const user = useAppSelector(state => state.userSlice.stage)
	const userTracker = user.slice(0, -2)
	const userStage = parseInt(user.slice(-1) || '0')

	//GET STAGES OF TRACKER
	useEffect(() => {
		const showData = async () => {
			let d: any = []
			const col = collection(db, `trackers/${title}/stages`)
			const trackerStages = await getDocs(query(col, orderBy('id')))
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

	// SET STAGE OF USER
	// useEffect(() => {
	// 	userTracker === title && dispatch(showTracker({ stage: stages.find(i => i.id === userStage)}))
	// }, [dispatch, stages, title, userStage, userTracker])

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
