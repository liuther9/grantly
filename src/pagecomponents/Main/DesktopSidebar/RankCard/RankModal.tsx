import MobileRanking from 'pagecomponents/Main/MobileRanking'
import styled from 'styled-components'

const Wrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #00000066;
`
const Container = styled.div`
	display: flex;
	overflow: hidden;
	border-radius: 20px;
	padding: 20px;
	background-color: #fff;
`

const RankModal: React.FC<any> = ({ setModal }) => {
	const close = (e:any) => {
		e.stopPropagation()
		setModal(false)
	}

	const stopClick = (e:any) => {
		e.preventDefault()
		e.stopPropagation()
	}

	return (
		<Wrapper onClick={close}>
			<Container onClick={stopClick}>
				<MobileRanking />
			</Container>
		</Wrapper>
	)
}

export default RankModal