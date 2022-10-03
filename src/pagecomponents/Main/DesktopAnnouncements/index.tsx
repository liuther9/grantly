import styled from 'styled-components'
import { IAnnouncement } from 'types/index'
import AnnouncementCard from 'src/pagecomponents/Main/AnnouncementCard'

type Props = {
	announcements: IAnnouncement[]
}

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	padding-left: 19px;
	overflow-y: hidden;
	overflow-x: auto;
`

const DesktopAnnouncements: React.FC<Props> = ({ announcements }) => {
	return (
		<Wrapper>
			{announcements.map((i) => (
				<AnnouncementCard key={i.id} card={i} />
			))}
		</Wrapper>
	)
}

export default DesktopAnnouncements
