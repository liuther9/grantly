import Image from 'next/future/image'
import styled from 'styled-components'
import { _LIGHT_GRAY, _TABLET } from 'styles/variables'
import { Btn } from 'pagecomponents/Main/CommonComponents'
import { ITracker } from 'types/index'

type Props = {
	otherTracker: ITracker
}

const TrackerContainer = styled.div`
	min-width: 336px;
	max-width: 336px;
	height: 204px;
	display: flex;
	flex-direction: column;
	padding: 32px 24px;
	margin-right: 8px;
	&:last-of-type {
		margin-right: 0;
	}
	border-radius: 24px;
	background: linear-gradient(89.73deg, #4b4b4b 0.31%, #212121 99.84%);
	box-shadow: 0px 12.3603px 24.1177px rgba(0, 0, 0, 0.123802),
		0px 5.13384px 10.0172px rgba(0, 0, 0, 0.095), 0px 1.85681px 3.62304px rgba(0, 0, 0, 0.0661981);
	@media (max-width: ${_TABLET}) {
		margin-right: 0;
	}
`
const TrackerTitle = styled.h1`
	font-weight: 700;
	font-size: 20px;
	line-height: 24px;
	color: #ffffff;
	margin-bottom: 8px;
	img {
		margin-left: 8px;
		margin-bottom: -1px;
	}
`
const TrackerP = styled.p`
	font-size: 12px;
	line-height: 16px;
	width: 226px;
	color: ${_LIGHT_GRAY};
	margin-bottom: 24px;
`
const OtherTracker: React.FC<Props> = ({ otherTracker }) => {
	const { title, description, name } = otherTracker
	return (
		<TrackerContainer>
			<TrackerTitle>
				{name}
				<Image src={`/flags/${title}.svg`} alt='' width={24} height={18} />
			</TrackerTitle>
			<TrackerP>{description}</TrackerP>
			<Btn>Добавить</Btn>
		</TrackerContainer>
	)
}

export default OtherTracker
