import { ReactNode } from 'react'
import { _LIGHT_PURPLE, _PURPLE, _LIGHT_GRAY_1, _ORANGE, _BLACK } from 'styles/variables'
import { setQuestionnaire } from 'store/slices/questionnaireSlice'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { CardContainer, CardTitle } from './style'

type Props = {
	question: string,
	cardName: 'instagram' | 'name' | 'city' | 'birthdate' | 'careers' | 'average' | 'olymps' | 'sex'
	customInput?: boolean
	children?: ReactNode
}

const CardComponent: React.FC<Props> = ({ question, cardName, customInput = false, children }) => {
	const answers = useAppSelector((state) => state.questionnaireSlice)
	const dispatch = useAppDispatch()

	return (
		<CardContainer>
			<CardTitle>
				<label htmlFor={cardName}>{question}</label>
			</CardTitle>
			{customInput ? (
				children
			) : (
				<input
					spellCheck='false'
					autoComplete='off'
					autoCapitalize='off'
					placeholder='Введите ваш ответ'
					value={(answers as any)[cardName]}
					onChange={(e) => dispatch(setQuestionnaire({ [cardName]: e.target.value }))}
					name={cardName}
				/>
			)}
		</CardContainer>
	)
}

export default CardComponent
