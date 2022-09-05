import { MouseEvent } from 'react'
import { GrGoogle } from 'react-icons/gr'
import { SiApple, SiTwitter } from 'react-icons/si'
import { TbBrandMeta } from 'react-icons/tb'
import styled from 'styled-components'
import Button from 'components/Button'
import { _BLACK, _DARK_GRAY, _PURPLE } from 'styles/variables'

const Wrapper = styled.div`
	z-index: 2;
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: #0000003D;
`

const Container = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 75vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: #fff;
	padding: 24px 16px;
	border-radius: 24px 24px 0px 0px;
	button {
		margin-bottom: 16px;
		height: 48px;
		&:first-of-type {
			svg {
				transform: translateY(-2px);
				margin-right: 10px;
			}
		}
		&:nth-of-type(2), &:nth-of-type(4) {
			svg {
				transform: translateY(-1px);
				margin-right: 10px;
				font-size: 14px;
			}
		}
		&:nth-of-type(3) {
			svg {
				transform: translateY(0);
				font-size: 18px;
			}
		}
	}
`

const Slide = styled.span`
	width: 120px;
	height: 4px;
	border-radius: 8px;
	background-color: ${_DARK_GRAY};
	margin-bottom: 32px;
`

const H1 = styled.h1`
	font-weight: 700;
	font-size: 14px;
	line-height: 24px;
	color: #000000;
	margin-bottom: 40px;
`

type Props = {
	close: any
}

const MoreOptionsModal:React.FC<Props> = ({ close }) => {
	const preventClick = (e: MouseEvent) => e.stopPropagation()
	const closeModal = (e: MouseEvent) => {
		e.stopPropagation()
		close()
	}

	return (
		<Wrapper onClick={closeModal}>
			<Container onClick={preventClick}>
				<Slide />
				<H1>ВСЕ СПОСОБЫ</H1>
					<Button styles={{ color: _BLACK }}>
						<SiApple />
						Войти через Apple
					</Button>
					<Button styles={{ color: _PURPLE }}>
						<GrGoogle />
						Войти через Google
					</Button>
					<Button styles={{ color: 'transparent', border: _PURPLE }}>
						<TbBrandMeta /> Войти через Facebook
					</Button>
					<Button styles={{ color: 'transparent', border: _PURPLE }}>
						<SiTwitter /> Войти через Twitter
					</Button>
			</Container>
		</Wrapper>
	)
}

export default MoreOptionsModal