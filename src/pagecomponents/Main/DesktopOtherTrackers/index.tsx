import { useAppSelector } from "store/hooks"
import styled from "styled-components"
import OtherTracker from "../OtherTracker"

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	padding-left: 19px;
	overflow-x: auto;
`

const DesktopOtherTrackers = () => {
	const otherTrackers = useAppSelector(state => state.trackersSlice.otherTrackers)
	return (
		<Wrapper>
			{otherTrackers.map(tracker => <OtherTracker otherTracker={tracker} key={tracker.title} />)}
		</Wrapper>
	)
}

export default DesktopOtherTrackers