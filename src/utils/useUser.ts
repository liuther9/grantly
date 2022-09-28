import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { getDoc, doc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { removeUserCookie, setUserCookie } from 'src/utils/userCookie'
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
			removeUserCookie()
			router.push('/welcome')
		} catch (e: any) {
			console.log(e.message)
		}
	}

	useEffect(() => {
		localStorage.getItem('user') && dispatch(setUser(JSON.parse(localStorage.getItem('user') || '')))
	}, [dispatch])

	useEffect(() => {
		const cancelAuthListener = auth.onIdTokenChanged(async (user) => {
			if (user) {
				const userData = mapUserData(user)
				const userFromDb = await getDoc(doc(db, 'users', userData.id))
				const token = await user.getIdToken()

				setUserCookie(token)
				dispatch(setUser({ ...userData, ...userFromDb.data() }))
				router.push('/')
			} else {
				removeUserCookie()
				dispatch(setUser(null))
				router.push('/welcome')
			}
		})
		return () => {
			cancelAuthListener()
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

  useEffect(() => {
    const handle = setInterval(async () => {
      const user = getAuth().currentUser;
      user && await user.getIdToken(true);
    }, 10 * 60 * 1000);

    return () => clearInterval(handle);
  }, []);

	return [ userState, logout ]
}

export { useUser }
