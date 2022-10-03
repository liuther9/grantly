import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAnnouncement } from 'types/index'

const initialState: IAnnouncement[] = []

export const announcementsSlice = createSlice({
	name: 'announcements',
	initialState,
	reducers: {
		setAnnouncements: (state, { payload }: PayloadAction<any>) => {
			if (!state.find((e) => e.id === payload.id)) {
				return [ ...state, payload ]
			} else return state
		},
	},
})

export const { setAnnouncements } = announcementsSlice.actions

export default announcementsSlice.reducer
