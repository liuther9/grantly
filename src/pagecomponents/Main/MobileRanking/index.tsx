import { useEffect, useState } from 'react'
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore'
import UserComponent from './UserComponent'
import { H1, Paragraph } from 'pagecomponents/Main/CommonComponents'
import { db } from 'src/utils/firebaseConfig'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { Wrapper, Header, HeaderContainer } from './style'
import { IUser } from 'types/index'
import { setRanking } from 'store/slices/rankSlice'
import Spinner from 'components/Spinner'

const MobileRanking = () => {
	const [loading, setLoading] = useState(false)
	const user = useAppSelector((state) => state.userSlice)
	const ranks = useAppSelector((state) => state.rankSlice)
	const dispatch = useAppDispatch()

	useEffect(() => {
		const doit = async () => {
			ranks.length === 0 && setLoading(true)
			const firstUsers = await getDocs(query(collection(db, 'users'), orderBy('score', 'desc'), limit(5)))
			firstUsers.forEach((i) => dispatch(setRanking(i.data())))
			setLoading(false)
		}
		doit()
	}, [dispatch, ranks.length, user])

	return (
		<Wrapper>
			<H1>Рейтинг пользователей</H1>
			<Paragraph>Проходите наши трекеры , становитесь лучшим и получайте подарки</Paragraph>
			<HeaderContainer>
				<Header>РАНГ</Header>
				<Header>ПОЛЬЗОВАТЕЛЬ</Header>
				<Header>ОЧКИ</Header>
			</HeaderContainer>
			{loading && <Spinner />}
			{ranks.map((i: IUser, index: number) => {
				return <UserComponent key={i.id} profile={i} index={index} />
			})}
		</Wrapper>
	)
}

export default MobileRanking
