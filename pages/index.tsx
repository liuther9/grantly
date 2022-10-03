import type { GetServerSidePropsContext, NextPage } from 'next'
import { Fragment, useEffect, useState } from 'react'
import styled from 'styled-components'
// import firebase
import { db } from 'src/utils/firebaseConfig'
import { collection, doc, getDoc, getDocs, Timestamp } from 'firebase/firestore'
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
import Spinner from 'components/Spinner'
// Functions and utils
import useWindowSize from 'src/helpers/useWindowSize'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { setOtherTrackers, setTrackers } from 'store/slices/trackersSlice'
import { showTracker } from 'store/slices/trackerSlice'
import { setAnnouncements } from 'store/slices/announcementsSlice'
// Style
import { _MOBILE } from 'styles/variables'

const Wrapper = styled.section<{ desktop: boolean }>`
	display: flex;
	flex-direction: column;
	width: ${(p) => (p.desktop ? 'calc(100vw - 264px)' : '100%')};
	align-self: ${(p) => (p.desktop ? 'flex-end' : 'center')};
	@media (max-width: ${_MOBILE}) {
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
	const userTracker = user.stage.slice(0, -2)
	const [tracker, setTracker] = useState(userTracker || '')
	const [desktopCategory, setDesktopCategory] = useState('trackers')
	const [loading, setLoading] = useState(false)
	const [announcementsLoading, setAnnouncementsLoading] = useState(false)
	const announcements = useAppSelector(state => state.announcementsSlice)

	//GET ANNOUNCEMENTS
	useEffect(() => {
		const getData = async () => {
			setAnnouncementsLoading(true)
			const data = await getDocs(collection(db, 'announcements'))
			data.forEach(item => dispatch(setAnnouncements(item.data())))
			setAnnouncementsLoading(false)
		}
		getData()
	}, [dispatch])

	// GET TRACKERS
	useEffect(() => {
		const getAllTrackers = async () => {
			const fetchedTrackers = await getDocs(collection(db, 'trackers'))
			fetchedTrackers.forEach(
				(item) => dispatch(setTrackers(item.data()))
				// user.trackers?.includes(item.id)
				// 	? dispatch(setTrackers(item.data()))
				// 	: dispatch(setOtherTrackers(item.data()))
			)
		}
		getAllTrackers()
	}, [dispatch, user.trackers])

	//GET LAST VISITED STAGE AND TRACKER
	useEffect(() => {
		if (user.stage.length !== 0) {
			const userTracker = user.stage.slice(0, -2)
			const userStage = user.stage.slice(-1)
			const getStage = async () => {
				setLoading(true)
				const theDoc = await getDoc(doc(db, `trackers/${userTracker}/stages/${userStage}`)).finally(
					() => setLoading(false)
				)
				const stageRef = theDoc.data()
				const date =
					stageRef &&
					new Timestamp(stageRef['date']['seconds'], stageRef['date']['nanoseconds'])
						.toDate()
						.toLocaleString('ru-RU')
				const stage = { ...stageRef, date }

				dispatch(showTracker({ stage }))
			}
			getStage()
			setTracker(userTracker)
		}
	}, [dispatch, user.stage])

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
					{desktopCategory === 'trackers' &&
						tracker.length > 0 &&
						trackers.map(
							(item) =>
								item.title === tracker && (
									<MobileTracker key={item.title} title={item.title} country={item.name} />
								)
						)}
					{loading && <Spinner />}
					{desktopCategory === 'trackers' && <Tracker />}
					{desktopCategory === 'otherTrackers' && <DesktopOtherTrackers />}
					{desktopCategory === 'announcement' && <DesktopAnnouncements announcements={announcements} loading={announcementsLoading} />}
				</Fragment>
			)}
			{width < 960 && (
				<Fragment>
					<MobileTrackers trackers={trackers} loading={loading} />
					<MobileAnnouncement width={width} announcements={announcements} loading={announcementsLoading} />
					<MobileRanking />
					{show && <Tracker />}
				</Fragment>
			)}
		</Wrapper>
	)
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
	try {
		console.log(ctx.req.cookies['auth'])
		// const cookies = Cookies.get(ctx);
		// const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);

		// // the user is authenticated!
		// const { uid, email } = token;

		// FETCH STUFF HERE!! 🚀

		return {
			props: { message: `Your email is ${'email'} and your UID is ${'uid'}.` },
		}
	} catch (err) {
		// either the `token` cookie didn't exist
		// or token verification failed
		// either way: redirect to the login page
		ctx.res.writeHead(302, { Location: '/login' })
		ctx.res.end()

		// `as never` prevents inference issues
		// with InferGetServerSidePropsType.
		// The props returned here don't matter because we've
		// already redirected the user.
		return { props: {} as never }
	}
}

export default Main
