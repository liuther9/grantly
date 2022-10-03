import { FiUsers } from 'react-icons/fi'
import Image from 'next/future/image'
import styled from 'styled-components'
import { _LIGHT_GRAY, _MOBILE } from 'styles/variables'
import { Btn } from 'pagecomponents/Main/CommonComponents'
import { IAnnouncement } from 'types/index'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { db } from 'src/utils/firebaseConfig'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { setVote } from 'store/slices/announcementsSlice'

type Props = {
	card: IAnnouncement
}

const Card = styled.div`
	display: flex;
	flex-direction: column;
	width: 280px;
	height: 420px;
	background: linear-gradient(94.75deg, #4b4b4b 3.26%, #212121 95.87%);
	border-radius: 24px;
	margin-right: 16px;
	img {
		margin: 8px 8px 24px;
		border-radius: 16px;
	}
	@media (max-width: ${_MOBILE}) {
		margin-right: 0;
	}
`

const CardBotContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	flex: 1;
	padding: 0 24px 32px;
`

const CardH1 = styled.h1`
	font-weight: 700;
	font-size: 20px;
	line-height: 24px;
	color: #fff;
	margin-bottom: 8px;
	white-space: nowrap;
	img {
		margin-left: 8px;
		margin-bottom: -1px;
		border-radius: 0;
	}
`

const CardDate = styled.span`
	color: ${_LIGHT_GRAY};
	font-size: 12px;
	line-height: 16px;
	display: flex;
	align-items: center;
	margin-bottom: 16px;
	svg {
		margin-right: 5px;
	}
`

const CardDesc = styled.p`
	width: 200px;
	color: ${_LIGHT_GRAY};
	font-size: 12px;
	line-height: 16px;
	margin-bottom: auto;
`
const AnnouncementCard: React.FC<Props> = ({
	card: { name, id, description, maxUsers, votes },
}) => {
	const dispatch = useAppDispatch()
	const user = useAppSelector((state) => state.userSlice)
	const vote = async () => {
		if (!votes.includes(user.id)) {
			dispatch(setVote({ id, user: user.id }))
			await updateDoc(doc(db, `announcements/${id}`), { votes: arrayUnion(user.id) })
		}
	}

	return (
		<Card>
			<Image src={`/usa.png`} alt='' width={264} height={184} />
			<CardBotContainer>
				<CardH1>
					{name}
					<Image src={`/flags/${id}.svg`} alt='' width={24} height={18} />
				</CardH1>
				<CardDate>
					<FiUsers />
					{`${votes.length}/${maxUsers}`}
				</CardDate>
				<CardDesc>{description}</CardDesc>
				<Btn onClick={vote}>Проголосовать</Btn>
			</CardBotContainer>
		</Card>
	)
}

export default AnnouncementCard
