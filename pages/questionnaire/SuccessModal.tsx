import Button from 'components/Buttons'
import Image from 'next/future/image'
import { useEffect, SetStateAction, Dispatch, MouseEvent } from 'react'
import styled from 'styled-components'
import { _GRAY, _PURPLE } from 'styles/variables'

const StyledWrapper = styled.div`
	z-index: 3;
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.24);
`

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 280px;
	height: 320px;
	padding: 32px;
	background: #ffffff;
	border-radius: 24px;
	h1 {
		text-align: center;
		font-weight: 700;
		font-size: 16px;
		line-height: 24px;
		color: black;
		margin-bottom: 8px;
	}
	p {
		text-align: center;
		font-size: 14px;
		line-height: 20px;
		color: ${_GRAY};
		margin-bottom: 48px;
	}
`
const ImgContainer = styled.div`
	position: relative;
	width: 80px;
	height: 80px;
	background: #FFFFFF;
	overflow: hidden;
	border-radius: 16px;
	margin-bottom: 16px;
`
type Props = {
	isOpen: boolean
	setOpen: Dispatch<SetStateAction<boolean>>
}

const SuccessModal: React.FC<Props> = ({ isOpen, setOpen }) => {
	const handleOutsideClick = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
		e.stopPropagation()
	}

	const handleSubmit = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
		e.stopPropagation()
		setOpen(false)
	}

	useEffect(() => {
		const body = document.querySelector('body')
		if (body) body.style.overflow = 'hidden'

		return () => {
			if (body) body.style.overflow = 'auto'
		}
	}, [])

	return (
		<StyledWrapper onClick={handleOutsideClick}>
			<StyledContainer onClick={(e) => e.stopPropagation()}>
				<ImgContainer>
					<Image src={'/hatsup.png'} fill alt='user image' style={{ objectFit: 'cover' }} />
				</ImgContainer>
				<h1>Замечательно, Асанали!</h1>
				<p>Теперь ты можешь приступать к обучению</p>
				<Button onClick={handleSubmit} styles={{
					color: _PURPLE,
				}}>Приступить</Button>
			</StyledContainer>
		</StyledWrapper>
	)
}

export default SuccessModal
