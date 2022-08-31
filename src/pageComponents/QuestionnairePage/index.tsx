import { ChangeEvent, Fragment, useState } from 'react'
import styled from 'styled-components'
import NumberFormat from 'react-number-format'
import { _LIGHT_GRAY, _PURPLE, _TABLET } from 'styles/variables'
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

const Wrapper = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 648px;
	height: 100%;
	@media (max-width: ${_TABLET}) {
		width: 100%;
	}
`

const ButtonContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: 16px;
	background: transparent;
	&:first-child {
		margin-right: 8px;
	}
`

const ProfContainer = styled.div`
	max-height: 92px;
	width: 100%;
	display: flex;
	flex-direction: column;
	overflow: scroll;
	margin-bottom: 16px;
`
const BottomBorder = styled.div`
	width: 100%;
	height: 2px;
	background-color: ${_PURPLE};
`

const sex = [
	{
		title: 'Мужчина',
		value: 'male'
	},
	{
		title: 'Женщина',
		value: 'female'
	},
	{
		title: 'Не хочу отвечать',
		value: 'other'
	},
]

const QuestionnairePage = () => {
	const [percent, setPercent] = useState(0)
	const [page, setPage] = useState(1)
	const [showModal, setModal] = useState(false)
	const [professions, setProfessions] = useState(['ИТ-специалист', 'Бухгалтер', 'Дворник', '3Д-специалист', 'Творчество', 'Художник', 'Сфера обучении', 'Летчик', 'Силовые работы'])
	const answers = useAppSelector((state) => state.questionnaireSlice)
	const chosenSex = answers.sex
	const dispatch = useAppDispatch()

	const nextBtn = () => {
		if (percent < 100) {
			setPercent(percent + 100)
			setPage(2)
		} else setModal(true)
	}

	const backBtn = () => {
		setPercent(percent - 100)
		setPage(1)
	}

	return (
		<Wrapper>
			{page === 1 && (
				<Greeting
					title={'Хэй, Асанали!'}
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
							checked={i.value === chosenSex}
						/>)}
					</CardComponent>
				</Fragment>
			)}

			{page === 2 && (
				<Fragment>
					<CardComponent question={'В каких олимпиадах участвовали?'} cardName={'olymps'} customInput>
						<ProfContainer>{professions.map(prof => <CheckBox value={prof} key={prof} />)}</ProfContainer>
						<input placeholder='Свои варианты'/>
						<BottomBorder />
					</CardComponent>
					<CardComponent question={'В каких олимпиадах участвовали?'} cardName={'olymps'} />
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
					disabled={page === 1}
				>
					Назад
				</Button>
				<Spacer height={8} width={8} />
				<Button onClick={nextBtn} styles={{ color: _PURPLE }}>
					{percent < 100 ? 'Далее' : 'Готово'}
				</Button>
			</ButtonContainer>
			{showModal && <SuccessModal isOpen={showModal} setOpen={setModal} />}
		</Wrapper>
	)
}

export default QuestionnairePage
