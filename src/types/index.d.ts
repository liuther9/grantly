interface IQuestionnare {
	instagram: string
	name: string
	city: string
	birthdate: string
	careers: string[]
	average: string
	olymps: string
	sex: string
}

interface IUser {
	id: string
	email: string
	token: string
	name: string
	phone?: any
	profilePic: string
	trackers: any[] | null
	score: number
	stage: string
	questionnaireStatus: '' | 'inProgress' | 'ready'
}

interface ITracker {
	title: string
	name: string
	private: boolean
	description: string
	stages: IStage[]
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

interface IAnnouncement {
	id: string
	name: string
	description: string
	maxUsers: number
	img: string
	votes: string[]
}

export { IQuestionnare, IUser, ITracker, IStage, IAnnouncement }
