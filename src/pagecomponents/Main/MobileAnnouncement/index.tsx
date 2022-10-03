import styled from 'styled-components'
import { H1, Paragraph } from 'pagecomponents/Main/CommonComponents'
import AnnouncementCard from 'pagecomponents/Main/AnnouncementCard'
import { _LIGHT_GRAY } from 'styles/variables'
import useWindowSize from 'src/helpers/useWindowSize'
import { useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from 'src/utils/firebaseConfig'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { setAnnouncements } from 'store/slices/announcementsSlice'

type Props = {}

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

const MobileAnnouncement = (props: Props) => {
	const dispatch = useAppDispatch()
	const data = useAppSelector(state => state.announcementsSlice)
	const { width } = useWindowSize()
	console.log(data)

	useEffect(() => {
		const getData = async () => {
			const data = await getDocs(collection(db, 'announcements'))
			data.forEach(item => dispatch(setAnnouncements(item.data())))
		}
		getData()
	}, [dispatch])
	
	return (
		<Wrapper wide={width > 768}>
			<H1>Анонс</H1>
			<Paragraph>Будьте одним из первых, кто добавит этот трекер</Paragraph>
			<Container>
				{data.map((i) => <AnnouncementCard card={i} key={i.id} />)}
			</Container>
		</Wrapper>
	)
}

export default MobileAnnouncement
