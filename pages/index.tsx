import type { NextPage } from 'next'
import { Fragment, useEffect, useState } from 'react'
import styled from 'styled-components'
import MobileAnnouncement from 'pagecomponents/Main/MobileAnnouncement'
import MobileRanking from 'pagecomponents/Main/MobileRanking'
import useWindowSize from 'src/helpers/useWindowSize'
import Greetings from 'src/pagecomponents/Main/Greetings'
import MobileOtherTrackers from 'src/pagecomponents/Main/MobileOtherTrackers'
import MobileTrackers from 'src/pagecomponents/Main/MobileTrackers'
import { _TABLET } from 'styles/variables'
import DesktopSidebar from 'pagecomponents/Main/DesktopSidebar'
import MobileTracker from 'pagecomponents/Main/MobileTrackers/MobileTracker'
import Tracker from 'pagecomponents/Main/Tracker'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { collection, getDocs } from 'firebase/firestore'
import { db } from 'src/utils/firebaseConfig'
import { setTrackers } from 'store/slices/trackersSlice'

const Wrapper = styled.section<{ desktop: boolean }>`
	display: flex;
	flex-direction: column;
	width: ${(p) => (p.desktop ? 'calc(100vw - 264px)' : '100%')};
	align-self: ${(p) => (p.desktop ? 'flex-end' : 'center')};
	@media (max-width: ${_TABLET}) {
		flex-direction: column;
	}
`

const Main: NextPage = () => {
	const { width } = useWindowSize()
	const dispatch = useAppDispatch()
	const showTracker = useAppSelector((state) => state.trackerSlice.show)
	const trackers = useAppSelector(state => state.trackersSlice)
	const user = useAppSelector(state => state.userSlice)
	const [tracker, setTracker] = useState('')

	useEffect(() => {console.log(trackers)} , [trackers])

	useEffect(() => {
		const getAllTrackers = async () => {
			const fetchedTrackers = await getDocs(collection(db, 'trackers'))
			fetchedTrackers.forEach(async tracker => {
				if (user.trackers.includes(tracker.id)) {
					const tdata = tracker.data()
					dispatch(setTrackers(tdata))
				}
			})
		}
		getAllTrackers()
		const showData = async () => {
			const fetchedTrackers = await getDocs(collection(db, 'trackers'))
			fetchedTrackers.forEach(async (tracker) => {
				
				const trackerStages = await getDocs(collection(db, `trackers/${tracker.id}/stages`))
				trackerStages.forEach((stage) => console.log())
			})
		}
		showData()
	}, [user.trackers])
	return (
		<Wrapper desktop={width > 960}>
			{width > 960 && <DesktopSidebar tracker={tracker} setTracker={setTracker} />}
			<Greetings />
			{width > 960 && (
				<Fragment>
					{tracker.length > 0 && <MobileTracker flag={tracker} />}
					<Tracker />
				</Fragment>
			)}
			{width < 960 && (
				<Fragment>
					<MobileTrackers />
					<MobileOtherTrackers />
					<MobileAnnouncement />
					<MobileRanking />
					{showTracker && <Tracker />}
				</Fragment>
			)}
		</Wrapper>
	)
}

export default Main
