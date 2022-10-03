import styled from 'styled-components'
import { H1, Paragraph } from 'pagecomponents/Main/CommonComponents'
import AnnouncementCard from 'pagecomponents/Main/AnnouncementCard'
import { IAnnouncement } from 'types/index'
import Spinner from 'components/Spinner'

type Props = {
	width: number
	announcements: IAnnouncement[]
	loading: boolean
}

const Wrapper = styled.div<{ wide: boolean }>`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin: 8px 0 48px;
	${Paragraph} {
		width: 244px;
	}
`

const Container = styled.div`
	display: flex;
	align-items: center;
	overflow-x: auto;
	overflow-y: hidden;
	padding: 10px 0;
	&& > div {
		margin-left: 16px;
	}
`

const MobileAnnouncement: React.FC<Props> = ({ width, announcements, loading }) => {
	return (
		<Wrapper wide={width > 768}>
			<H1>Анонс</H1>
			<Paragraph>Будьте одним из первых, кто добавит этот трекер</Paragraph>
			{loading && <Spinner />}
			<Container>
				{announcements.map((i) => (
					<AnnouncementCard card={i} key={i.id} />
				))}
			</Container>
		</Wrapper>
	)
}

export default MobileAnnouncement
