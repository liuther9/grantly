import { ReactNode } from 'react'
import { SiGooglecalendar } from 'react-icons/si'
import InfoItem from './InfoItem'
import { H1, Section } from './style'

type Props = {
	children?: ReactNode
}

const DesktopSection: React.FC<Props> = () => {
	return (
		<Section>
			<H1>Steply Academy</H1>
			<InfoItem
				text={'Образовательный стриминг - вещаем в прямом эфире'}
				icon={<SiGooglecalendar />}
			/>
			<InfoItem
				text={'Трекеры твоего поступления - подай свою первую заявку на грант вместе с steply'}
				icon={<SiGooglecalendar />}
			/>
			<InfoItem
				text={'Маркетплейс преподавателей, экспертов и сервисов - найди то что нужно именно тебе'}
				icon={<SiGooglecalendar />}
			/>
		</Section>
	)
}

export default DesktopSection
