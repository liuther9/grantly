import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IQuestionnare } from 'types/index'

const initialState: IQuestionnare = {
	instagram: '',
	name: '',
	city: '',
	birthdate: '',
	careers: [],
	average: '',
	olymps: '',
	sex: '',
}

export const questionnaireSlice = createSlice({
	name: 'questionnaire',
	initialState,
	reducers: {
		setQuestionnaire: (state, { payload }: PayloadAction<Partial<IQuestionnare>>) => {
			return {
				...state,
				...payload,
			}
		},
	},
})

export const { setQuestionnaire } = questionnaireSlice.actions

export default questionnaireSlice.reducer
