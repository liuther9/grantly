import type { NextPage } from 'next'
import Image from 'next/future/image'
import { ChangeEvent, Fragment, useState } from 'react'
import styled from 'styled-components'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import NumberFormat from 'react-number-format'
import { _LIGHT_GRAY, _PURPLE } from 'styles/variables'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { setQuestionnaire } from 'store/slices/questionnaireSlice'
import Button from 'components/Buttons'
import CardComponent from './CardComponent'
import Spacer from 'components/Spacer'
import SuccessModal from './SuccessModal'

const ProgressBar = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	width: calc(100% - 26px);
	height: 8px;
	border-radius: 8px;
	background: ${_LIGHT_GRAY};
	span {
		position: absolute;
		left: 0;
		top: 0;
		width: ${(props: { percent: number }) => props.percent + '%'};
		height: 100%;
		border-radius: 8px;
		background-color: ${_PURPLE};
		transition: all 0.1s linear;
	}
`

const TopContainer = styled.section`
	position: sticky;
	z-index: 1;
	top: 44px;
	left: 0;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #FFFFFF;
	padding: 30px 16px 10px;
	margin-bottom: 20px;
	svg {
		font-size: 24px;
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

const ImgContainer = styled.div`
	position: relative;
	width: calc(100% - 32px);
	min-height: 160px;
	margin: 0 auto 16px;
`

const Questionnaire: NextPage = () => {
	const [percent, setPercent] = useState(0)
	const [showModal, setModal] = useState(false)
	const answers = useAppSelector((state) => state.questionnaireSlice)
	const dispatch = useAppDispatch()

	return (
		<Fragment>
			<TopContainer>
				<MdKeyboardArrowLeft />
				<ProgressBar percent={percent}>
					<span></span>
				</ProgressBar>
			</TopContainer>

			<ImgContainer>
				<Image src={'/hatsup.png'} alt='опросник' fill style={{ objectFit: 'contain' }} />
			</ImgContainer>

			<CardComponent question='Ваш аккаунт Instagram' cardName='instagram' />
			<CardComponent question='Ваш город' cardName='city' />
			<CardComponent question='Ваше имя' cardName='name' />
			<CardComponent question='Ваше имя' cardName='name' customInput>
				<NumberFormat
					spellCheck="false" 
					autoComplete='off'
					autoCapitalize='off'
					name='birthdate'
					value={answers.birthdate}
					onChange={(e:ChangeEvent<HTMLInputElement>) => dispatch(setQuestionnaire({ birthdate: e.target.value }))}
					format="##/##/####"
					placeholder="DD/MM/YYYY"
					mask={['D', 'D', 'M', 'M', 'Y', 'Y', 'Y', 'Y']}
					required
				/>
			</CardComponent>
			<ButtonContainer>
				<Button
					disabled
					onClick={() => console.log(123)}
					styles={{
						color: 'transparent',
						border: _PURPLE,
					}}
				>
					Назад
				</Button>
				<Spacer height={8} width={8} />
				<Button
					onClick={() => setModal(true)}
					styles={{ color: _PURPLE }}
				>
					Готово
				</Button>
			</ButtonContainer>
			{showModal && <SuccessModal isOpen={showModal} setOpen={setModal} />}
			<button onClick={() => setPercent(percent < 100 ? percent + 10 : 100)}></button>
		</Fragment>
	)
}

export default Questionnaire
