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
	trackers: any[] | null
}

interface ITracker {
	title: string
	name: string
	private: boolean
	description: string
}

interface IStage {
	button: string
	date: string
	description: string
	duration: number
	id: number
	live: boolean
	name: string
	url: string
	title: string
}

export { IQuestionnare, IUser, ITracker, IStage }
