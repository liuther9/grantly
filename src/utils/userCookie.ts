import cookies from 'js-cookie'

export const getUserFromCookie = () => cookies.get('auth') ? JSON.parse(cookies.get('auth') || '{}') : null

export const setUserCookie = (user: any) => {
	cookies.set('auth', JSON.stringify(user), {
		expires: 1 / 24,
	})
}

export const removeUserCookie = () => cookies.remove('auth')
