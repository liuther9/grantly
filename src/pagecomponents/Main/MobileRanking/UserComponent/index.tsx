import Image from 'next/future/image'
import styled from 'styled-components'
import { _LIGHT_BLUE, _PURPLE_1, _DARK_GRAY_2, _YELLOW } from 'styles/variables'
import { IUser } from 'types/index'

type Props = {
	profile: IUser
	index: number
}

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
	max-width: 170px;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	&:first-of-type {
		margin-right: auto;
	}
`
const UserComponent:React.FC<Props> = ({ profile, index }) => {
	return (
		<User bgColor={index}>
		<UserRank textColor={index}>
			{index === 0 ? (
				<Image src={'/crown.svg'} alt='' width={25} height={23} />
			) : (
				'0' + (index + 1)
			)}
		</UserRank>
		{profile.profilePic && <Image src={profile.profilePic} alt='' width={32} height={32} />}
		<UserText>{profile.name}</UserText>
		<UserText>{profile.score}</UserText>
	</User>
	)
}

export default UserComponent