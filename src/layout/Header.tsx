import Image from "next/future/image"
import styled from "styled-components"
import { IoLogoReact } from 'react-icons/io5'
import { FiUser } from 'react-icons/fi'
import { useAppSelector } from "store/hooks"
import { _DARK_GRAY, _LIGHT_PURPLE, _TABLET } from "styles/variables"
import LogoComponent from "components/LogoComponent"

type Props = {
	showHeader: boolean,
	userImg?: string,
}
const StyledHeader = styled.header<{ showHeader: boolean }>`
	position: sticky;
	position: -webkit-sticky;
	z-index: 2;
	top: 0;
	left: 0;
	width: 100%;
	height: 64px;
	display: ${p => p.showHeader ? 'flex' : 'none'};
	align-items: center;
	justify-content: space-between;
	background-color: ${_LIGHT_PURPLE};
	padding: 16px;
	@media (max-width: ${_TABLET}) {
		display: flex;
	}
`

const ImgContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: white;
	width: 32px;
	height: 32px;
	overflow: hidden;
	border-radius: 32px;
`

const Header: React.FC<Props> = ({ showHeader }) => {
	const user = useAppSelector(state => state.userSlice)

	return (
		<StyledHeader showHeader={showHeader}>
			<LogoComponent />
			<ImgContainer>
				{ user.id.length !== 0
					? <Image src={user.profilePic} alt='' width={32} height={32} />
					: <FiUser size={24} />
				}
			</ImgContainer>
		</StyledHeader>
	)
}

export default Header