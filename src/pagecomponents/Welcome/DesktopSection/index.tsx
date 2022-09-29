import { ReactNode } from 'react'
import { RiMailSendLine, RiUserStarLine } from 'react-icons/ri'
import { TbLivePhoto } from 'react-icons/tb'
import InfoItem from './InfoItem'
import { H1, Section } from './style'

type Props = {
	children?: ReactNode
}

const DesktopSection: React.FC<Props> = () => {
	return (
		<Section>
			<H1>Steply.me</H1>
			<InfoItem
				text={'Образовательный стриминг - вещаем в прямом эфире'}
				icon={<TbLivePhoto />}
			/>
			<InfoItem
				text={'Трекеры твоего поступления - подай свою первую заявку на грант вместе с steply'}
				icon={<RiMailSendLine />}
			/>
			<InfoItem
				text={'Маркетплейс преподавателей, экспертов и сервисов - найди то что нужно именно тебе'}
				icon={<RiUserStarLine />}
			/>
		</Section>
	)
}

export default DesktopSection
