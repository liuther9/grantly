import { useRouter } from 'next/router'
import { useState } from 'react'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { SiApple, SiTwitter } from 'react-icons/si'
import { GrGoogle } from 'react-icons/gr'
import { TbBrandMeta } from 'react-icons/tb'
import IntroCarousel from './IntroCarousel'
import Button from 'components/Button'
import MoreOptionsModal from './MoreOptionsModal'
import DesktopSection from './DesktopSection'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { db } from 'src/utils/firebaseConfig'
import { _BLACK, _PURPLE } from 'styles/variables'
import {
	ButtonContainer,
	Container,
	DesktopDivider,
	Section,
	StyledHeader,
	StyledOtherMethods,
	StyledParagraph,
} from './style'
import { mapUserData } from 'src/utils/mapUserData'
import { setUser } from 'store/slices/userSlice'

const WelcomePage = () => {
	const [showModal, setModal] = useState(false)
	const router = useRouter()
	const state = useAppSelector(state => state.userSlice)
	const dispatch = useAppDispatch()

	const login = () => {
		const provider = new GoogleAuthProvider()
		const auth = getAuth()
		signInWithPopup(auth, provider)
			.then(async (result) => {
				const userRef = doc(db, 'users', result.user.uid)
				const getUser = await getDoc(userRef)
				const userData = mapUserData(result.user)
				if (!getUser.data()) {
					const newUserData = { ...userData, trackers: [], score: 0, stage: 'turkey_1' }
					await setDoc(userRef, newUserData)
					dispatch(setUser(newUserData))
				}
				router.push('/')
			})
			.catch((error) => {
				const errorCode = error.code
				const errorMessage = error.message
				console.error(errorCode, errorMessage)
			})
	}

	return (
		<Container>
			<Section>
				<IntroCarousel slides={slides} />
				<StyledHeader>Steply.me</StyledHeader>
				<StyledHeader>Steply.me</StyledHeader>
				<StyledParagraph>
					Красавчик! Ты уже сделал свой первый шаг к поступлению в иностранный ВУЗ. Осталось дело за
					малым
				</StyledParagraph>
				<StyledParagraph>
					Steply - онлайн помощник в подготовке и подаче документов на стипендии,гранты и программы по всему миру, а также в  выборе специальности и трудоустройстве
				</StyledParagraph>
				{/* ЗДЕСЬ БУДУТ НОВЫЕ МЕТОДЫ ЛОГИНА */}
				<ButtonContainer>
					{/* <Button disabled styles={{ color: _BLACK }} onClick={() => console.log(state)}>
						<SiApple />
						Войти через Apple
					</Button> */}
					<Button styles={{ color: _PURPLE }} onClick={login}>
						<GrGoogle />
						Войти через Google
					</Button>
				</ButtonContainer>
				{/* <StyledOtherMethods onClick={() => setModal(true)}>Другие способы</StyledOtherMethods>
				{showModal && <MoreOptionsModal close={() => setModal(false)} />} 
				<DesktopDivider>или</DesktopDivider>*/}

				<ButtonContainer>
					{/* <Button disabled styles={{ color: 'transparent', border: _PURPLE }}>
						<TbBrandMeta /> Войти через Facebook
					</Button>
					<Button disabled styles={{ color: 'transparent', border: _PURPLE }}>
						<SiTwitter /> Войти через Twitter
					</Button> */}
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
