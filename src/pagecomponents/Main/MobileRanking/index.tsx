import { useEffect, useState } from 'react'
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore'
import UserComponent from './UserComponent'
import { H1, Paragraph } from 'pagecomponents/Main/CommonComponents'
import { db } from 'src/utils/firebaseConfig'
import { useAppSelector } from 'store/hooks'
import { Wrapper, Header, HeaderContainer } from './style'
import { IUser } from 'types/index'

const MobileRanking = () => {
	const user = useAppSelector((state) => state.userSlice.score)
	const [users, setUsers] = useState<any>([])

	useEffect(() => {
		const arr: any = []
		const doit = async () => {
			const userRef = collection(db, 'users')
			const queryFirstUsers = query(userRef, orderBy('score', 'desc'), limit(3))
			const queryLastUser = query(userRef, orderBy('score', 'asc'), limit(1))
			const firstUsers = await getDocs(queryFirstUsers)
			const lastUser = await getDocs(queryLastUser)
			firstUsers.forEach((i) => !arr.find((user:IUser) => user.id === i.data()['id']) && arr.push(i.data()))
			lastUser.forEach((i) => !arr.find((user:IUser) => user.id === i.data()['id']) && arr.push(i.data()))
		}
		doit()
		setUsers(arr)
	}, [])

	return (
		<Wrapper>
			<H1>Рейтинг пользователей</H1>
			<Paragraph>Проходите наши трекеры , становитесь лучшим и получайте подарки</Paragraph>
			<HeaderContainer>
				<Header>РАНГ</Header>
				<Header>ПОЛЬЗОВАТЕЛЬ</Header>
				<Header>ОЧКИ</Header>
			</HeaderContainer>
			{users.map((i:IUser, index: number) => <UserComponent key={i.id} profile={i} index={index} />)}
		</Wrapper>
	)
}

const arr = [
	{
		avatar: 'ava',
		username: 'Satoshi',
		points: 267,
	},
	{
		avatar: 'ava',
		username: 'Askar Duisembin',
		points: 213,
	},
	{
		avatar: 'ava',
		username: 'keiley007',
		points: 201,
	},
	{
		avatar: 'ava',
		username: '06-Atyrau',
		points: 197,
	},
	{
		avatar: 'ava',
		username: 'Akpantokpankoja',
		points: 157,
	},
]

export default MobileRanking
