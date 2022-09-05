import styled from 'styled-components'
import { H1, Paragraph } from 'pagecomponents/Main/CommonComponents'
import { _DARK_GRAY_2, _LIGHT_BLUE, _PURPLE_1, _YELLOW } from 'styles/variables'
import Image from 'next/future/image'

type Props = {}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`

const HeaderContainer = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	padding: 8px 16px 16px;
`

const Header = styled.h1`
	font-weight: 700;
	font-size: 14px;
	line-height: 24px;
	color: ${_DARK_GRAY_2};
	&:first-of-type {
		margin-right: 32px;
	}
	&:nth-of-type(2) {
		margin-right: auto;
	}
`

const UserRank = styled.div<{ textColor: number }>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 32px;
	height: 32px;
	background: #ffffff;
	border-radius: 8px;
	color: ${(p) => (p.textColor === 1 ? _LIGHT_BLUE : p.textColor === 2 ? _PURPLE_1 : _DARK_GRAY_2)};
	margin-right: 38px;
`

const User = styled.div<{ bgColor: number }>`
	display: flex;
	align-items: center;
	width: 100%;
	padding: 12px 16px;
	background-color: ${(p) =>
		p.bgColor === 0
			? _YELLOW
			: p.bgColor === 1
			? _LIGHT_BLUE
			: p.bgColor === 2
			? _PURPLE_1
			: _DARK_GRAY_2};
	color: #fff;
	border-radius: 16px;
	margin-bottom: 8px;
	img {
		border-radius: 100px;
		margin-right: 16px;
		overflow: hidden;
	}
	${UserRank} {
		img {
			margin: 0;
		}
	}
`

const UserText = styled.span`
	font-weight: 700;
	font-size: 16px;
	line-height: 24px;
	&:first-of-type {
		margin-right: auto;
	}
`

const MobileRanking = (props: Props) => {
	return (
		<Wrapper>
			<H1>Рейтинг пользователей</H1>
			<Paragraph>Проходите наши трекеры , становитесь лучшим и получайте подарки</Paragraph>
			<HeaderContainer>
				<Header>РАНГ</Header>
				<Header>ПОЛЬЗОВАТЕЛЬ</Header>
				<Header>ОЧКИ</Header>
			</HeaderContainer>
			{arr.map((i, index) => (
				<User key={i.username} bgColor={index}>
					<UserRank textColor={index}>
						{index === 0 ? (
							<Image src={'/crown.svg'} alt='' width={25} height={23} />
						) : (
							'0' + (index + 1)
						)}
					</UserRank>
					<Image src={`/${i.avatar}.png`} alt='' width={32} height={32} />
					<UserText>{i.username}</UserText>
					<UserText>{i.points}</UserText>
				</User>
			))}
		</Wrapper>
	)
}

const arr = [
	{
		avatar: 'ava',
		username: 'Satoshi',
		points: 267,
	},
	{
		avatar: 'ava',
		username: 'Askar Duisembin',
		points: 213,
	},
	{
		avatar: 'ava',
		username: 'keiley007',
		points: 201,
	},
	{
		avatar: 'ava',
		username: '06-Atyrau',
		points: 197,
	},
	{
		avatar: 'ava',
		username: 'Akpantokpankoja',
		points: 157,
	},
]

export default MobileRanking
