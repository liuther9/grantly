import styled from "styled-components"
import AnnouncementCard from "../AnnouncementCard"

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	padding-left: 19px;
	overflow-x: auto;
`

const DesktopAnnouncements = () => {
	return (
		<Wrapper>{arr.map(i => <AnnouncementCard key={i.title} i={i} />) }</Wrapper>
	)
}

const arr = [
	{
		title: 'США',
		url: 'usa',
		desc: 'Этот трекер вам поможет узнать на какие лучшие ВУЗ-ы можно поступить в CША',
		date: '22.06.2032',
	},
	{
		title: 'Испания',
		url: 'usa',
		desc: 'Поступайте только в самые лучшие ВУЗ-ы в солнечном Испании и запланируйте',
		date: '08.12.2032',
	},
	{
		title: 'Испания!',
		url: 'usa',
		desc: 'Поступайте только в самые лучшие ВУЗ-ы в солнечном Испании и запланируйте',
		date: '08.12.2032',
	},
]

export default DesktopAnnouncements