import { FiCalendar } from 'react-icons/fi'
import Image from 'next/future/image'
import styled from 'styled-components'
import { _LIGHT_GRAY, _MOBILE } from 'styles/variables'
import { Btn } from 'pagecomponents/Main/CommonComponents'

type Props = {
	i: any
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
	padding: 0 24px 32px;
`

const CardH1 = styled.h1`
	font-weight: 700;
	font-size: 20px;
	line-height: 24px;
	color: #fff;
	margin-bottom: 8px;
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
	margin-bottom: 24px;
`
const AnnouncementCard: React.FC<Props> = ({ i }) => {
	return (
		<Card key={i.title}>
			<Image src={`/${i.url}.png`} alt='' width={264} height={184} />
			<CardBotContainer>
				<CardH1>
					{i.title}
					<Image src={`/flags/${i.url}.svg`} alt='' width={24} height={18} />
				</CardH1>
				<CardDate>
					<FiCalendar />
					{i.date}
				</CardDate>
				<CardDesc>{i.desc}</CardDesc>
				<Btn>Проголосовать</Btn>
			</CardBotContainer>
		</Card>
	)
}

export default AnnouncementCard
