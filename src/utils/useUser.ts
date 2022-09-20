import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { getDoc, doc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { db, initFirebase } from 'src/utils/firebaseConfig'
import { mapUserData } from 'src/utils/mapUserData'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { setUser } from 'store/slices/userSlice'

initFirebase()

const useUser = () => {
	const dispatch = useAppDispatch()
	const userState = useAppSelector(state => state.userSlice)
	const router = useRouter()
	const auth = getAuth()

	const logout = async () => {
		try {
			await auth.signOut()
			router.push('/welcome')
		} catch (e: any) {
			console.log(e.message)
		}
	}

	useEffect(() => {
		const cancelAuthListener = auth.onIdTokenChanged(async (user) => {
			if (user) {
				const userData = mapUserData(user)
				const userFromDb = await getDoc(doc(db, 'users', userData.id))
				const foundUser = userFromDb.data()
				const mergedUserData = { ...userData, ...foundUser }

				dispatch(setUser(mergedUserData))
			} else {
				dispatch(setUser(null))
			}
		})

		const userR = auth.currentUser && mapUserData(auth.currentUser)
		if (!userR) router.push('/welcome')
		else {
			const func = async () => {
				const userFromDb = await getDoc(doc(db, 'users', userR.id))
				const foundUser = userFromDb.data()
				dispatch(setUser({ ...userR, ...foundUser }))
				router.push('/')
			}
			func()
		}
		
		return () => {
			cancelAuthListener()
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return [ userState, logout ]
}

export { useUser }
