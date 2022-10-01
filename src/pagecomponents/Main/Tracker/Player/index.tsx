import { IoPlaySharp } from 'react-icons/io5'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import { _LIGHT_GRAY, _MOBILE } from 'styles/variables'

type Props = {
	url: string
}

const Wrapper = styled.div`
	position: relative;
	width: 100%;
	height: 216px;
	background-color: ${_LIGHT_GRAY};
	border-radius: 24px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 16px;
	overflow: hidden;
	@media (max-width: ${_MOBILE}) {
		width: calc(100% - 32px);
		margin: 0 16px 14px;
	}
`

const Btn = styled.button`
	width: 64px;
	height: 64px;
	border-radius: 64px;
	background: rgba(154, 154, 154, 0.24);
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	svg {
		font-size: 22px;
	}
`

const Player: React.FC<Props> = ({ url }) => {
	return (
		<Wrapper>
			{url.length > 0 && <ReactPlayer url={url} height={216} controls />}
			{url.length === 0 && (
				<Btn>
					<IoPlaySharp />
				</Btn>
			)}
		</Wrapper>
	)
}

export default Player
