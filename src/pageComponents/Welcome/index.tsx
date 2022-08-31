import { useState } from 'react'
import { SiApple, SiTwitter } from 'react-icons/si'
import { GrGoogle } from 'react-icons/gr'
import { TbBrandMeta } from 'react-icons/tb'
import IntroCarousel from './IntroCarousel'
import Button from 'components/Button'
import MoreOptionsModal from './MoreOptionsModal'
import DesktopSection from './DesktopSection'
import { _BLACK, _GRAY, _LIGHT_GRAY, _PURPLE, _TABLET } from 'styles/variables'
import {
	ButtonContainer,
	Container,
	DesktopDivider,
	Section,
	StyledHeader,
	StyledOtherMethods,
	StyledParagraph,
} from './style'

const WelcomePage = () => {
  const [showModal, setModal] = useState(false)
	return (
		<Container>
			<Section>
				<IntroCarousel slides={slides} />
				<StyledHeader>Grantly Academy</StyledHeader>
				<StyledHeader>Онлайн академия</StyledHeader>
				<StyledParagraph>
					Красавчик! Ты уже сделал свой первый шаг к поступлению в иностранный ВУЗ. Осталось дело за
					малым
				</StyledParagraph>
				<StyledParagraph>Вы можете войти в Grantly Academy любым удобным для вас способом и обучаться
				</StyledParagraph>
				<ButtonContainer>
					<Button styles={{ color: _BLACK }}>
						<SiApple />
						Войти через Apple
					</Button>
					<Button styles={{ color: _PURPLE }}>
						<GrGoogle />
						Войти через Google
					</Button>
				</ButtonContainer>
				<StyledOtherMethods onClick={() => setModal(true)}>Другие способы</StyledOtherMethods>
        { showModal && <MoreOptionsModal close={() => setModal(false)} /> }
        <DesktopDivider>или</DesktopDivider>
        
				<ButtonContainer>
					<Button styles={{ color: 'transparent', border: _PURPLE }}>
						<TbBrandMeta /> Войти через Facebook
					</Button>
					<Button styles={{ color: 'transparent', border: _PURPLE }}>
						<SiTwitter /> Войти через Twitter
					</Button>
				</ButtonContainer>
      </Section>
      
      <DesktopSection />
		</Container>
	)
}

const slides = [
	{
		id: 1,
		title: 'первый слайд',
		url: '/hatsup.png',
	},
	{
		id: 2,
		title: 'second слайд',
		url: '/hatsup.png',
	},
	{
		id: 3,
		title: 'third слайд',
		url: '/hatsup.png',
	},
]

export default WelcomePage
