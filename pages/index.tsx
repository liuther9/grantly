import type { NextPage } from 'next'
import { Fragment, useEffect, useState } from 'react'
import styled from 'styled-components'
// Components
import MobileAnnouncement from 'pagecomponents/Main/MobileAnnouncement'
import MobileRanking from 'pagecomponents/Main/MobileRanking'
import MobileTracker from 'pagecomponents/Main/MobileTrackers/MobileTracker'
import MobileOtherTrackers from 'pagecomponents/Main/MobileOtherTrackers'
import MobileTrackers from 'pagecomponents/Main/MobileTrackers'
import DesktopSidebar from 'pagecomponents/Main/DesktopSidebar'
import DesktopOtherTrackers from 'pagecomponents/Main/DesktopOtherTrackers'
import DesktopAnnouncements from 'pagecomponents/Main/DesktopAnnouncements'
import Tracker from 'pagecomponents/Main/Tracker'
import Greetings from 'pagecomponents/Main/Greetings'
// Functions and utils
import useWindowSize from 'src/helpers/useWindowSize'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { collection, getDocs } from 'firebase/firestore'
import { db } from 'src/utils/firebaseConfig'
import { setOtherTrackers, setTrackers } from 'store/slices/trackersSlice'
// Style
import { _TABLET } from 'styles/variables'

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
	const trackerState = useAppSelector((state) => state.trackerSlice)
	const { show, stage } = trackerState
	const trackers = useAppSelector((state) => state.trackersSlice.trackers)
	const user = useAppSelector((state) => state.userSlice)
	const [tracker, setTracker] = useState('')
	const [desktopCategory, setDesktopCategory] = useState('trackers')

	useEffect(() => {
		const getAllTrackers = async () => {
			const fetchedTrackers = await getDocs(collection(db, 'trackers'))
			fetchedTrackers.forEach((item) =>
				user.trackers?.includes(item.id)
					? dispatch(setTrackers(item.data()))
					: dispatch(setOtherTrackers(item.data()))
			)
		}
		user.trackers && getAllTrackers()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user.trackers])

	return (
		<Wrapper desktop={width > 960}>
			{width > 960 && (
				<DesktopSidebar
					tracker={tracker}
					setTracker={setTracker}
					category={desktopCategory}
					setCategory={setDesktopCategory}
				/>
			)}
			<Greetings category={desktopCategory} />
			{width > 960 && (
				<Fragment>
					{desktopCategory === 'trackers' && tracker.length > 0 &&
						trackers.map(
							(item) =>
								item.title === tracker && <MobileTracker title={item.title} country={item.name} />
						)}
					{desktopCategory === 'trackers' && stage && <Tracker />}
					{desktopCategory === 'otherTrackers' && <DesktopOtherTrackers />}
					{desktopCategory === 'announcement' && <DesktopAnnouncements />}
				</Fragment>
			)}
			{width < 960 && (
				<Fragment>
					<MobileTrackers trackers={trackers} />
					<MobileOtherTrackers />
					<MobileAnnouncement />
					<MobileRanking />
					{show && <Tracker />}
				</Fragment>
			)}
		</Wrapper>
	)
}

export default Main
