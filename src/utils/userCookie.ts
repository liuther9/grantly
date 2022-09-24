import Cookies from 'js-cookie'
const removeUserCookie = () => Cookies.remove('auth')
const setUserCookie = (data: any) => {
	Cookies.set('auth', JSON.stringify(data), {
		expires: 1/24
	})
}
const getUserFromCookie = () => {
	const data = Cookies.get('auth')
	return data && JSON.parse(data)
}

export { removeUserCookie, getUserFromCookie, setUserCookie }
