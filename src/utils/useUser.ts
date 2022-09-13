import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { db, initFirebase } from 'src/utils/firebaseConfig'
import { getAuth } from 'firebase/auth'
import { removeUserCookie, setUserCookie, getUserFromCookie } from 'src/utils/userCookie'
import { mapUserData } from 'src/utils/mapUserData'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { setUser } from 'store/slices/userSlice'
import { getDoc, doc } from 'firebase/firestore'

initFirebase()

const useUser = () => {
	const dispatch = useAppDispatch()
	const userState = useAppSelector(state => state.userSlice)
	const router = useRouter()
	const auth = getAuth()

	const logout = async () => {
		try {
			await auth.signOut()
			removeUserCookie()
			router.push('/welcome')
		} catch (e: any) {
			console.log(e.message)
		}
	}

	useEffect(() => {
		// Firebase updates the id token every hour, this
		// makes sure the react state and the cookie are
		// both kept up to date
		const cancelAuthListener = auth.onIdTokenChanged(async (user) => {
			if (user) {
				const userData = mapUserData(user)
				const userFromDb = await getDoc(doc(db, 'users', userData.id))
				const foundUser = userFromDb.data()
				const mergedUserData = { ...userData, ...foundUser }

				setUserCookie(mergedUserData)
				dispatch(setUser(mergedUserData))
			} else {
				removeUserCookie()
				dispatch(setUser(null))
			}
		})

		const userFromCookie = getUserFromCookie()
		if (!userFromCookie) router.push('/welcome')
		else {
			const func = async () => {
				const userFromDb = await getDoc(doc(db, 'users', userFromCookie.id))
				const foundUser = userFromDb.data()
				dispatch(setUser({ ...userFromCookie, ...foundUser }))
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
