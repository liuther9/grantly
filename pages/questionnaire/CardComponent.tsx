import { ReactNode } from 'react'
import styled from 'styled-components'
import { _LIGHT_PURPLE, _PURPLE, _LIGHT_GRAY_1, _ORANGE, _BLACK } from 'styles/variables'
import { setQuestionnaire } from 'store/slices/questionnaireSlice'
import { useAppDispatch, useAppSelector } from 'store/hooks'

const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: calc(100% - 32px);
	padding: 24px;
	margin: 0 auto 16px;
	background: ${_LIGHT_PURPLE};
	border: 1px solid ${_PURPLE};
	border-radius: 24px;
	input {
		font-size: 14px;
		line-height: 20px;
		color: ${_BLACK};
		border: none;
		outline: none;
		background: transparent;
		&::placeholder {
			color: ${_LIGHT_GRAY_1};
		}
	}
`
const CardTitle = styled.div`
	position: relative;
	display: flex;
	width: fit-content;
	margin-bottom: 16px;
	label {
		font-weight: 700;
		font-size: 20px;
		line-height: 24px;
		&::after {
			position: absolute;
			content: '*';
			left: 100%;
			top: 0;
			margin-left: 4px;
			color: ${_ORANGE};
		}
	}
`

type Props = {
	question: string,
	cardName: 'instagram' | 'name' | 'city' | 'birthdate' | 'careers' | 'average' | 'olymps'
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
