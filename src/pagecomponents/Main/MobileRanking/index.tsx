import { useEffect } from 'react'
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore'
import UserComponent from './UserComponent'
import { H1, Paragraph } from 'pagecomponents/Main/CommonComponents'
import { db } from 'src/utils/firebaseConfig'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { Wrapper, Header, HeaderContainer } from './style'
import { IUser } from 'types/index'
import { setRanking } from 'store/slices/rankSlice'

const MobileRanking = () => {
	const user = useAppSelector((state) => state.userSlice)
	const ranks = useAppSelector((state) => state.rankSlice)
	const dispatch = useAppDispatch()

	useEffect(() => {
		user.id.length !== 0 && dispatch(setRanking(user))
		const doit = async () => {
			const userRef = collection(db, 'users')
			const firstUsers = await getDocs(query(userRef, orderBy('score', 'desc'), limit(3)))
			const lastUser = await getDocs(query(userRef, orderBy('score', 'asc'), limit(1)))
			firstUsers.forEach((i) => dispatch(setRanking(i.data())))
			lastUser.forEach((i) => dispatch(setRanking(i.data())))
		}
		doit()
	}, [dispatch, user])

	return (
		<Wrapper>
			<H1>Рейтинг пользователей</H1>
			<Paragraph>Проходите наши трекеры , становитесь лучшим и получайте подарки</Paragraph>
			<HeaderContainer>
				<Header>РАНГ</Header>
				<Header>ПОЛЬЗОВАТЕЛЬ</Header>
				<Header>ОЧКИ</Header>
			</HeaderContainer>
			{ranks.map((i: IUser, index: number) => {
				return <UserComponent key={i.id} profile={i} index={index} />
			})}
		</Wrapper>
	)
}

export default MobileRanking
