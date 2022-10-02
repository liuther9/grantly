import { ChangeEvent, Fragment, useEffect, useState } from 'react'
import NumberFormat from 'react-number-format'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { setQuestionnaire } from 'store/slices/questionnaireSlice'
import Button from 'components/Button'
import CardComponent from './CardComponent'
import Spacer from 'components/Spacer'
import SuccessModal from './SuccessModal'
import ProgressBar from './ProgressBar'
import Greeting from './Greeting'
import Radio from 'components/Radio'
import CheckBox from 'components/CheckBox'
import { _PURPLE } from 'styles/variables'
import { BottomBorder, ButtonContainer, Wrapper, ProfContainer } from './style'
import { useRouter } from 'next/router'
import { doc, setDoc } from 'firebase/firestore'
import { db } from 'src/utils/firebaseConfig'

const QuestionnairePage = () => {
	const router = useRouter()
	const [percent, setPercent] = useState(0)
	const [extraProf, setExtraProf] = useState('')
	const [page, setPage] = useState(1)
	const [showModal, setModal] = useState(false)
	const [disabled, setDisabled] = useState(true)
	const answers = useAppSelector((state) => state.questionnaireSlice)
	const user = useAppSelector((state) => state.userSlice)
	const careers = answers.careers
	const dispatch = useAppDispatch()

	const nextBtn = async () => {
		if (percent < 100) {
			setPercent(percent + 100)
			setPage(2)
		} else {
			extraProf.length !== 0 && dispatch(setQuestionnaire({ careers: [...careers, extraProf]}))
			await setDoc(doc(db, `questionnaire/${user.id}`), answers)
			await setDoc(doc(db, `users/${user.id}`), { questionnaireStatus: 'inProgress' }, { merge: true })
			setModal(true)
		}
	}

	useEffect(() => {
		const { city, careers, average, olymps, sex, instagram, name, birthdate } = answers
		const allowed1 = city.length !== 0 && sex.length !== 0 && name.length !== 0 && instagram.length !== 0 && birthdate.length === 10
		page === 1 && allowed1 && setDisabled(false)
		page === 2 && careers.length !== 0 && olymps.length !== 0 && average.length !== 0 && setDisabled(false)
		page === 2 && (careers.length === 0 || olymps.length === 0 || average.length === 0) && setDisabled(true)
	}, [answers, page])

	const backBtn = () => {
		if (page === 2) {
			setPercent(percent - 100)
			setPage(1)
		} else router.back()
	}

	const setProf = (prof: string) => {
		careers.includes(prof) ? dispatch(setQuestionnaire({ careers: careers.filter(i => i !== prof) })) :
		dispatch(setQuestionnaire({ careers: [...careers, prof] }))
	}

	return (
		<Wrapper>
			{page === 1 && (
				<Greeting
					title={`Хэй, ${user.name}!`}
					text={'Мы зададим тебе несколько вопросов. Постарайся ответить честно'}
				/>
			)}
			{page === 2 && (
				<Greeting
					title={'Еще чуть-чуть...'}
					text={'Мы зададим тебе несколько вопросов. Постарайся ответить честно'}
				/>
			)}

			<ProgressBar percent={percent} count={page} total={2} />

			{page === 1 && (
				<Fragment>
					<CardComponent question='Ваш аккаунт Instagram' cardName='instagram' />
					<CardComponent question='Ваш город' cardName='city' />
					<CardComponent question='Ваше имя' cardName='name' />
					<CardComponent question='Дата рождения' cardName='name' customInput>
						<NumberFormat
							spellCheck='false'
							autoComplete='off'
							autoCapitalize='off'
							name='birthdate'
							value={answers.birthdate}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								dispatch(setQuestionnaire({ birthdate: e.target.value }))
							}
							format='##/##/####'
							placeholder='DD/MM/YYYY'
							mask={['D', 'D', 'M', 'M', 'Y', 'Y', 'Y', 'Y']}
							required
						/>
					</CardComponent>
					<CardComponent question='Ваш пол' cardName='sex' customInput>
						{sex.map(i => <Radio
							key={i.value}
							title={i.title}
							value={i.value}
							onChange={() => dispatch(setQuestionnaire({ sex: i.title }))}
							checked={i.title === answers.sex}
						/>)}
					</CardComponent>
				</Fragment>
			)}

			{page === 2 && (
				<Fragment>
					<CardComponent question={'В каких олимпиадах участвовали?'} cardName={'olymps'} customInput>
						<ProfContainer>
							{professions.map(prof =>
								<CheckBox
									value={prof}
									key={prof}
									onChange={() => setProf(prof)}
									checked={careers.includes(prof) || false}
								/>)
							}
						</ProfContainer>
						<input placeholder='Свои варианты' value={extraProf} onChange={e => setExtraProf(e.target.value)} />
						<BottomBorder />
					</CardComponent>
					<CardComponent question={'Ваш средний балл (в уч. заведении)'} cardName={'average'} />
					<CardComponent question={'В каких олимпиадах участвовали?'} cardName={'olymps'} />
				</Fragment>
			)}
			<ButtonContainer>
				<Button
					onClick={backBtn}
					styles={{
						color: 'transparent',
						border: _PURPLE,
					}}
				>
					Назад
				</Button>
				<Spacer height={8} width={8} />
				<Button onClick={nextBtn} styles={{ color: _PURPLE }} disabled={disabled}>
					{percent < 100 ? 'Далее' : 'Готово'}
				</Button>
			</ButtonContainer>
			{showModal && <SuccessModal isOpen={showModal} setOpen={setModal} />}
		</Wrapper>
	)
}

const professions = ['ИТ-специалист', 'Бухгалтер', 'Дворник', '3Д-специалист', 'Творчество', 'Художник', 'Сфера обучении', 'Летчик', 'Силовые работы']

const sex = [
	{
		title: 'Мужской',
		value: 'male'
	},
	{
		title: 'Женский',
		value: 'female'
	},
	{
		title: 'Не хочу отвечать',
		value: 'other'
	},
]

export default QuestionnairePage
