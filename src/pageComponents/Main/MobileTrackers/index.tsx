import styled from "styled-components"
import MobileTracker from "./MobileTracker"

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-bottom: 48px;
`

const H1 = styled.h1`
	font-weight: 700;
	font-size: 16px;
	line-height: 24px;
	padding: 16px;
`

const MobileTrackers = () => {
	return (
		<Wrapper>
			<H1>Трекеры</H1>
			<MobileTracker country={"Турция"} />
			<MobileTracker country={"Чехия"} />
			<MobileTracker country={"Германия"} />
		</Wrapper>
	)
}

export default MobileTrackers