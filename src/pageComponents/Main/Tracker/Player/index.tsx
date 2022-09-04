import { IoPlaySharp } from 'react-icons/io5'
import styled from 'styled-components'
import { _LIGHT_GRAY, _TABLET } from 'styles/variables'

type Props = {}

const Wrapper = styled.div`
	width: 100%;
	height: 216px;
	background-color: ${_LIGHT_GRAY};
	border-radius: 24px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 16px;
	@media (max-width: ${_TABLET}) {
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

const Player = (props: Props) => {
	return (
		<Wrapper>
			<Btn>
				<IoPlaySharp />
			</Btn>
		</Wrapper>
	)
}

export default Player
