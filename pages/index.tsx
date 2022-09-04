import type { NextPage } from 'next'
import { Fragment } from 'react'
import MobileAnnouncement from 'pagecomponents/Main/MobileAnnouncement'
import MobileRanking from 'pagecomponents/Main/MobileRanking'
import useWindowSize from 'src/helpers/useWindowSize'
import Greetings from 'src/pagecomponents/Main/Greetings'
import MobileOtherTrackers from 'src/pagecomponents/Main/MobileOtherTrackers'
import MobileTrackers from 'src/pagecomponents/Main/MobileTrackers'
import styled from 'styled-components'
import { _TABLET } from 'styles/variables'
import DesktopSidebar from 'pagecomponents/Main/DesktopSidebar'
import MobileTracker from 'pagecomponents/Main/MobileTrackers/MobileTracker'
import Tracker from 'pagecomponents/Main/Tracker'
import { useAppSelector } from 'store/hooks'

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
	const { width, height } = useWindowSize()
	const showTracker = useAppSelector((state) => state.trackerSlice.show)
	return (
		<Wrapper desktop={width > 960}>
			{width > 960 && <DesktopSidebar />}
			<Greetings />
			{width > 960 && (
				<Fragment>
					<MobileTracker country='Турция' />
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
