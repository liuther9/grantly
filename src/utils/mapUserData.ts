export const mapUserData = (user: any) => {
	const { uid, email, accessToken, displayName, photoURL, phoneNumber } = user
	return {
		id: uid,
		email,
		token: accessToken,
		name: displayName,
		profilePic: photoURL,
		phone: phoneNumber,
	}
}
