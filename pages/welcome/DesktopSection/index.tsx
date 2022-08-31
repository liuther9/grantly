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
			<H1>Grantly Academy</H1>
			<InfoItem
				text={'95% наших выпускникову успешно поступают в иностранные ВУЗ-ы'}
				icon={<SiGooglecalendar />}
			/>
			<InfoItem
				text={'60% из выпускников выигрывают грант в заграничные Университеты'}
				icon={<SiGooglecalendar />}
			/>
			<InfoItem
				text={'В Grantly Academy все учителя,- обладатели нескольких наград и проверенные годами'}
				icon={<SiGooglecalendar />}
			/>
		</Section>
	)
}

export default DesktopSection
