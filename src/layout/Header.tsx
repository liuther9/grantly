import Image from 'next/future/image'
import styled from 'styled-components'
import { FiUser } from 'react-icons/fi'
import { useAppSelector } from 'store/hooks'
import { _BLACK, _DARK_GRAY, _LIGHT_PURPLE, _TABLET } from 'styles/variables'
import LogoComponent from 'components/LogoComponent'
import { MdOutlineLogout } from 'react-icons/md'
import Button from 'components/Button'

type Props = {
	showHeader: boolean
	userImg?: string
	logout: any
}
const StyledHeader = styled.header<{ showHeader: boolean }>`
	position: sticky;
	position: -webkit-sticky;
	z-index: 2;
	top: 0;
	left: 0;
	width: 100%;
	height: 64px;
	display: ${(p) => (p.showHeader ? 'flex' : 'none')};
	align-items: center;
	justify-content: space-between;
	background-color: ${_LIGHT_PURPLE};
	padding: 16px;
	@media (max-width: ${_TABLET}) {
		display: flex;
	}
`

const RightContainer = styled.div`
	display: flex;
	align-items: center;
	button:first-of-type {
		justify-content: space-between;
		width: 75px;
		svg {
			font-size: 22px;
		}
		margin-right: 10px;
	}
`

const ImgContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: white;
	min-width: 32px;
	max-width: 32px;
	height: 32px;
	overflow: hidden;
	border-radius: 32px;
`

const Header: React.FC<Props> = ({ showHeader, logout }) => {
	const user = useAppSelector((state) => state.userSlice)

	return (
		<StyledHeader showHeader={showHeader}>
			<LogoComponent />
			<RightContainer>
				<Button
					styles={{
						color: 'transparent',
						textColor: _BLACK,
					}}
					onClick={logout}
				>
					Выйти
					<MdOutlineLogout onClick={logout} />
				</Button>
				<ImgContainer>
					{user.id.length !== 0 ? (
						<Image src={user.profilePic} alt='' width={32} height={32} />
					) : (
						<FiUser size={24} />
					)}
				</ImgContainer>
			</RightContainer>
		</StyledHeader>
	)
}

export default Header
