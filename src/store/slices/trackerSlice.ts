import { createSlice } from '@reduxjs/toolkit'
import { IStage } from 'types/index'

type Type = { show: boolean; stage: IStage | null }
const initialState: Type = {
	show: false,
	stage: null,
}

export const trackerSlice = createSlice({
	name: 'tracker',
	initialState,
	reducers: {
		showTracker: (state, { payload }) => {
			return {
				...state,
				...payload,
			}
		},
	},
})

export const { showTracker } = trackerSlice.actions

export default trackerSlice.reducer
