import Image from 'next/future/image'
import { HiOutlineArrowSmRight } from 'react-icons/hi'
import styled from 'styled-components'
import { useAppSelector } from 'store/hooks'
import { useState } from 'react'
import RankModal from './RankModal'
import { _BLACK } from 'styles/variables'

const Wrapper = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-color: #E6E8FF;
	position: relative;
	border-radius: 12px;
	overflow: hidden;
	padding: 12px;
	margin-bottom: auto;

	&::after {
		content: '';
		position: absolute;
		top: 26px;
		right: -15px;
		width: 80px;
		height: 80px;
		background-color: #BFC5FF;
		border-radius: 80px;
	}
`

const H1 = styled.h1`
	font-weight: 700;
	font-size: 12px;
	line-height: 16px;
	width: 70%;
	color: ${_BLACK};
	margin-bottom: 20px;
`

const ImageWrapper = styled.div`
	z-index: 1;
	position: absolute;
	top: 34px;
	right: -15px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 72px;
	height: 72px;
	border-radius: 72px;
	overflow: hidden;
`

const Btn = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 2px 8px;
	background-color: #fff;
	border: none;
	font-size: 12px;
	line-height: 16px;
	font-weight: 500;
	width: fit-content;
	border-radius: 100px;
	cursor: pointer;
`

const RankCard = () => {
	const firstRank = useAppSelector(state => state.rankSlice)[0]
	const [modal, setModal] = useState(false)

	return <Wrapper>
		<H1>Пользователь {firstRank?.name} занял 1-е место!</H1>
		<Btn onClick={() => setModal(true)}>Посмотреть <HiOutlineArrowSmRight /></Btn>
		<ImageWrapper>
			{firstRank?.profilePic && <Image src={firstRank?.profilePic} alt={''} fill sizes="100vw" />}
		</ImageWrapper>
		{modal && <RankModal setModal={setModal} />}
	</Wrapper>
}

export default RankCard
