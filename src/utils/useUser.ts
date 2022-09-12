import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { initFirebase } from 'src/utils/firebaseConfig'
import { getAuth } from 'firebase/auth'
import { removeUserCookie, setUserCookie, getUserFromCookie } from 'src/utils/userCookie'
import { mapUserData } from 'src/utils/mapUserData'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { setUser } from 'store/slices/userSlice'

initFirebase()

const useUser = () => {
	const dispatch = useAppDispatch()
	const user = useAppSelector(state => state.userSlice)
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
		const cancelAuthListener = auth.onIdTokenChanged((user) => {
			if (user) {
				const userData = mapUserData(user)
				setUserCookie(userData)
				dispatch(setUser(userData))
			} else {
				removeUserCookie()
				dispatch(setUser(null))
			}
		})

		const userFromCookie = getUserFromCookie()
		!userFromCookie ? router.push('/welcome') : dispatch(setUser(userFromCookie))
		userFromCookie && router.push('/')
		
		return () => {
			cancelAuthListener()
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return [ user, logout ]
}

export { useUser }
