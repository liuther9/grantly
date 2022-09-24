import Image from 'next/future/image'
import { BsClock } from 'react-icons/bs'
import { Btn } from 'pagecomponents/Main/CommonComponents'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { showTracker } from 'store/slices/trackerSlice'
import { StyledTime, TimeContainer, Wrapper, BottomContainer, Paragraph, H1 } from './style'
import { IStage } from 'types/index'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from 'src/utils/firebaseConfig'

type Props = {
	imgUrl: string
	country: string
	stage: IStage
}

const TrackerCard: React.FC<Props> = ({ imgUrl, country, stage }) => {
	const dispatch = useAppDispatch()
	const user = useAppSelector((store) => store.userSlice)
	const { duration, name } = stage

	const convertTime = (minutes: number) => {
		const hours = Math.floor(minutes / 60)
		const remainingMinutes = minutes - hours * 60
		return [hours, remainingMinutes]
	}

	const goToStage = async () =>
		await updateDoc(doc(db, 'users', user.id), { stage: `${imgUrl}_${stage.id}` }).then((res) =>
			dispatch(showTracker({ show: true, stage }))
		)

	return (
		<Wrapper>
			<H1>
				{name} <Image src={`/flags/${imgUrl}.svg`} alt='turkey' width={24} height={18} />
			</H1>
			<Paragraph>Онлайн-вебинар о {country?.replace(/.$/, 'и')}</Paragraph>
			<BottomContainer>
				<Btn onClick={goToStage}>Перейти</Btn>
				<TimeContainer>
					<BsClock />
					<StyledTime>
						{convertTime(duration)[0]} час {convertTime(duration)[1]} мин.
					</StyledTime>
				</TimeContainer>
			</BottomContainer>
		</Wrapper>
	)
}

export default TrackerCard
