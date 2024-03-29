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
		addTracker: (state, { payload }: PayloadAction<ITracker>) => {
			return {
				trackers: [...state.trackers, payload],
				otherTrackers: state.otherTrackers.filter((i) => i.title !== payload.title),
			}
		},
		setStages: (state, { payload }: PayloadAction<{ id: any, stages: any }>) => {
			const data = state.trackers.find(i => i.title === payload.id)
			if (data) {
				data.stages = [...payload.stages]
			}
		}
	},
})

export const { setTrackers, setOtherTrackers, addTracker, setStages } = trackersSlice.actions

export default trackersSlice.reducer
