interface IQuestionnare {
	instagram: string
	name: string
	city: string
	birthdate: string
	careers: string
	average: string
	olymps: string
	sex: string
}

interface IUser {
	id: string
	email: string
	token: string
	name: string
	profilePic: string
	trackers: any[]
}

interface ITracker {
	title: string
	name: string
	private: boolean
}

export { IQuestionnare, IUser, ITracker }
