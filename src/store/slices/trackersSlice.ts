import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITracker } from 'types/index'

const initialState: { trackers: ITracker[]; otherTrackers: ITracker[] } = {
	trackers: [],
	otherTrackers: [],
}

export const trackersSlice = createSlice({
	name: 'trackers',
	initialState,
	reducers: {
		setTrackers: (state, { payload }: PayloadAction<any>) => {
			if (!state.trackers.find((e) => e.title === payload.title)) {
				return { ...state, trackers: [...state.trackers, payload] }
			} else return state
		},
		setOtherTrackers: (state, { payload }: PayloadAction<any>) => {
			if (!state.otherTrackers.find((e) => e.title === payload.title)) {
				return { ...state, otherTrackers: [...state.otherTrackers, payload] }
			} else return state
		},
	},
})

export const { setTrackers, setOtherTrackers } = trackersSlice.actions

export default trackersSlice.reducer
