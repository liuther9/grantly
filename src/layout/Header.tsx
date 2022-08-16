import styled from "styled-components"
import { FiCalendar, FiUser } from 'react-icons/fi'
import { LIGHT_PURPLE } from "styles/variables"
import Image from "next/image"

const StyledHeader = styled.header`
	width: 100%;
	height: 64px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: ${LIGHT_PURPLE};
	padding: 16px;
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

const Header: React.FC<any> = ({ userImg }) => {
	return (
		<StyledHeader>
			<FiCalendar />
			<ImgContainer>
				{ userImg
					? <Image src={userImg} alt='' width={32} height={32} />
					: <FiUser size={24} />
				}
			</ImgContainer>
		</StyledHeader>
	)
}

export default Header