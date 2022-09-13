import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITracker } from 'types/index'

const initialState: ITracker[] = []

export const trackersSlice = createSlice({
  name: 'trackers',
  initialState,
  reducers: {
    setTrackers: (state, { payload }: PayloadAction<any>) => {
			if (!state.find(e => e.title === payload.title)) {
				return [...state, payload]
			} else return state
		},
	},
})

export const { setTrackers } = trackersSlice.actions

export default trackersSlice.reducer