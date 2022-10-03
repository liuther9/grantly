import Button from 'components/Button'
import styled from 'styled-components'
import { _DARK_GRAY, _PURPLE } from 'styles/variables'
import { Paragraph } from 'pagecomponents/Main/CommonComponents'
import { useAppSelector } from 'store/hooks'
import { Fragment } from 'react'
import { useRouter } from 'next/router'

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
	const user = useAppSelector((state) => state.userSlice)
	const username = user.name
	const router = useRouter()
	return (
		<Wrapper>
			{category === 'trackers' && (
				<Fragment>
					<H1>Привет, {username}</H1>
					{user.questionnaireStatus === '' && <Paragraph>Ты можешь запросить разбор своего study case и получить персональные рекомендации по поступлению и выборе профессии от наших координаторов</Paragraph>}
					{user.questionnaireStatus === 'inProgress' && <Paragraph>Круто что ты с нами. Скоро тебе будет доступен твой персональный разбор с пошаговыми рекомендациями в PDF формате</Paragraph>}
					<BtnContainer>
						{user.questionnaireStatus === '' && <Button styles={{ color: _PURPLE }} onClick={() => router.push('/questionnaire')}>Заполнить анкету</Button>}
						{user.questionnaireStatus === 'ready' && <Button styles={{ color: _PURPLE }}>Скачать (PDF)</Button>}
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
					<Paragraph>Регистрируйся на новые трекеры. Давай вместе наберем нужное кол-во юзеров для каждого из трекеров для мощного старта</Paragraph>
				</Fragment>
			)}
		</Wrapper>
	)
}

export default Greetings
