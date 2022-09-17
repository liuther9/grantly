import Button from 'components/Button'
import styled from 'styled-components'
import { _DARK_GRAY, _PURPLE } from 'styles/variables'
import { Paragraph } from 'pagecomponents/Main/CommonComponents'
import { useAppSelector } from 'store/hooks'
import { Fragment } from 'react'

type Props = {
	category: string
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 24px 0 40px;
`

const H1 = styled.h1`
	font-weight: 700;
	max-width: 519px;
	font-size: 32px;
	line-height: 40px;
	margin-bottom: 8px;
	padding: 0 16px;
`

const BtnContainer = styled.div`
	width: 167.5px;
	margin: 0 16px;
`

const Greetings: React.FC<Props> = ({ category }) => {
	const username = useAppSelector((state) => state.userSlice.name)
	return (
		<Wrapper>
			{category === 'trackers' && (
				<Fragment>
					<H1>Привет, {username}</H1>
					<Paragraph>Скачай разбор про тебя после прохождения анкеты и узнай результаты</Paragraph>
					<BtnContainer>
						<Button styles={{ color: _PURPLE }}>Скачать (PDF)</Button>
					</BtnContainer>
				</Fragment>
			)}
			{category === 'otherTrackers' && (
				<Fragment>
					<H1>{username}, ты можешь добавить себе еще трекеров</H1>
					<Paragraph>Ниже указаны все доступные для тебя трекеры. Выбирай и учись!</Paragraph>
				</Fragment>
			)}
			{category === 'announcement' && (
				<Fragment>
					<H1>{username}, - всё, что тебя ждёт в будущем</H1>
					<Paragraph>Мы для тебя подгатавливаем несколько новых трекеров. Запланируй и юудь в курсе</Paragraph>
				</Fragment>
			)}
		</Wrapper>
	)
}

export default Greetings
