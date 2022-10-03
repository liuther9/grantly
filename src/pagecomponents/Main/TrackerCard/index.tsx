import Image from 'next/future/image'
import { doc, updateDoc } from 'firebase/firestore'
import { BsClock } from 'react-icons/bs'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { showTracker } from 'store/slices/trackerSlice'
import { IStage } from 'types/index'
import { db } from 'src/utils/firebaseConfig'
import { StyledTime, TimeContainer, Wrapper, BottomContainer, Paragraph, H1, LiveIcon, LiveText } from './style'

type Props = {
	imgUrl: string
	country: string
	stage: IStage
}

const TrackerCard: React.FC<Props> = ({ imgUrl, country, stage }) => {
	const dispatch = useAppDispatch()
	const user = useAppSelector((store) => store.userSlice)
	const { duration, name, description } = stage

	const convertTime = (minutes: number) => {
		const hours = Math.floor(minutes / 60)
		const remainingMinutes = minutes - hours * 60
		return [hours, remainingMinutes]
	}

	const goToStage = async () => {
		dispatch(showTracker({ show: true, stage }))
		await updateDoc(doc(db, 'users', user.id), { stage: `${imgUrl}_${stage.id}` })
	}

	return (
		<Wrapper onClick={goToStage}>
			<H1>
				{name} <Image src={`/flags/${imgUrl}.svg`} alt='turkey' width={24} height={18} />
			</H1>
			<Paragraph>{description}</Paragraph>
			<BottomContainer>
				<TimeContainer>
					<BsClock />
					<StyledTime>
						~ {convertTime(duration)[0]} час {convertTime(duration)[1]} мин.
					</StyledTime>
					{!stage.live && <LiveIcon />}
					{!stage.live && <LiveText>LIVE</LiveText>}
				</TimeContainer>
			</BottomContainer>
		</Wrapper>
	)
}

export default TrackerCard
